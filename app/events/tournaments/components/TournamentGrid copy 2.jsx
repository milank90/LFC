import React from 'react';
import './TournamentGrid.css';

const TournamentGrid = ({ participants }) => {
  return (
    <div className="tournament-container">
      {participants.map((round, roundIndex) => (
        <div className="round" key={roundIndex}>
          {round.map((match, matchIndex) => (
            <div className="match" key={matchIndex}>
              {match.map((participant, participantIndex) => (
                <div className="participant" key={participantIndex}>
                  <p>{participant}</p>
                  {participantIndex % 2 === 0 && (
                    <div className="connector-horizontal"></div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TournamentGrid;