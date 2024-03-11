import React from "react";
import "./FightersCard.css";
import Image from "next/image";
import Link from "next/link";

const FighterCard = ({ fighter }) => {


  return (
    
<Link href={`/fighters/${fighter.name.replace(/\s+/, ".")}`} className="fighter-card text-decoration-none text-dark">

  <div className="front">
    <div className="fighter-image">
    {fighter.img1 && fighter.img1.match(/\.(jpeg|jpg|gif|png)$/) !== null && (
  <Image src={fighter.img1} alt="fighter.img1" layout="responsive" width={"1000"} height={"1000"} />
)}
    </div>


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
    </Link>
  );
};

export default FighterCard;
