'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TournamentBracketFinals = ({ participants, tournamentData }) => {

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
    <div className="col-12">
      <div className='col-md-12 d-flex finals'>
      <div className='round-spacer d-flex align-items-center'><p className='vertical-text'>Finals</p></div>
      <div className='container d-flex flex-wrap finals justify-content-center justify-content-md-start'>
        <div className='col-md-4'></div>
        <div className='col-md-4 col-12 d-flex text-center justify-content-center flex-wrap finals-match'>
        <div className='col-md-12 col-5 d-flex justify-content-center'>
          <div className='col-md-5 col-12 fighter'>
            <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.bracket_finals, 0)).name || '').replace(/\s/g, '.')}`}>
              <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.bracket_finals, 0)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
              <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.bracket_finals, 0)).name || `Undecided`}</p>
            </Link>
          </div>
          </div>
          <div className='col-md-6 col-2 d-flex justify-content-end vs'><p>VS</p></div>
          <div className='col-6 d-flex flex-wrap d-none d-md-block'>
            <div className="col-12 d-flex">
              <div className="f_winner-border"></div>
            </div>
            <div className="col-md-12 f_fight-border"></div>
          </div>
          <div className='col-5 fighter'>
            <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.bracket_finals, 1)).name || '').replace(/\s/g, '.')}`}>
              <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.bracket_finals, 1)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
              <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.bracket_finals, 1)).name || `Undecided`}</p>
            </Link>
          </div>
        </div>
        <div className='d-flex text-center align-items-center bracket-winner'>
          <div className='col-1'></div>
          <div className='col-10 winner'>
            <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.bracket_winner, 0)).name || '').replace(/\s/g, '.')}`}>
              <Image src={getParticipantInfo(getFighterIdAtPosition(tournamentData.bracket_winner, 0)).img1 || '/Img/Blank-Profile-image-1.jpg'} alt="Event Image" layout="responsive" width={1000} height={2000} />
              <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.bracket_winner, 0)).name || `Undecided`}</p>
            </Link>
          </div>
          <div className='col-1'></div>
        </div>
      </div>
      <div className='round-spacer'></div>
      </div>
       
    </div>
  );
};

export default TournamentBracketFinals;
