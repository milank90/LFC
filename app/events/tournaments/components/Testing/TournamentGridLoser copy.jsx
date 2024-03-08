'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { db } from "@/app/DBinit";
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';


const TournamentGridLoser = () => {
  const [participants, setParticipants] = useState([]);
  const [tournamentData, setTournamentData] = useState({
    a_lround1fighters: [],
    a_lround2fighters: [],
    a_lround3fighters: [],
    a_lround4fighters: [],
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
            a_lround1fighters: data.a_lround1fighters || [],
            a_lround2fighters: data.a_lround2fighters || [],
            a_lround3fighters: data.a_lround3fighters || [],
            a_lround4fighters: data.a_lround4fighters || [],
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

      {/* Round 4 */}
      <div className='col-md-12 d-flex text-center lround4'>
        <div className='col-md-2'></div>
        <div className='col-md-5 d-flex text-center justify-content-center text-end flex-wrap round4-match'>
          <div className='col-md-12 d-flex flex-wrap'>
            <div className="col-1 f_lwinner-border"></div>
            <div className="col-md-12 f_lfight-border"></div>
          </div>
          <div className='col-md-5 fighter'>
            <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround4fighters, 0)).name || '').replace(/\s/g, '.')}`}>
              <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround4fighters, 0)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
              <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround4fighters, 0)).name || 'Player 1'}</p>
            </Link>
          </div>
          <p className='col-md-2 vs'>VS</p>
          <div className='col-md-5 fighter'>
            <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround4fighters, 1)).name || '').replace(/\s/g, '.')}`}>
              <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround4fighters, 1)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
              <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround4fighters, 1)).name || 'Player 2'}</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Round 3 */}
      <div className='col-md-12 justify-content-center d-flex lround3'>
        <div className='col-md-8 d-flex text-center justify-content-center flex-wrap round3-match'>
          <div className='col-md-12 d-flex text-center flex-wrap'>
            <div className="col-md-6"></div>
            <div className="col-1 lwinner-border"></div>
            <div className="col-md-6"></div>
            <div className="col-md-12 lfight-border"></div>
          </div>
          {/* Fighter 1 */}
          <div className='col-md-5 fighter'>
            <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround3fighters, 0)).name || '').replace(/\s/g, '.')}`}>
              <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround3fighters, 0)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
              <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround3fighters, 0)).name || 'Player 1'}</p>
            </Link>
          </div>
          <p className='col-md-2 vs'>VS</p>
          {/* Fighter 2 */}
          <div className='col-md-5 fighter'>
            <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround3fighters, 1)).name || '').replace(/\s/g, '.')}`}>
              <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround3fighters, 1)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
              <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround4fighters, 1)).name || 'Player 2'}</p>
  </Link>
          </div>

        </div>
      </div>
      



      <div className='col-md-12 d-flex justify-content-center text-center lround2'>
        <div className='col-md-3 d-flex text-center justify-content-center flex-wrap round2-match'>

        <div className='col-md-12 d-flex text-center flex-wrap'>
            <div className="col-md-6"></div>
            <div className="col-1 lwinner-border"></div>
            <div className="col-md-6"></div>
            <div className="col-md-12 lfight-border"></div>
        </div>
          
        <div className='col-md-5 fighter'>
        <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround2fighters, 0)).name || '').replace(/\s/g, '.')}`}>
        <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround2fighters, 0)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
        <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround2fighters, 0)).name || `Player ${0 * 2 + 1}`}</p>
      </Link>
    </div>
    <p className='col-md-2 vs'>VS</p>
    <div className='col-md-5 fighter'>
      <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround2fighters, 1)).name || '').replace(/\s/g, '.')}`}>
        <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround2fighters, 1)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
        <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround2fighters, 1)).name || `Player ${0 * 2 + 2}`}</p>
      </Link>
    </div>

        </div>
        <div className="col-md-1_5"></div>
        <div className='col-md-3 d d-flex text-center justify-content-center flex-wrap round2-match'>
          <div className='col-md-12 d-flex text-center flex-wrap'>
            <div className="col-md-6"></div>
            <div className="col-1 lwinner-border"></div>
            <div className="col-md-6"></div>
            <div className="col-md-12 lfight-border"></div>

          </div>
          <div className='col-md-5 fighter'>
          <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround2fighters, 2)).name || '').replace(/\s/g, '.')}`}>
        <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround2fighters, 2)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
        <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround2fighters, 2)).name || `Player ${1 * 2 + 1}`}</p>
      </Link>
    </div>
    <p className='col-md-2 vs'>VS</p>
    <div className='col-md-5 fighter'>
      <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround2fighters, 3)).name || '').replace(/\s/g, '.')}`}>
        <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround2fighters, 3)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
        <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround2fighters, 3)).name || `Player ${1 * 2 + 2}`}</p>
      </Link>
    </div>

        </div>
      </div>  



      <div className='col-md-12 d-flex justify-content-center round1'>
        <div className='col-md-3 d-flex text-center flex-wrap round1-match'>
        </div>
        <div className='col-md-3 d-flex text-center justify-content-center flex-wrap round1-match'>

          <div className='col-md-12 d-flex text-center flex-wrap'>
            <div className="col-md-6"></div>
            <div className="col-1 lwinner-border"></div>
            <div className="col-md-6"></div>
            <div className="col-md-12 lfight-border"></div>
          </div>
          <div className='col-md-5 fighter'>
          <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround1fighters, 0)).name || '').replace(/\s/g, '.')}`}>
        <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround1fighters, 0)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
        <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround1fighters, 0)).name || `Player ${0 * 2 + 1}`}</p>
      </Link>
    </div>
    <p className='col-md-2 vs'>VS</p>
    <div className='col-md-5 fighter'>
      <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround1fighters, 1)).name || '').replace(/\s/g, '.')}`}>
        <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround1fighters, 1)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
        <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround1fighters, 1)).name || `Player ${0 * 2 + 2}`}</p>
      </Link>
    </div>

        </div>
        <div className='col-md-3 d-flex text-center justify-content-center flex-wrap round1-match'>

        <div className='col-md-12 d-flex text-center flex-wrap'>
            <div className="col-md-6"></div>
            <div className="col-1 lwinner-border"></div>
            <div className="col-md-6"></div>
            <div className="col-md-12 lfight-border"></div>
          </div>
          <div className='col-md-5 fighter'>
          <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround1fighters, 2)).name || '').replace(/\s/g, '.')}`}>
        <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround1fighters, 2)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
        <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround1fighters, 2)).name || `Player ${1 * 2 + 1}`}</p>
      </Link>
    </div>
    <p className='col-md-2 vs'>VS</p>
    <div className='col-md-5 fighter'>
      <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround1fighters, 3)).name || '').replace(/\s/g, '.')}`}>
        <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround1fighters, 3)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
        <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.a_lround1fighters, 3)).name || `Player ${1 * 2 + 2}`}</p>
      </Link>
    </div>

        </div>
        <div className='col-md-3 d-flex text-center flex-wrap round1-match'>

        </div>
      </div>

      
        
    </div>
        

       
    
    
    
    
      
  );
};

export default TournamentGridLoser;