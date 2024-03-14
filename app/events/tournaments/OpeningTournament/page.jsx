import TournamentPage from "./components/OpeningTournament"
import './OpeningTournament.css'

export default function OpeningTournament() {
    return (
      <main>
        <div className="tournament-container d-flex flex-wrap justify-content-center">
            <dic className="col-12 text-center"><h1>Opening Tournament</h1></dic>
            <div className="col-md-6 col-12 p-4">
                <img src='/Img/Events/OpeningTournament/openingevent.png' alt='Tournament Image'></img>
            </div>
            <div className="col-md-6 col-12 p-4">
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
      
        </div>
        <TournamentPage/>
       
      </main>
    )
  }
  