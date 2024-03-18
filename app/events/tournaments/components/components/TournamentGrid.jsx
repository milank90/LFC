'use client'

import React from 'react';
import TournamentWBracket from './TournamentWBracket';
import TournamentLBracket from './TournamentLBracket';
import TournamentBracketFinals from './TournamentBracketFinals';
import './TournamentGrid.css';

const TournamentGrid = ({ selectedBracket, participants, tournamentData }) => {
  return (
    <div className='d-flex flex-wrap'>
      <div className='col-12 order-lg-1 order-1'>
        <TournamentWBracket participants={participants} tournamentData={tournamentData} />
      </div>
      <div className='col-12 order-md-2 order-3'>
        <TournamentBracketFinals participants={participants} tournamentData={tournamentData} />
      </div>
      <div className='col-12 order-lg-3 order-2'>
        <TournamentLBracket participants={participants} tournamentData={tournamentData} />
      </div>
    </div>
  );
};

export default TournamentGrid;