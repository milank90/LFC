import Link from 'next/link'
import './tournaments.css'

export default function Tournaments() {
    return (
      <main>
        <div>
            <div className="col-12 tournaments-grid d-flex flex-wrap">
                <div className="col-12 text-center"><h1 className='header'>Tournaments</h1></div>
                <div className="col-6 tournaments-event text-center">
                    <Link href='./tournaments/TestTournament'>
                        <img src='/Img/Test Event.png' alt='Tournament Image' />
                        <h5>Test Tournament</h5>
                        <p>asdasdsadasdasdasdasd asdasdasda sd asdad</p>
                    </Link>

                </div>

                <div className="col-6 tournaments-event text-center">
                <Link href='./tournaments/OpeningTournament'>
                        <img src='/Img/Events/OpeningTournament/openingevent.png' alt='Tournament Image' />
                        <h5>Opening Tournament</h5>
                        <p>asdasdsadasdasdasdasd asdasdasda sd asdad</p>
                    </Link>

                </div>

                {/* <div className="col-6 tournaments-event">
                  <img src='/Img/Test Event.png' alt='Tournament Image' />

                </div>

                <div className="col-6 tournaments-event">
                  <img src='/Img/Test Event.png' alt='Tournament Image' />

                </div>                                 */}



            </div>
      
      
        </div>
       
      </main>
    )
  }
  