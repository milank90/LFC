import React from 'react';
import TournamentGrid from './components/TournamentGrid';
import TournamentGridLoser from './components/TournamentGridLoser';
import TournamentGridFinals from './components/TournamentGridFinals';

const TournamentPage = () => {

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Tournament Grid</h1>
      <TournamentGrid /> <TournamentGridFinals /> <TournamentGridLoser /> 
    </div>

  );
};

export default TournamentPage;