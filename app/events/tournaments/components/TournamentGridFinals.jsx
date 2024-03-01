'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { db } from "@/app/DBinit";
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';


const TournamentGridFinals = () => {
    const [participants, setParticipants] = useState([]);
  
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
  
      fetchParticipants();
    }, []);
  
    const getParticipantInfo = (participantId) => {
      return participants.find(participant => participant.id === participantId) || {};
    };
  
    const participantsData = [
      [
        { participantId: '05FMvUFxQ7ommVLEnRQu', position: 'left' },
        { participantId: '05FMvUFxQ7ommVLEnRQu', position: 'right' },
        
        { participantId: '05FMvUFxQ7ommVLEnRQu', position: 'left' },
        { participantId: '05FMvUFxQ7ommVLEnRQu', position: 'right' },
  
        { participantId: '05FMvUFxQ7ommVLEnRQu', position: 'left' },
        { participantId: '05FMvUFxQ7ommVLEnRQu', position: 'right' },
  
        { participantId: '05FMvUFxQ7ommVLEnRQu', position: 'left' },
        { participantId: '05FMvUFxQ7ommVLEnRQu', position: 'right' },
      ],
      [
        { participantId: '05FMvUFxQ7ommVLEnRQu', position: 'left' },
        { participantId: '05FMvUFxQ7ommVLEnRQu', position: 'right' },
  
        { participantId: '05FMvUFxQ7ommVLEnRQu', position: 'left' },
        { participantId: '05FMvUFxQ7ommVLEnRQu', position: 'right' },
      ],
      [
        { participantId: '05FMvUFxQ7ommVLEnRQu', position: 'left' },
        { participantId: '05FMvUFxQ7ommVLEnRQu', position: 'right' },
      ],
      [
        { participantId: '05FMvUFxQ7ommVLEnRQu', position: 'left' },
      ],
    ];
    
    return (
  
  <div className="col-12">
  
<div className='col-md-12 d-flex finals'>
    <div className='col-4'></div>
    <div className='col-md-4 d-flex text-center justify-content-center flex-wrap finals-match'>
    
      <div className='col-md-7 fighter'>
        <Image src={getParticipantInfo(participantsData[0][1].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
        <p>{getParticipantInfo(participantsData[0][1].participantId).name || 'Player 2'}</p>
      </div>

      
        <div className='col-md-6'></div>
        <div className='col-md-6 d-flex flex-wrap'>
          
          <div className="f_winner-border"></div>
          <div className="col-md-12 f_fight-border"></div>
        </div>
  
        <div className='col-md-7 fighter'>
          <Image src={getParticipantInfo(participantsData[0][0].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}   />
          <p>{getParticipantInfo(participantsData[0][0].participantId).name || 'Player 1'}</p>
        </div>
        
    </div>
    <div className='col-md-3 d-flex align-items-center bracket-champ'>
        <div className='col-md-12 fighter'>
          <Image src={getParticipantInfo(participantsData[0][1].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
          <p>{getParticipantInfo(participantsData[0][1].participantId).name || 'Player 2'}</p>
        </div>
    </div>

  
    </div>
</div>
    
  );
};

export default TournamentGridFinals;