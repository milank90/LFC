import TournamentPage from "../components/TestTournament"
import './TestTournament.css'

export default function TestTournament() {
    return (
      <main>
        <div className="tournament-container d-flex flex-wrap justify-content-center">
            <dic className="col-12 text-center"><h1>Test Tournament</h1></dic>
            <div className="col-6">
                <img src='/Img/Test Event.png' alt='Tournament Image'></img>
            </div>
            <div className="col-6">
                <p>asdasdsdasdasdasd</p>
            </div>    
      
        </div>
        <TournamentPage/>
       
      </main>
    )
  }
  