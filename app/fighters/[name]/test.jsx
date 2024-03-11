// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { db } from "@/app/DBinit";


// export default function FighterProfile() {
//     const router = useRouter();
//     const [fighterData, setFighterData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const fightersSnapshot = await db.collection("Fighters").get();
//                 const allEntries = fightersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//                 setFighterData(allEntries);
//                 setLoading(false);

//                 // If the name parameter exists, display the corresponding fighter profile
//                 const { name } = router.query;

//                 if (name) {
//                     displayFighterProfile(name, allEntries);
//                 }
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [router.query]);

//     const displayFighterProfile = (fighterName, allEntries) => {
//         const fighterProfile = allEntries.find((entry) => entry.name === fighterName);
//         if (fighterProfile) {
//             // Display the fighter's profile on the profile page
//             document.getElementById("profileImage").src = fighterProfile.img1;
//             document.getElementById("profileName").textContent = `Name: ${fighterProfile.name}`;
//             document.getElementById("profileDataCenter").textContent = `Data Center/World: ${fighterProfile.world}`;
//             document.getElementById("profileRank").textContent = `Rank: #${fighterProfile.rank}`;
//             document.getElementById("profilePoints").textContent = `Points: ${fighterProfile.points}`;
//             document.getElementById("profileFights").textContent = `Fights: ${fighterProfile.fights}`;
//             document.getElementById("profileWins").textContent = `Wins: ${fighterProfile.wins}`;
//             document.getElementById("profileLosses").textContent = `Losses: ${fighterProfile.losses}`;
//             document.getElementById("profileDraws").textContent = `Draws: ${fighterProfile.draws}`;
//         } else {
//             console.error("Fighter not found:", fighterName);
//         }
//     };

//     if (!fighterData) {
//         return <p>Error fetching data. Please try again later.</p>;
//     }

//     return <FighterData {...props} />;
// }