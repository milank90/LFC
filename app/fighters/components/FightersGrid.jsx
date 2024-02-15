"use client";

import React, { useEffect, useState } from "react";
import FighterCard from "./FightersCard";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/app/DBinit";
import { useRouter } from "next/navigation";

const FightersGrid = () => {
    const [fighters, setFighters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;
    const router = useRouter();
  
    useEffect(() => {
      const colRef = collection(db, "Fighters");
  
      getDocs(colRef)
        .then((snapshot) => {
          const fightersData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setFighters(fightersData);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, []);
  
    const handleCardClick = (fighterName) => {
      router.push(`/fighters/${fighterName}`);
    };
  
    const displayFighters = (pageNumber) => {
      const startIndex = (pageNumber - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const fightersToShow = fighters.slice(startIndex, endIndex);
  
      return fightersToShow.map((item) => (
        <FighterCard key={item.id} fighter={item} onCardClick={handleCardClick} />
      ));
    };
  
    const totalPages = Math.ceil(fighters.length / itemsPerPage);
  
    const createPaginationButtons = () => {
      const maxVisiblePages = 5;
      let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
      let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
  
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
  
      if (totalPages <= maxVisiblePages) {
        startPage = 1;
        endPage = totalPages;
      }
  
      const paginationButtons = [];
  
      const createButton = (pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setCurrentPage(pageNumber)}
          style={{
            fontWeight: pageNumber === currentPage ? "bold" : "normal",
            textDecoration: pageNumber === currentPage ? "underline" : "none",
          }}
        >
          {pageNumber}
        </button>
      );
  
      paginationButtons.push(createPreviousButton());
  
      for (let i = startPage; i <= endPage; i++) {
        paginationButtons.push(createButton(i));
      }
  
      paginationButtons.push(createNextButton());
  
      return paginationButtons;
    };
  
    const createPreviousButton = () => (
      <button key="previous" onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}>
        {"<<"}
      </button>
    );
  
    const createNextButton = () => (
      <button
        key="next"
        onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
      >
        {">>"}
      </button>
    );
  
    return (
      <div className="container c">
        <div className="pagin-cont" style={{ marginTop: "300px" }}>
          {createPaginationButtons()}
        </div>
        <hr style={{ height: "5px", width: "100%" }} />
        <div className="fighter-grid" id="fighterGrid" style={{ marginTop: "50px" }}>
          {displayFighters(currentPage)}
        </div>
        <div className="pagin-cont">{createPaginationButtons()}</div>
      </div>
    );
  };
  
  export default FightersGrid;
