import React from 'react';
import './TournamentGrid.css';

const TournamentGrid = ({ participants }) => {
  return (
    <div className="tournament-bracket">
      {participants.map((round, roundIndex) => (
        <div className="tournament-bracket__round" key={roundIndex}>
          <h3 className="tournament-bracket__round-title">Round {roundIndex + 1}</h3>
          <ul className="tournament-bracket__list list-group">
            {round.map((match, matchIndex) => (
              <li className="tournament-bracket__item list-group-item" key={matchIndex}>
                <div className="tournament-bracket__match" tabIndex="0">
                  <table className="tournament-bracket__table table table-bordered">
                    <caption className="tournament-bracket__caption">
                      <time dateTime="2024-02-24">24 February 2024</time>
                    </caption>
                    <tbody className="tournament-bracket__content">
                      {match.map((participant, participantIndex) => (
                        <tr className={`tournament-bracket__team${participantIndex === 0 ? ' tournament-bracket__team--winner' : ''}`} key={participantIndex}>
                          <td className="tournament-bracket__country">
                            <span className="tournament-bracket__code">{participant}</span>
                          </td>
                          <td className="tournament-bracket__score">
                            <span className="tournament-bracket__number">1</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TournamentGrid;