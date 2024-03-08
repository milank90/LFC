'use client'

import React, { useEffect, useState } from 'react';
import TournamentWBracket from './TournamentWBracket';
import TournamentLBracket from './TournamentLBracket';
import TournamentBracketFinals from './TournamentBracketFinals';
import { db } from "@/app/DBinit";
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import './TournamentGrid.css';

const TournamentGrid = () => {
    const [participants, setParticipants] = useState([]);
    const [tournamentData, setTournamentData] = useState({
      a_round1fighters: [],
      a_round2fighters: [],
      a_round3fighters: [],
      a_lround1fighters: [],
      a_lround2fighters: [],
      a_lround3fighters: [],
      a_lround4fighters: [],
      a_bracket_finals: [],
      a_bracket_winner: [],
    });
  
    useEffect(() => {
      const fetchParticipants = async () => {
        try {
          const colRef = collection(db, 'Fighters');
          const snapshot = await getDocs(colRef);
          const playerData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setParticipants(playerData);
        } catch (error) {
          console.error('Error fetching participants:', error.message);
        }
      };
  
      const fetchTournamentData = async () => {
        try {
          // Fetch tournament data from Firestore
          const docRef = doc(db, 'Tournaments', 'ilZ3MwJUk0fWJ6GFCAjy');
          const docSnap = await getDoc(docRef);
  
          if (docSnap.exists()) {
            const data = docSnap.data();
            setTournamentData({
              a_round1fighters: data.a_round1fighters || [],
              a_round2fighters: data.a_round2fighters || [],
              a_round3fighters: data.a_round3fighters || [],
              a_lround1fighters: data.a_lround1fighters || [],
              a_lround2fighters: data.a_lround2fighters || [],
              a_lround3fighters: data.a_lround3fighters || [],
              a_lround4fighters: data.a_lround4fighters || [],
              a_bracket_finals: data.a_bracket_finals || [],
              a_bracket_winner: data.a_bracket_winner || [],
            });
          } else {
            console.error('Tournament document not found');
          }
        } catch (error) {
          console.error('Error fetching tournament data:', error.message);
        }
      };
  
      fetchParticipants();
      fetchTournamentData();
    }, []);

  return (
    <div className='d-flex flex-wrap'>
      <div className='col-12 order-lg-1 order-1'>
      <TournamentWBracket participants={participants} tournamentData={tournamentData} />
      </div>
      <div className='col-12 order-lg-2 order-3'>
      <TournamentBracketFinals participants={participants} tournamentData={tournamentData} />
      </div>
      <div className='col-12 order-lg-3 order-2'>
      <TournamentLBracket participants={participants} tournamentData={tournamentData} />
      </div>
    </div>
  );
};

export default TournamentGrid;