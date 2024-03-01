import React from 'react';
import TournamentGrid from './components/TournamentGrid';

const TournamentPage = () => {
  const participants = [
    [['Player 1', 'Player 2'], ['Player 3', 'Player 4'], ['Player 5', 'Player 6'], ['Player 7', 'Player 8']],
    [['Player 1','Player 3'], ['Player 6','Player 8']],
    [['Player 3', 'Player 6']],
    [['Player 6']]
  ];

  return (
    <div className="container mt-5"> {/* Added Bootstrap container and margin top */}
      <h1 className="text-center mb-4">Tournament Grid</h1>
      <TournamentGrid participants={participants} />
    </div>
  );
};

export default TournamentPage;