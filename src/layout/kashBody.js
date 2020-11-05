import React,{Component} from 'react'
import arrow from '../arrow.png'
import {Link } from 'react-router-dom'



class KashBody extends Component{

    
    render(){
    return(
        <div className="container center kashbody">

        <h2 className="heading center">Kashware is an exclusive<br></br> ecosystem unites your money.</h2>
        <p className="hashtag center">#Spend #Save #StaySecured #EarnRewards #JoinTheKlub</p>
        <Link to ='/Kash'><img src={arrow} alt="logo" className="mall"/></Link>

        </div>
    )
    }
}


export default KashBody