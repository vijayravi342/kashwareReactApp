import React from 'react'
import {Suspense, lazy} from 'react'
import {slowImport } from './Helpers'


const Card = lazy(()=> slowImport(import('./card'),4700));




const Kash = () =>{

   

   
    return(
        <div>
        <Suspense fallback={
        <div className="card center z-depth-0 web">
        <div className="container kash  ">

        <h2 className="heading2 ">Kashware is an exclusive<br></br> ecosystem unites your money.</h2>
        <p className="hashtag2  ">#Spend #Save #StaySecured #EarnRewards #JoinTheKlub</p>
        
         </div>
        </div>}>
          
           <Card />
           
        </Suspense>
        
        </div>
    )
}


export default Kash