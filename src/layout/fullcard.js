import React from 'react'
import fullcard from './fullcard.png'

const Fullcard =()=>{
    return(
        <div className="box3 center">
          <div className="fullimg">
            <img src={fullcard} alt="img" className="stable" />
            <h4 className="fd">One App. One Card.<br></br> For all others.</h4>
          </div>
        </div>
    )
}

export default Fullcard