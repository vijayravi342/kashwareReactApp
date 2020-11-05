import React, {Component} from 'react';
import Nav from './layout/Nav'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import KashBody from '../src/layout/kashBody'
import Kash from './layout/kashbody2'




class App extends Component {



    render(){

        return(
           <div>
           <BrowserRouter>
               <div className="App">
              
               <Nav />
               <Switch>
               <Route exact path="/" component={KashBody}/>

               <Route path="/Kash" component={Kash}/>

               </Switch>
               </div>
           </BrowserRouter>
          
                
           </div>
        )
    }
 
}

export default App;
