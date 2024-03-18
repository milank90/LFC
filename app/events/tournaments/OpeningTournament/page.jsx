import TournamentPage from "./components/OpeningTournament"
import './OpeningTournament.css'

export default function OpeningTournament() {
    return (
      <main>
        <div className="tournament-container d-flex flex-wrap justify-content-center">
            <div className="col-12 d-flex justify-content-center tournament-image text-center">
              <div className="container text-center tournament-title">
                <h1>Opening Tournament</h1>
                <div className="tournament-info">
                  <p className="date">00.00.2024-00.00.2024</p>
                  <p className="location">Primal/Leviathan</p>
                  <p className="date">Wolves Den</p>
                  <p className="details">
                   Prepare yourselves for the most epic showdown of Lalafell combatants ever witnessed –
                   the inaugural Lalafell Fight Club Opening Tournament! Brace yourselves as the 
                   fiercest warriors from across the realm converge upon our arena for a double elimination 
                   battle royale like no other. With stakes higher than ever and glory on the line, only 
                   the most skilled and relentless fighters will survive the grueling gauntlet of combat. 
                   From bone-crushing strikes to lightning-fast maneuvers, expect nothing less than pure 
                   adrenaline-fueled intensity as these Lalafell gladiators vie for supremacy. Join us as 
                   we kick off this historic event and witness firsthand the birth of a new era in Lalafell 
                   combat. The stage is set, the warriors are primed – let the battle begin!
                  </p>
                </div>  
              </div>
            </div>  
            <div className="col-md-6 col-12 image1">
                <img src='/Img/tournaments/OpeningTournament/afromountain1.png' alt='Tournament Image'></img>
            </div>
            <div className="col-md-6 col-12 details2">
                <p>Prepare yourselves for the most epic showdown of Lalafell combatants ever witnessed –
                   the inaugural Lalafell Fight Club Opening Tournament! Brace yourselves as the 
                   fiercest warriors from across the realm converge upon our arena for a double elimination 
                   battle royale like no other. With stakes higher than ever and glory on the line, only 
                   the most skilled and relentless fighters will survive the grueling gauntlet of combat. 
                   From bone-crushing strikes to lightning-fast maneuvers, expect nothing less than pure 
                   adrenaline-fueled intensity as these Lalafell gladiators vie for supremacy. Join us as 
                   we kick off this historic event and witness firsthand the birth of a new era in Lalafell 
                   combat. The stage is set, the warriors are primed – let the battle begin!</p>
            </div>
            <div className="border-c"></div>    
      
        </div>
        <TournamentPage/>
       
      </main>
    )
  }
  