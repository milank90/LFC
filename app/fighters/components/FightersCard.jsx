import React from 'react';
import { useRouter } from 'next/navigation';

const FightersCard = ({ fighter }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/fighters/${fighter.name.replace(/\s+/, '.')}`);
    };

    const propertyNameMapping = {
        rank: 'Rank',
        points: 'Points',
        totalfights: 'Fights',
    };

    return (
        <div className="fighter-card" onClick={handleClick}>
            {fighter.img1 && fighter.img1.match(/\.(jpeg|jpg|gif|png)$/) !== null && (
                <img src={fighter.img1} alt="Fighter Image" className="fighter-image" />
            )}
            <p>{fighter.name}</p>
            
            <table className="fighter-table">
                <tr>
                    {Object.keys(propertyNameMapping).map((propertyName) => (
                        <th key={propertyName}>{propertyNameMapping[propertyName]}</th>
                    ))}
                </tr>
                <tr>
                    {Object.keys(propertyNameMapping).map((propertyName, index) => (
                        <td key={index}>{fighter[propertyName]}</td>
                    ))}
                </tr>
            </table>

            <div>
                <p>W - L - D</p>
                <p>{`${fighter.wins} - ${fighter.losses} - ${fighter.draws}`}</p>
            </div>
        </div>
    );
};

export default FightersCard;