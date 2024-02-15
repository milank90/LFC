import React from "react";
import "./FightersGrid.css";

const FighterCard = ({ fighter, onCardClick }) => {
  const handleCardClick = () => {
    onCardClick(fighter.name.replace(/\s+/, "."));
  };

  return (
    <div className="fighter-card" onClick={handleCardClick}>
      {fighter.img1 && fighter.img1.match(/\.(jpeg|jpg|gif|png)$/) !== null && (
        <img src={fighter.img1} alt="Fighter Image" className="fighter-image" />
      )}
      <p>{fighter.name}</p>
      <table className="fighter-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Points</th>
            <th>Fights</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{fighter.rank}</td>
            <td>{fighter.points}</td>
            <td>{fighter.totalfights}</td>
          </tr>
        </tbody>
      </table>
      <p className="wdl-header">W - L - D</p>
      <p className="wdl-element">{`${fighter.wins} - ${fighter.losses} - ${fighter.draws}`}</p>
    </div>
  );
};

export default FighterCard;
