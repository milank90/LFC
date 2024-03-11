'use client'

import React, { useState, useEffect } from 'react';
import TournamentGrid from './components/TournamentGrid';
import { db } from "@/app/DBinit";
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';

const TournamentPage = () => {
  const [selectedBracket, setSelectedBracket] = useState('a');
  const [brackets, setBrackets] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [tournamentData, setTournamentData] = useState({
    name: '',
    round1fighters: [],
    round2fighters: [],
    round3fighters: [],
    lround1fighters: [],
    lround2fighters: [],
    lround3fighters: [],
    lround4fighters: [],
    bracket_finals: [],
    bracket_winner: [],
    
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'Tournaments', 'ilZ3MwJUk0fWJ6GFCAjy');
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          const data = docSnap.data();
    
          // Extract unique bracket letters (A, B, C)
          const availableBrackets = Object.keys(data)
            .filter((key) => key.match(/[a-c]_round1fighters/))
            .map((bracket) => bracket[0].toUpperCase());
    
          setBrackets((prevBrackets) => {
            // Use Set to ensure unique values and preserve the order
            const newBrackets = [...new Set([...prevBrackets, ...availableBrackets])];
            return newBrackets;
          });
    
          setParticipants(
            (await getDocs(collection(db, 'Fighters')))
              .docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
          setTournamentData({
            name: data.name,
            round1fighters: data[`${selectedBracket}_round1fighters`] || [],
            round2fighters: data[`${selectedBracket}_round2fighters`] || [],
            round3fighters: data[`${selectedBracket}_round3fighters`] || [],
            lround1fighters: data[`${selectedBracket}_lround1fighters`] || [],
            lround2fighters: data[`${selectedBracket}_lround2fighters`] || [],
            lround3fighters: data[`${selectedBracket}_lround3fighters`] || [],
            lround4fighters: data[`${selectedBracket}_lround4fighters`] || [],
            bracket_finals: data[`${selectedBracket}_bracket_finals`] || [],
            bracket_winner: data[`${selectedBracket}_bracket_winner`] || [],
          });
        } else {
          console.error('Tournament document not found');
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [selectedBracket]);

  const handleBracketChange = (bracket) => {
    setSelectedBracket(bracket.toLowerCase());
  };

  return (
    <div className='tournament d-flex justify-content-center flex-wrap' style={{ marginTop: '150px' }}>
      <h1 className="col-12 Header text-center mb-4">{tournamentData .name}</h1>
      <div className="col-12 bracket-tabs d-flex justify-content-center">
      {brackets
  .sort() // Sort the brackets alphabetically
  .map((bracket) => (
    <button
      key={bracket}
      onClick={() => handleBracketChange(bracket.toLowerCase())}
      className={`tab-button ${selectedBracket === bracket.toLowerCase() ? 'active' : ''}`}
    >
      BRACKET "{bracket}"
    </button>
  ))}
        
      </div>
       <h3 className="col-12 Header text-center mb-4">BRACKET "{selectedBracket.toUpperCase()}"</h3>
      <TournamentGrid
        selectedBracket={selectedBracket}
        brackets={brackets}
        participants={participants}
        tournamentData={tournamentData}
      />
    </div>
  );
};

export default TournamentPage;