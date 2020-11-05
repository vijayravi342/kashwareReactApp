import React from 'react'
import Route from './route'

import kash from '../kash1.png'


const Nav =()=>{
    return(
        <nav className="navbarKash ">
        <div className="container">
        <img src={kash} alt="logo" className="small left"/>
        <Route />
        
               

        </div>
        </nav>
    )
}

export default Nav