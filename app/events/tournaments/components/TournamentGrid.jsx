'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { db } from "@/app/DBinit";
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import './TournamentGrid.css';

const TournamentGrid = () => {
  const [participants, setParticipants] = useState([]);
  const [tournamentData, setTournamentData] = useState({
    a_round1fighters: [],
    a_round2fighters: [],
    a_round3fighters: [],
    a_champ: '',
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
            a_champ: data.a_champ || '',
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

  const getParticipantInfo = (participantId) => {
    return participants.find(participant => participant.id === participantId) || {};
  };

 // Helper function to get fighter ID at a specific position in the string
const getFighterIdAtPosition = (fightersString, position) => {
  if (!fightersString || typeof fightersString !== 'string') {
    // If fightersString is null, undefined, or not a string, return an empty string or handle it accordingly
    return '';
  }

  const fighters = fightersString.split(',');

  if (!Array.isArray(fighters) || fighters.length <= position) {
    // If fighters is not an array or the position is out of bounds, return an empty string or handle it accordingly
    return '';
  }

  return fighters[position];
};

  return (
    <div className="col-12">
      <div className='col-md-12 d-flex justify-content-center flex-wrap round1'>
        {[0, 2, 4, 6].map((position, index) => (
          <div key={index} className='col-md-3 d-flex justify-content-center text-center flex-wrap round1-match'>
            <div className='col-md-5 fighter'>
        <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.a_round1fighters, position)).name || '').replace(/\s/g, '.')}`}>
       
            <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.a_round1fighters, position)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
            <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.a_round1fighters, position)).name || `Player ${index * 2 + 1}`}</p>
     
        </Link>
      </div>
      <p className='col-md-2 vs'>VS</p>
      <div className='col-md-5 fighter'>
        <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.a_round1fighters, position + 1)).name || '').replace(/\s/g, '.')}`}>
        
            <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.a_round1fighters, position + 1)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
            <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.a_round1fighters, position + 1)).name || `Player ${index * 2 + 2}`}</p>
    
        </Link>
      </div>
<div className='col-md-12 d-flex text-center flex-wrap'>
      <div className="col-md-12 fight-border"></div>
      <div className="col-md-6"></div>
      <div className="col-1 winner-border"></div>
      <div className="col-md-6"></div>
</div>
    </div>
        ))}
      </div>

      <div className='col-md-12 d-flex justify-content-center flex-wrap round2'>
        {[0, 2].map((position, index) => (
          <div key={index} className='col-md-6 justify-content-center d-flex text-center flex-wrap round2-match'>
            <div className='col-md-3 fighter'>
        <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.a_round1fighters, position)).name || '').replace(/\s/g, '.')}`}>
     
            <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.a_round1fighters, position)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
            <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.a_round1fighters, position)).name || `Player ${index * 2 + 1}`}</p>

        </Link>
      </div>
      <p className='vs'>VS</p>
      <div className='col-md-3 fighter'>
        <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.a_round1fighters, position + 1)).name || '').replace(/\s/g, '.')}`}>
   
            <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.a_round1fighters, position + 1)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
            <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.a_round1fighters, position + 1)).name || `Player ${index * 2 + 2}`}</p>
   
        </Link>
      </div>
<div className='col-md-12 d-flex text-center flex-wrap'>
      <div className="col-md-12 fight-border"></div>
      <div className="col-md-6"></div>
      <div className="col-1 winner-border"></div>
      <div className="col-md-6"></div>
</div>
    </div>
        ))}
      </div>

      <div className='col-md-12 d-flex justify-content-center flex-wrap round3'>
        {[0].map((position, index) => (
          <div key={index} className='col-md-10 d-flex justify-content-center text-center flex-wrap round3-match'>
            <div className='col-md-2 fighter'>
        <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.a_round1fighters, position)).name || '').replace(/\s/g, '.')}`}>

            <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.a_round1fighters, position)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
            <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.a_round1fighters, position)).name || `Player ${index * 2 + 1}`}</p>

        </Link>
      </div>
      <p className='vs'>VS</p>
      <div className='col-md-2 fighter'>
        <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.a_round1fighters, position + 1)).name || '').replace(/\s/g, '.')}`}>

            <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.a_round1fighters, position + 1)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
            <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.a_round1fighters, position + 1)).name || `Player ${index * 2 + 2}`}</p>

        </Link>
      </div>
<div className='col-md-12 d-flex text-center flex-wrap'>
      <div className="col-md-12 fight-border"></div>
      <div className="col-md-6"></div>
      <div className="col-1 winner-border"></div>
      <div className="col-md-6"></div>
</div>
    </div>
        ))}
      </div>

      <div className='col-md-12 d-flex justify-content-center text-center bracket-champ'>
        <div className='col-md-1_5 fighter'>
        <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.a_champ, 0)).name || '').replace(/\s/g, '.')}`}>

      <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.a_champ, 0)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
      <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.a_champ, 0)).name || `Champion`}</p>
  </Link>
        </div>
      </div>
    </div>
  );
};

export default TournamentGrid;
