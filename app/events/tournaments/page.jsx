import React from 'react';
import TournamentGrid from './components/TournamentGrid';

const TournamentPage = () => {

  return (
  <div className='tournament' style={{ marginTop: '200px' }}>
    
      <h1 className="Header text-center mb-4">BRACKET "A"</h1>
      <TournamentGrid /> 
    </div>
     

  );
};

export default TournamentPage;