'use client';

import React from 'react';
import Link from 'next/link';

const TournamentLBracket = ({ participants, tournamentData }) => {

  const getFighterIdAtPosition = (fightersString, position) => {
    if (!fightersString || typeof fightersString !== 'string') {
      return '';
    }

    const fighters = fightersString.split(',');

    if (!Array.isArray(fighters) || fighters.length <= position) {
      return '';
    }

    return fighters[position];
  };

  const getParticipantInfo = (participantId) => {
    return participants.find(participant => participant.id === participantId) || {};
  };

  return (
    <div className="col-12">

      {/* Round 4 */}
      <div className='col-md-12 d-flex text-center lround4'>
      <div className='round-spacer d-flex align-items-center'><p className='vertical-text'>L-Round 4</p></div> 
      <div className='container d-flex'>
        
        <div className='col-md-2'></div> 
      
        <div className='col-md-5 col-12 d-flex text-center justify-content-center flex-wrap round4-match'>
          <div className='col-md-12 d-flex flex-wrap d-none d-md-block'>
            <div className="col-1 f_lwinner-border"></div>
            <div className="col-md-12 f_lfight-border"></div>
          </div>
          <div className='col-md-3 fighter'>
            <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.lround4fighters, 0)).name || '').replace(/\s/g, '.')}`}>
              <img src={getParticipantInfo(getFighterIdAtPosition(tournamentData.lround4fighters, 0)).img1 || '/Img/Fighters/Blank/Blank1.png'} alt="Fighter Image" />
              <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.lround4fighters, 0)).name || 'Undecided'}</p>
            </Link>
          </div>
          <p className='vs'>VS</p>
          <div className='col-md-3 fighter'>
            <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.lround4fighters, 1)).name || '').replace(/\s/g, '.')}`}>
              <img src={getParticipantInfo(getFighterIdAtPosition(tournamentData.lround4fighters, 1)).img1 || '/Img/Fighters/Blank/Blank1.png'} alt="Fighter Image" />
              <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.lround4fighters, 1)).name || 'Undecided'}</p>
            </Link>
          </div>
        </div>
        </div>
        <div className='round-spacer'></div> 
      </div>

      {/* Round 3 */}
      <div className='col-12 justify-content-center d-flex lround3'>
      <div className='round-spacer d-flex align-items-center'><p className='vertical-text'>L-Round 3</p></div> 
         <div className='container d-flex text-center justify-content-center flex-wrap'>

        <div className='col-md-8 col-12 d-flex text-center justify-content-center flex-wrap round3-match'>
          <div className='col-md-12 d-flex text-center flex-wrap d-none d-md-block'>
            <div className="col-12 d-flex justify-content-center">
              <div className="lwinner-border"></div>
            </div> 
            <div className="col-md-12 lfight-border"></div>
          </div>
          {/* Fighter 1 */}
          <div className='col-md-2 fighter'>
            <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.lround3fighters, 0)).name || '').replace(/\s/g, '.')}`}>
              <img src={getParticipantInfo(getFighterIdAtPosition(tournamentData.lround3fighters, 0)).img1 || '/Img/Fighters/Blank/Blank1.png'} alt="Fighter Image" />
              <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.lround3fighters, 0)).name || 'Undecided'}</p>
            </Link>
          </div>
          <p className='col-md-5 vs'>VS</p>
          {/* Fighter 2 */}
          <div className='col-md-2 fighter'>
            <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.lround3fighters, 1)).name || '').replace(/\s/g, '.')}`}>
              <img src={getParticipantInfo(getFighterIdAtPosition(tournamentData.lround3fighters, 1)).img1 || '/Img/Fighters/Blank/Blank1.png'} alt="Fighter Image" />
              <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.lround3fighters, 1)).name || 'Undecided'}</p>
            </Link>
          </div>
        </div>
        </div> 
        <div className='round-spacer'></div> 
      </div>

      <div className='col-12 d-flex justify-content-center text-center lround2'>
      <div className='round-spacer d-flex align-items-center'><p className='vertical-text'>L-Round 2</p></div> 
         <div className='container d-flex text-center justify-content-center flex-wrap'>

        <div className='col-md-3 col-12 d-flex text-center justify-content-center flex-wrap round2-match'>
          <div className='col-md-12 d-flex text-center flex-wrap d-none d-md-block'>
            <div className="col-12 d-flex justify-content-center">
              <div className="lwinner-border"></div>
            </div> 
            <div className="col-md-12 lfight-border"></div>
          </div>
          
          <div className='col-md-5 fighter'>
            <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.lround2fighters, 0)).name || '').replace(/\s/g, '.')}`}>
              <img src={getParticipantInfo(getFighterIdAtPosition(tournamentData.lround2fighters, 0)).img1 || '/Img/Fighters/Blank/Blank1.png'} alt="Fighter Image" />
              <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.lround2fighters, 0)).name || `Undecided`}</p>
            </Link>
          </div>
          <p className='col-md-2 vs'>VS</p>
          <div className='col-md-5 fighter'>
            <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.lround2fighters, 1)).name || '').replace(/\s/g, '.')}`}>
              <img src={getParticipantInfo(getFighterIdAtPosition(tournamentData.lround2fighters, 1)).img1 || '/Img/Fighters/Blank/Blank1.png'} alt="Fighter Image" />
              <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.lround2fighters, 1)).name || `Undecided`}</p>
            </Link>
          </div>
        </div>
        <div className="col-md-1_5"></div>
        <div className='col-md-3 col-12 d d-flex text-center justify-content-center flex-wrap round2-match'>
          <div className='col-md-12 d-flex text-center flex-wrap d-none d-md-block'>
            <div className="col-12 d-flex justify-content-center">
              <div className="lwinner-border"></div>
            </div> 
            <div className="col-md-12 lfight-border"></div>
          </div>
          <div className='col-md-5 fighter'>
            <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.lround2fighters, 2)).name || '').replace(/\s/g, '.')}`}>
              <img src={getParticipantInfo(getFighterIdAtPosition(tournamentData.lround2fighters, 2)).img1 || '/Img/Fighters/Blank/Blank1.png'} alt="Fighter Image" />
              <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.lround2fighters, 2)).name || `Undecided`}</p>
            </Link>
          </div>
          <p className='col-md-2 vs'>VS</p>
          <div className='col-md-5 fighter'>
            <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.lround2fighters, 3)).name || '').replace(/\s/g, '.')}`}>
              <img src={getParticipantInfo(getFighterIdAtPosition(tournamentData.lround2fighters, 3)).img1 || '/Img/Fighters/Blank/Blank1.png'} alt="Fighter Image" />
              <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.lround2fighters, 3)).name || `Undecided`}</p>
            </Link>
          </div>
        </div>
        </div>
        <div className='round-spacer'></div> 
      </div>

      <div className='col-md-12 d-flex justify-content-center round1'>
      <div className='round-spacer d-flex align-items-center'><p className='vertical-text'>L-Round 1</p></div> 
      <div className='container d-flex flex-wrap'>
        <div className='col-md-3'></div> 
         
        <div className='col-md-3 col-12 d-flex text-center justify-content-center flex-wrap round1-match'>
          <div className='col-md-12 d-flex text-center flex-wrap d-none d-md-block'>
            <div className="col-12 d-flex justify-content-center">
              <div className="lwinner-border"></div>
            </div>            
            <div className="col-12 lfight-border"></div>
          </div>
          <div className='col-md-5 fighter'>
            <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.lround1fighters, 0)).name || '').replace(/\s/g, '.')}`}>
              <img src={getParticipantInfo(getFighterIdAtPosition(tournamentData.lround1fighters, 0)).img1 || '/Img/Fighters/Blank/Blank1.png'} alt="Fighter Image" />
              <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.lround1fighters, 0)).name || `Undecided`}</p>
            </Link>
          </div>
          <p className='col-md-2 vs'>VS</p>
          <div className='col-md-5 fighter'>
            <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.lround1fighters, 1)).name || '').replace(/\s/g, '.')}`}>
              <img src={getParticipantInfo(getFighterIdAtPosition(tournamentData.lround1fighters, 1)).img1 || '/Img/Fighters/Blank/Blank1.png'} alt="Fighter Image" />
              <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.lround1fighters, 1)).name || `Undecided`}</p>
            </Link>
          </div>
        </div>
        <div className='col-md-3 col-12 d-flex text-center justify-content-center flex-wrap round1-match'>
          <div className='col-md-12 d-flex text-center flex-wrap d-none d-md-block'>
            <div className="col-12 d-flex justify-content-center">
              <div className="lwinner-border"></div>
            </div> 
            <div className="col-md-12 lfight-border"></div>
          </div>
          <div className='col-md-5 fighter'>
            <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.lround1fighters, 2)).name || '').replace(/\s/g, '.')}`}>
              <img src={getParticipantInfo(getFighterIdAtPosition(tournamentData.lround1fighters, 2)).img1 || '/Img/Fighters/Blank/Blank1.png'} alt="Fighter Image" />
              <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.lround1fighters, 2)).name || `Undecided`}</p>
            </Link>
          </div>
          <p className='col-md-2 vs'>VS</p>
          <div className='col-md-5 fighter'>
            <Link href={`/fighters/${(getParticipantInfo(getFighterIdAtPosition(tournamentData.lround1fighters, 3)).name || '').replace(/\s/g, '.')}`}>
              <img src={getParticipantInfo(getFighterIdAtPosition(tournamentData.lround1fighters, 3)).img1 || '/Img/Fighters/Blank/Blank1.png'} alt="Fighter Image" />
              <p>{getParticipantInfo(getFighterIdAtPosition(tournamentData.lround1fighters, 3)).name || `Undecided`}</p>
            </Link>
          </div>
        </div>
        <div className='col-md-3'></div>
        
      </div>
      <div className='round-spacer'></div> 
      </div>
    
    </div>
  );
};

export default TournamentLBracket;