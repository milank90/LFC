'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { db } from "@/app/DBinit";
import { collection, getDocs } from 'firebase/firestore';
import './TournamentGrid.css';

const TournamentGrid = () => {
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
    <div className="col-12 d-flex tournament">
      <div className='col-md-3 round1'>
        <div className='col-md-12 d-flex round1-match'>
          <div className='col-md-8 fighters-container'>
            <div className='col-md-12 text-center fighter'>
              <Image src={getParticipantInfo(participantsData[0][0].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
              <p>{getParticipantInfo(participantsData[0][0].participantId).name || 'Player 1'}</p>
            </div>
            <p className='col-md-12 text-center vs'>VS</p>
            <div className='col-md-12 text-center fighter'>
              <Image src={getParticipantInfo(participantsData[0][1].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
              <p>{getParticipantInfo(participantsData[0][1].participantId).name || 'Player 2'}</p>
            </div>
          </div>
          <div className='col-md-4 d-flex flex-wrap align-items-center tournament-lines-container'>
            <div className="col-md-6 fight-border"></div>
            
            <div className="col-6 winner-border"></div>
          
          </div>
        </div>

        <div className='col-md-12 d-flex round1-match'>
          <div className='col-md-8 fighters-container'>
            <div className='col-md-12 text-center fighter'>
              <Image src={getParticipantInfo(participantsData[0][0].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
              <p>{getParticipantInfo(participantsData[0][0].participantId).name || 'Player 1'}</p>
            </div>
            <p className='col-md-12 text-center vs'>VS</p>
            <div className='col-md-12 text-center fighter'>
              <Image src={getParticipantInfo(participantsData[0][1].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
              <p>{getParticipantInfo(participantsData[0][1].participantId).name || 'Player 2'}</p>
            </div>
          </div>
          <div className='col-md-4 d-flex flex-wrap align-items-center tournament-lines-container'>
            <div className="col-md-6 fight-border"></div>
            
            <div className="col-6 winner-border"></div>
          
          </div>
        </div>

        <div className='col-md-12 d-flex round1-match'>
          <div className='col-md-8 fighters-container'>
            <div className='col-md-12 text-center fighter'>
              <Image src={getParticipantInfo(participantsData[0][0].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
              <p>{getParticipantInfo(participantsData[0][0].participantId).name || 'Player 1'}</p>
            </div>
            <p className='col-md-12 text-center vs'>VS</p>
            <div className='col-md-12 text-center fighter'>
              <Image src={getParticipantInfo(participantsData[0][1].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
              <p>{getParticipantInfo(participantsData[0][1].participantId).name || 'Player 2'}</p>
            </div>
          </div>
          <div className='col-md-4 d-flex flex-wrap align-items-center tournament-lines-container'>
            <div className="col-md-6 fight-border"></div>
            
            <div className="col-6 winner-border"></div>
          
          </div>
        </div>

        <div className='col-md-12 d-flex round1-match'>
          <div className='col-md-8 fighters-container'>
            <div className='col-md-12 text-center fighter'>
              <Image src={getParticipantInfo(participantsData[0][0].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
              <p>{getParticipantInfo(participantsData[0][0].participantId).name || 'Player 1'}</p>
            </div>
            <p className='col-md-12 text-center vs'>VS</p>
            <div className='col-md-12 text-center fighter'>
              <Image src={getParticipantInfo(participantsData[0][1].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
              <p>{getParticipantInfo(participantsData[0][1].participantId).name || 'Player 2'}</p>
            </div>
          </div>
          <div className='col-md-4 d-flex flex-wrap align-items-center tournament-lines-container'>
            <div className="col-md-6 fight-border"></div>
            
            <div className="col-6 winner-border"></div>
          
          </div>
        </div>

      </div>


      <div className='col-md-3 align-items-center d-flex flex-wrap round2'>
        <div className='col-md-12 d-flex round2-match'>
          <div className='col-md-8 fighters-container'>
            <div className='col-md-12 text-center fighter'>
              <Image src={getParticipantInfo(participantsData[0][0].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
              <p>{getParticipantInfo(participantsData[0][0].participantId).name || 'Player 1'}</p>
            </div>
            <p className='col-md-12 text-center vs'>VS</p>
            <div className='col-md-12 text-center fighter'>
              <Image src={getParticipantInfo(participantsData[0][1].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
              <p>{getParticipantInfo(participantsData[0][1].participantId).name || 'Player 2'}</p>
            </div>
          </div>
          <div className='col-md-4 d-flex flex-wrap align-items-center tournament-lines-container'>
            <div className="col-md-6 fight-border"></div>
            
            <div className="col-6 winner-border"></div>
          
          </div>
        </div>

        <div className='col-md-12 d-flex round2-match'>
          <div className='col-md-8 fighters-container'>
            <div className='col-md-12 text-center fighter'>
              <Image src={getParticipantInfo(participantsData[0][0].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
              <p>{getParticipantInfo(participantsData[0][0].participantId).name || 'Player 1'}</p>
            </div>
            <p className='col-md-12 text-center vs'>VS</p>
            <div className='col-md-12 text-center fighter'>
              <Image src={getParticipantInfo(participantsData[0][1].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
              <p>{getParticipantInfo(participantsData[0][1].participantId).name || 'Player 2'}</p>
            </div>
          </div>
          <div className='col-md-4 d-flex flex-wrap align-items-center tournament-lines-container'>
            <div className="col-md-6 fight-border"></div>
            
            <div className="col-6 winner-border"></div>
          
          </div>
        </div>

      </div>
      
      <div className='col-md-3 align-items-center d-flex flex-wrap round3'>
      <div className='col-md-12 d-flex round3-match'>
          <div className='col-md-8 fighters-container'>
            <div className='col-md-12 text-center fighter'>
              <Image src={getParticipantInfo(participantsData[0][0].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
              <p>{getParticipantInfo(participantsData[0][0].participantId).name || 'Player 1'}</p>
            </div>
            <p className='col-md-12 text-center vs'>VS</p>
            <div className='col-md-12 text-center fighter'>
              <Image src={getParticipantInfo(participantsData[0][1].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
              <p>{getParticipantInfo(participantsData[0][1].participantId).name || 'Player 2'}</p>
            </div>
          </div>
          <div className='col-md-4 d-flex flex-wrap align-items-center tournament-lines-container'>
            <div className="col-md-6 fight-border"></div>
            
            <div className="col-6 winner-border"></div>
          
          </div>
        </div>


      </div>

      <div className='col-md-3 align-items-center d-flex flex-wrap text-center bracket-champ'>
      <div className='col-md-12 text-center fighter'>
              <Image src={getParticipantInfo(participantsData[0][0].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
              <p>{getParticipantInfo(participantsData[0][0].participantId).name || 'Player 1'}</p>
            </div>

      </div>

    </div>
        

       
    
    
    
    
      
  );
};

export default TournamentGrid;