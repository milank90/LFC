'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TournamentWBracket = ({ participants, tournamentData }) => {

  // Helper function to get fighter ID at a specific position in the string
  const getFighterIdAtPosition = (fightersString, position) => {
    if (!fightersString || typeof fightersString !== 'string') {
      return '';
    }

    const fighters = fightersString.split(',');

    if (!Array.isArray(fighters) || fighters.length <= position) {
      return '';
    }

    return fighters[position];
  };

  const getParticipantInfo = (participantId) => {
    return participants.find(participant => participant.id === participantId) || {};
  };

  return (
    <div className="col-12 d-flex justify-content-center flex-wrap">
        <div className='col-12 d-flex round1'>
         <div className='round-spacer d-flex align-items-center'><p className='vertical-text'>Round 1</p></div> 
         <div className='container d-flex flex-wrap'>
        {[0, 2, 4, 6].map((position, index) => (
          <div key={index} className='col-md-3 col-12 d-flex flex-wrap text-center round1-match'>
            <div className='col-5 fighter'>
              <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.round1fighters, position)).name || '').replace(/\s/g, '.')}`}>
                <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.round1fighters, position)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
                <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.round1fighters, position)).name || `Undecided`}</p>
              </Link>
            </div>
            <p className='col-2 vs'>VS</p>
            <div className='col-5 fighter'>
              <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.round1fighters, position + 1)).name || '').replace(/\s/g, '.')}`}>
                <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.round1fighters, position + 1)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
                <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.round1fighters, position + 1)).name || `Undecided`}</p>
              </Link>
            </div>
            <div className='col-12 d-none d-md-block d-flex justify-content-center flex-wrap '>
              <div className='col-12 d-flex justify-content-center'>
                <div className="fight-border"></div>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <div className="winner-border"></div>
              </div>
            </div>
          </div>
        ))}
        </div>
        <div className='round-spacer'></div> 
      </div>

      <div className='col-12 d-flex round2'>
      <div className='round-spacer d-flex align-items-center'><p className='vertical-text'>Round 2</p></div> 
         <div className='container d-flex flex-wrap'>
        {[0, 2].map((position, index) => (
          <div key={index} className='col-md-6 col-12 justify-content-center d-flex text-center flex-wrap round2-match'>
            <div className='col-md-3 col-5 fighter'>
              <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.round2fighters, position)).name || '').replace(/\s/g, '.')}`}>
                <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.round2fighters, position)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
                <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.round2fighters, position)).name || `Undecided`}</p>
              </Link>
            </div>
            <p className='vs'>VS</p>
            <div className='col-md-3 col-5 fighter'>
              <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.round2fighters, position + 1)).name || '').replace(/\s/g, '.')}`}>
                <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.round2fighters, position + 1)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
                <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.round2fighters, position + 1)).name || `Undecided`}</p>
              </Link>
            </div>
            <div className='col-12 d-none d-md-block d-flex justify-content-center flex-wrap '>
              <div className='col-12 d-flex justify-content-center'>
                <div className="fight-border"></div>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <div className="winner-border"></div>
              </div>
            </div>
          </div>
        ))}
        </div>
        <div className='round-spacer'></div>
      </div>

      <div className='col-12 d-flex round3'>
      <div className='round-spacer d-flex align-items-center'><p className='vertical-text'>Round 3</p></div> 
         <div className='container d-flex justify-content-center'>
        {[0].map((position, index) => (
          <div key={index} className='col-lg-12 col-md-10 col-12 d-flex justify-content-center text-center flex-wrap round3-match'>
            <div className='col-md-2 col-5 fighter'>
              <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.round3fighters, position)).name || '').replace(/\s/g, '.')}`}>
                <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.round3fighters, position)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
                <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.round3fighters, position)).name || `Undecided`}</p>
              </Link>
            </div>
            <p className='vs'>VS</p>
            <div className='col-md-2 col-5 fighter'>
              <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.round3fighters, position + 1)).name || '').replace(/\s/g, '.')}`}>
                <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.round3fighters, position + 1)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
                <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.round3fighters, position + 1)).name || `Undecided`}</p>
              </Link>
            </div>
            <div className='col-12 d-none d-md-block d-flex justify-content-center flex-wrap '>
              <div className='col-12 d-flex justify-content-center'>
                <div className="fight-border"></div>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <div className="winner-border"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='round-spacer'></div>
      </div>
    </div>
  );
};

export default TournamentWBracket;
