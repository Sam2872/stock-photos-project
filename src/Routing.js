import React from 'react'
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import About from './About';
import App from './App'
import PhotoDetails from './PhotoDetails'

const Routing = () => {
    return (
        <Router>
            <Route exact path= '/'>
              <App/>
            </Route>
            <Route path= '/about'>
               <About/>
            </Route>
            <Switch>
            <Route  path= '/details/:id'>
              <PhotoDetails/>
            </Route>
            
            </Switch>
        </Router>
    )
}

export default Routing
