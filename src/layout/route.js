import React from 'react'
import { NavLink} from 'react-router-dom'


const Route = ()=>{
    return(
        <div>
        
        <ul className="right items">
        <li className="ritems"><NavLink to='/'>Kard</NavLink></li>
        <li className="ritems"><NavLink to='/'>Kardless</NavLink></li>
        <li className="ritems"><NavLink to='/'>Security</NavLink></li>
        <li className="ritems"><NavLink to='/'>Rewards</NavLink></li>
        
        <li><NavLink to='/' className='btn   black-text bold lighten-1'>Get the App</NavLink></li>
        </ul>
        </div>
    )
}

export default Route