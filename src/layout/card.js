import React,{Suspense, lazy} from 'react'
import notfull from '../notfull.png'
import {slowImport} from './Helpers'

const Fullcard = lazy(()=>slowImport(import('./fullcard'),4600));


const Card =()=>{
    return(
        <div>
        <Suspense fallback={
            <div className="box center">
          <div className="notfullimg">
            <img src={notfull} alt="img" className="zoom" />
          </div>
        </div>
        }>

        <Fullcard />


        </Suspense>
        </div>
        
    )
}

export default Card
