"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/app/DBinit";
import { useRouter } from "next/navigation";
import FightersCard from "../../fighters/components/FightersCard";
import { collection, getDocs } from "firebase/firestore";


const FighterGridTest = () => {
    const router = useRouter();
    const [fighters, setFighters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

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

    const displayFighters = (pageNumber) => {
        const fighterGridElement = document.getElementById("fighterGrid");

        if (fighterGridElement) {
            const sortedData = [...fighters].sort((a, b) => a.name.localeCompare(b.name));
            const totalPages = Math.ceil(sortedData.length / itemsPerPage);

            const startIndex = (pageNumber - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;

            const fightersToShow = sortedData.slice(startIndex, endIndex);

            fighterGridElement.innerHTML = ""; // Clear existing content

            fightersToShow.forEach((fighter) => (
                <FightersCard
                    key={fighter.id}
                    {...fighter}
                />
            ));
        }
    };

    const handleFighterClick = (item) => {
        router.push(`/fighters/${item.name.replace(/\s+/g, ".")}`);
    };

    const createPaginationButtons = () => {
        const maxVisiblePages = 5;
        const totalPages = Math.ceil(fighters.length / itemsPerPage);

        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

        startPage = Math.max(1, endPage - maxVisiblePages + 1);

        if (totalPages <= maxVisiblePages) {
            startPage = 1;
            endPage = totalPages;
        }

        const buttons = [];
        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <button
                    key={`button-${i}`}
                    onClick={() => setCurrentPage(i)}
                    style={{
                        fontWeight: i === currentPage ? "bold" : "normal",
                        textDecoration: i === currentPage ? "underline" : "none",
                    }}
                >
                    {i}
                </button>
            );
        }

        return buttons;
    };

    useEffect(() => {
        displayFighters(currentPage);
        createPaginationButtons();
    }, [fighters, currentPage]);

    return (
        <div className="flex">
            {fighters.map((fighter) => (
                <FightersCard
                    key={fighter.id}
                    {...fighter}
                />
            ))}
        </div>
    );
};

export default FighterGridTest;
