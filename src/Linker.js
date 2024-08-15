import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import About from './About';
import Pricing from './Pricing';
function Linker (){
  return (

         <>
         
         <Router>   
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Services" exact component={Services}/>
                <Route path="/AboutUs" exact component={About}/>
                <Route path="/pricing" exact component={Pricing}/>
            </Switch>
         </Router>
         </>
    )
}

export default Linker; 