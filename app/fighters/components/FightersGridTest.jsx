// "use client";

// import React, { useEffect, useState } from "react";
// import { getDocs, collection } from "firebase/firestore";
// import { db } from "@/app/DBinit";
// import { useRouter } from "next/navigation";

// const FightersGrid = () => {
//     const [fighters, setFighters] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 15;
//     const router = useRouter();

//     useEffect(() => {
//         const colRef = collection(db, "Fighters");

//         getDocs(colRef)
//             .then((snapshot) => {
//                 const fightersData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//                 setFighters(fightersData);
//             })
//             .catch((err) => {
//                 console.log(err.message);
//             });
//     }, []);

//     const displayFighters = (pageNumber) => {
//         const fighterGridElement = document.getElementById("fighterGrid");

//         if (fighterGridElement) {
//             const sortedData = [...fighters].sort((a, b) => a.name.localeCompare(b.name));
//             const totalPages = Math.ceil(sortedData.length / itemsPerPage);

//             const startIndex = (pageNumber - 1) * itemsPerPage;
//             const endIndex = startIndex + itemsPerPage;

//             const fightersToShow = sortedData.slice(startIndex, endIndex);

//             fighterGridElement.innerHTML = ""; // Clear existing content

//             fightersToShow.forEach((item) => {
//                 const fighterCard = document.createElement("div");
//                 fighterCard.addEventListener("click", () => {
//                     router.push(`/fighters/${item.name.replace(/\s+/, ".")}`);
//                 });
//                 fighterCard.classList.add("fighter-card");

//                 const imageLink = item["img1"];

//                 if (imageLink && imageLink.match(/\.(jpeg|jpg|gif|png)$/) !== null) {
//                     const img = document.createElement("img");
//                     img.src = imageLink;
//                     img.alt = "Fighter Image";
//                     img.classList.add("fighter-image");
//                     fighterCard.appendChild(img);
//                 }

//                 const nameElement = document.createElement("p");
//                 nameElement.textContent = item["name"];
//                 fighterCard.appendChild(nameElement);

//                 const table = document.createElement("table");
//                 table.classList.add("fighter-table");
//                 const headerRow = table.insertRow(0);
//                 const valuesRow = table.insertRow(1);

//                 const propertyNameMapping = {
//                     rank: "Rank",
//                     points: "Points",
//                     totalfights: "Fights",
//                 };

//                 Object.keys(propertyNameMapping).forEach((propertyName, index) => {
//                     const headerCell = headerRow.insertCell(index);
//                     headerCell.textContent = propertyNameMapping[propertyName];
//                     headerCell.style.border = "none";
//                     headerCell.style.textAlign = "center";
//                     headerCell.style.paddingBottom = "0px";

//                     const valueCell = valuesRow.insertCell(index);
//                     valueCell.textContent = item[propertyName];
//                     valueCell.style.border = "none";
//                     valueCell.style.textAlign = "center";
//                     valueCell.style.paddingBottom = "0px";

//                     if (index === 1) {
//                         valueCell.style.paddingRight = "25px";
//                         valueCell.style.paddingLeft = "25px";
//                     } else {
//                         valueCell.style.paddingRight = "0";
//                         valueCell.style.paddingLeft = "0";
//                     }

//                     valueCell.style.paddingBottom = "0px";
//                 });

//                 table.style.margin = "0 auto";

//                 fighterCard.appendChild(table);

//                 const wdlHeader = document.createElement("p");
//                 wdlHeader.textContent = "W - L - D";
//                 wdlHeader.style.marginTop = "15px";
//                 wdlHeader.style.marginBottom = "0px";
//                 fighterCard.appendChild(wdlHeader);

//                 const wdlElement = document.createElement("p");
//                 wdlElement.textContent = `${item["wins"]} - ${item["losses"]} - ${item["draws"]}`;
//                 wdlElement.style.marginTop = "0px";
//                 wdlElement.style.textAlign = "center";
//                 fighterCard.appendChild(wdlElement);

//                 fighterGridElement.appendChild(fighterCard);
//             });
//         }
//     };

//     const createPaginationButtons = () => {
//         const paginationContainerTop = document.getElementById("pagination-t");
//         const paginationContainerBottom = document.getElementById("pagination-b");

//         if (paginationContainerTop && paginationContainerBottom) {
//             paginationContainerTop.innerHTML = "";
//             paginationContainerBottom.innerHTML = "";

//             const maxVisiblePages = 5;
//             const totalPages = Math.ceil(fighters.length / itemsPerPage);

//             let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
//             let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

//             startPage = Math.max(1, endPage - maxVisiblePages + 1);

//             if (totalPages <= maxVisiblePages) {
//                 startPage = 1;
//                 endPage = totalPages;
//             }

//             const createButton = (pageNumber) => {
//                 const button = document.createElement("button");
//                 button.textContent = pageNumber;
//                 button.addEventListener("click", () => {
//                     setCurrentPage(pageNumber);
//                 });

//                 if (pageNumber === currentPage) {
//                     button.style.fontWeight = "bold";
//                     button.style.textDecoration = "underline";
//                 }

//                 return button;
//             };

//             const createPreviousButton = () => {
//                 const previousButton = document.createElement("button");
//                 previousButton.textContent = "<<";
//                 previousButton.addEventListener("click", () => {
//                     if (currentPage > 1) {
//                         setCurrentPage((prevPage) => prevPage - 1);
//                     }
//                 });
//                 return previousButton;
//             };

//             const createNextButton = () => {
//                 const nextButton = document.createElement("button");
//                 nextButton.textContent = ">>";
//                 nextButton.addEventListener("click", () => {
//                     if (currentPage < totalPages) {
//                         setCurrentPage((prevPage) => prevPage + 1);
//                     }
//                 });
//                 return nextButton;
//             };

//             [paginationContainerTop, paginationContainerBottom].forEach((paginationContainer) => {
//                 paginationContainer.appendChild(createPreviousButton());

//                 for (let i = startPage; i <= endPage; i++) {
//                     paginationContainer.appendChild(createButton(i));
//                 }

//                 paginationContainer.appendChild(createNextButton());
//             });
//         }
//     };

//     useEffect(() => {
//         displayFighters(currentPage);
//         createPaginationButtons();
//     }, [fighters, currentPage]);

//     return (
//         <div className="container c">
//             <div
//                 id="pagination-t"
//                 className="pagin-cont"
//                 style={{ marginTop: "300px" }}
//             ></div>
//             <hr style={{ height: "5px", width: "100%" }} />
//             <div
//                 className="fighter-grid"
//                 id="fighterGrid"
//                 style={{ marginTop: "50px" }}
//             ></div>
//             <div
//                 id="pagination-b"
//                 className="pagin-cont"
//             ></div>
//         </div>
//     );
// };

// export default FightersGrid;