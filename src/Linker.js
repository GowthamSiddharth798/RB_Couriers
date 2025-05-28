import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
function Linker (){
  return (

         <>
         
         <Router>   
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Services" exact component={Services}/>
                <Route path="/AboutUs" exact component={About}/>
                <Route path="/contact us" exact component={Contact}/>
            </Switch>
         </Router>
         </>
    )
}

export default Linker; 