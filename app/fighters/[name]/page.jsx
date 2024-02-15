"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/app/DBinit";



export default function FighterProfile() {
    const router = useRouter();
    const [fighterData, setFighterData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedFighter, setSelectedFighter] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const fightersSnapshot = await db.collection("Fighters").get();
          const allEntries = fightersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setFighterData(allEntries);
          setLoading(false);
  
          // If the name parameter exists, set the selected fighter
          const { name } = router.query;
  
          if (name) {
            const fighterProfile = allEntries.find((entry) => entry.name === name);
            setSelectedFighter(fighterProfile);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [router.query]);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (!selectedFighter) {
      return <p>Fighter not found.</p>;
    }
  
    return (
      <div>
        <img src={selectedFighter.img1} alt="Fighter Image" id="profileImage" />
        <p>Name: {selectedFighter.name}</p>
        <p>Data Center/World: {selectedFighter.world}</p>
        <p>Rank: #{selectedFighter.rank}</p>
        <p>Points: {selectedFighter.points}</p>
        <p>Fights: {selectedFighter.fights}</p>
        <p>Wins: {selectedFighter.wins}</p>
        <p>Losses: {selectedFighter.losses}</p>
        <p>Draws: {selectedFighter.draws}</p>
      </div>
    );
  }
