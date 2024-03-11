import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { db } from "@/app/DBinit";
import { collection } from 'firebase/firestore';
import './TournamentGrid.css';

const TournamentGrid = () => {
  return (
    <div className="col-12">

      <div className='col-md-12 d-flex round1'>

        <div className='col-md-3 d-flex text-center flex-wrap round1-match'>
          <div className='col-md-5 fighter'>
            <Image src='/Img/Blank-Profile-image-1.jpg' alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>Player 1</p>
          </div>
          <p className='col-md-2 vs'>VS</p>
          <div className='col-md-5 fighter'>
            <Image src='/Img/Blank-Profile-image-1.jpg' alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>Player 2</p>
          </div>
          <div className="col-md-12 fight-border"></div>
            <div className="col-md-6"></div>
            <div className="col-1 winner-border"></div>
            <div className="col-md-6"></div>
        </div>
        <div className='col-md-3 d-flex text-center flex-wrap round1-match'>
          <div className='col-md-5 fighter'>
            <Image src='/Img/Blank-Profile-image-1.jpg' alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>Player 3</p>
          </div>
          <p className='col-md-2 vs'>VS</p>
          <div className='col-md-5 fighter'>
            <Image src='/Img/Blank-Profile-image-1.jpg' alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>Player 4</p>
          </div>
          <div className="col-md-12 fight-border"></div>
            <div className="col-md-6"></div>
            <div className="col-1 winner-border"></div>
            <div className="col-md-6"></div>  
        </div>
        <div className='col-md-3 d-flex text-center flex-wrap round1-match'>
          <div className='col-md-5 fighter'>
            <Image src='/Img/Blank-Profile-image-1.jpg' alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>Player 5</p>
          </div>
          <p className='col-md-2 vs'>VS</p>
          <div className='col-md-5 fighter'>
            <Image src='/Img/Blank-Profile-image-1.jpg' alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>Player 6</p>
          </div>
          <div className="col-md-12 fight-border"></div>
            <div className="col-md-6"></div>
            <div className="col-1 winner-border"></div>
            <div className="col-md-6"></div>  
        </div>
        <div className='col-md-3 d-flex text-center flex-wrap round1-match'>
          <div className='col-md-5 fighter'>
            <Image src='/Img/Blank-Profile-image-1.jpg' alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>Player 7</p>
          </div>
          <p className='col-md-2 vs'>VS</p>
          <div className='col-md-5 fighter'>
            <Image src='/Img/Blank-Profile-image-1.jpg' alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>Player 8</p>
          </div>
          <div className="col-md-12 fight-border"></div>
          <div className="col-md-6"></div>
          <div className="col-1 winner-border"></div>
          <div className="col-md-6"></div>  
        </div>
      </div>


      <div className='col-md-12 d-flex round2'>
        <div className='col-md-6 px-5 d-flex text-center flex-wrap round2-match'>
          
          <div className='col-md-5 fighter'>
            <Image src='/Img/Blank-Profile-image-1.jpg' alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>Player 1</p>
          </div>
          <p className='col-md-2 vs'>VS</p>
          <div className='col-md-5 fighter'>
            <Image src='/Img/Blank-Profile-image-1.jpg' alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>Player 4</p>
          </div>
          <div className="col-md-12 fight-border"></div>
          <div className="col-md-6"></div>
          <div className="col-1 winner-border"></div>
          <div className="col-md-6"></div>  
        </div>
        <div className='col-md-6 px-5 d d-flex text-center flex-wrap round2-match'>
          <div className='col-md-5 fighter'>
            <Image src='/Img/Blank-Profile-image-1.jpg' alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>Player 5</p>
          </div>
          <p className='col-md-2 vs'>VS</p>
          <div className='col-md-5 fighter'>
            <Image src='/Img/Blank-Profile-image-1.jpg' alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>Player 7</p>
          </div>
          <div className="col-md-12 fight-border"></div>
          <div className="col-md-6"></div>
          <div className="col-1 winner-border"></div>
          <div className="col-md-6"></div>  
        </div>
      </div>  

      <div className='col-md-12 px-5 d-flex round3'>

        <div className='col-md-12 px-5 d-flex text-center flex-wrap round3-match'>
          <div className='col-md-5 fighter'>
            <Image src='/Img/Blank-Profile-image-1.jpg' alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>Player 1</p>
          </div>
          <p className='col-md-2 vs'>VS</p>
          <div className='col-md-5 fighter'>
            <Image src='/Img/Blank-Profile-image-1.jpg' alt="Event Image" layout="responsive" width={1000} height={2000}  />
            <p>Player 7</p>
          </div>
          <div className="col-md-12 fight-border"></div>
          <div className="col-md-6"></div>
          <div className="col-1 winner-border"></div>
          <div className="col-md-6"></div>  
        </div>
      </div>

      <div className='col-md-12 px-5 d-flex text-center bracket-champ'>
      <div className='col-md-3'></div>
        <div className='col-md-6 fighter'>
          <Image src='/Img/Blank-Profile-image-1.jpg' alt="Event Image" layout="responsive" width={1000} height={2000}  />
          <p>Player 1</p>
        </div>
      </div>

      
        
    </div>
        

       
    
    
    
    
      
  );
};

export default TournamentGrid;