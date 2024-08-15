import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
function Linker (){
  return (

         <>
         
         <Router>   
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Services" exact component={Services}/>
            </Switch>
         </Router>
         </>
    )
}

export default Linker; 