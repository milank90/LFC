'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { db } from "@/app/DBinit";
import { collection, getDocs } from 'firebase/firestore';


const TournamentGridLoser = () => {
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

  <div className='col-md-12 d-flex justify-content-center text-center lbracket-champ'>
  
    <div className='col-md-1_5 fighter'>
      <Image src={getParticipantInfo(participantsData[0][1].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
      <p>{getParticipantInfo(participantsData[0][1].participantId).name || 'Player 2'}</p>
    </div>
  </div>      


  <div className='col-md-12 d-flex  text-center lround4'>
    <div className='col-md-2'></div>
    <div className='col-md-5 d-flex text-center justify-content-center text-end flex-wrap round4-match'>

      <div className='col-md-12 d-flex flex-wrap'>
        
        <div className="col-1 f_lwinner-border"></div>
        <div className="col-md-12 f_lfight-border"></div>
      </div>

      <div className='col-md-3 fighter'>
        <Image src={getParticipantInfo(participantsData[0][0].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}   />
        <p>{getParticipantInfo(participantsData[0][0].participantId).name || 'Player 1'}</p>
      </div>
      <p className='lvs'>VS</p>
      <div className='col-md-3 fighter'>
        <Image src={getParticipantInfo(participantsData[0][1].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
        <p>{getParticipantInfo(participantsData[0][1].participantId).name || 'Player 2'}</p>
      </div>

    </div>
  </div>


      <div className='col-md-12 justify-content-center d-flex lround3'>

        <div className='col-md-8 d-flex text-center justify-content-center flex-wrap round3-match'>

        <div className='col-md-12 d-flex text-center flex-wrap'>
            <div className="col-md-6"></div>
            <div className="col-1 lwinner-border"></div>
            <div className="col-md-6"></div>
            <div className="col-md-12 lfight-border"></div>
        </div>
        <div className='col-md-2 fighter'>
            <Image src={getParticipantInfo(participantsData[0][0].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}   />
            <p>{getParticipantInfo(participantsData[0][0].participantId).name || 'Player 1'}</p>
          </div>
          <p className='col-md-5 vs'>VS</p>
          <div className='col-md-2 fighter'>
            <Image src={getParticipantInfo(participantsData[0][1].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>{getParticipantInfo(participantsData[0][1].participantId).name || 'Player 2'}</p>
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
            <Image src={getParticipantInfo(participantsData[0][0].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>{getParticipantInfo(participantsData[0][0].participantId).name || 'Player 1'}</p>
          </div>
            <p className='col-md-2 vs'>VS</p>
            <div className='col-md-5 fighter'>
              <Image src={getParticipantInfo(participantsData[0][1].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
              <p>{getParticipantInfo(participantsData[0][1].participantId).name || 'Player 2'}</p>
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
            <Image src={getParticipantInfo(participantsData[0][0].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>{getParticipantInfo(participantsData[0][0].participantId).name || 'Player 1'}</p>
          </div>
          <p className='col-md-2 vs'>VS</p>
          <div className='col-md-5 fighter'>
            <Image src={getParticipantInfo(participantsData[0][1].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>{getParticipantInfo(participantsData[0][1].participantId).name || 'Player 2'}</p>
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
            <Image src={getParticipantInfo(participantsData[0][0].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>{getParticipantInfo(participantsData[0][0].participantId).name || 'Player 1'}</p>
          </div>
          <p className='col-md-2 vs'>VS</p>
          <div className='col-md-5 fighter'>
            <Image src={getParticipantInfo(participantsData[0][1].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>{getParticipantInfo(participantsData[0][1].participantId).name || 'Player 2'}</p>
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
            <Image src={getParticipantInfo(participantsData[0][0].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>{getParticipantInfo(participantsData[0][0].participantId).name || 'Player 1'}</p>
          </div>
          <p className='col-md-2 vs'>VS</p>
          <div className='col-md-5 fighter'>
            <Image src={getParticipantInfo(participantsData[0][1].participantId).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>{getParticipantInfo(participantsData[0][1].participantId).name || 'Player 2'}</p>
            </div>

        </div>
        <div className='col-md-3 d-flex text-center flex-wrap round1-match'>

        </div>
      </div>

      
        
    </div>
        

       
    
    
    
    
      
  );
};

export default TournamentGridLoser;