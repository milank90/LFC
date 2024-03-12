import TournamentPage from "./components/OpeningTournament"
import './OpeningTournament.css'

export default function OpeningTournament() {
    return (
      <main>
        <div className="tournament-container d-flex flex-wrap justify-content-center">
            <dic className="col-12 text-center"><h1>Opening Tournament</h1></dic>
            <div className="col-6">
                <img src='/Img/Events/OpeningTournament/openingevent.png' alt='Tournament Image'></img>
            </div>
            <div className="col-6">
                <p>asdasdsdasdasdasd</p>
            </div>    
      
        </div>
        <TournamentPage/>
       
      </main>
    )
  }
  