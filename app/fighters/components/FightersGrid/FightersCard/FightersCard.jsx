import React from "react";
import "./FightersCard.css";
import Image from "next/image";

const FighterCard = ({ fighter, onCardClick }) => {
  const handleCardClick = () => {
    onCardClick(fighter.name.replace(/\s+/, "."));
  };

  return (
    
<button className="fighter-card" onClick={handleCardClick}>

  <div className="front">
      {/* {fighter.img1 && fighter.img1.match(/\.(jpeg|jpg|gif|png)$/) !== null && (
        <img src={fighter.img1} alt="Fighter Image" className="fighter-image" />
      )} */}
        {fighter.img1 && fighter.img1.match(/\.(jpeg|jpg|gif|png)$/) !== null && (
        <div className="fighter-image">
          <Image src={fighter.img1} alt="fighter.img1" layout="responsive" width={"250"} height={"250"} />
        </div>
        )}


      <p className="fighter-nickname">"{fighter.nickname}"</p> 
      <p className="fighter-name">{fighter.name}</p>
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
    </button>
  );
};

export default FighterCard;
