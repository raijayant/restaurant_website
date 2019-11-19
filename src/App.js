import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar.js'
import Menu from './Components/Menu.js'
import AboutUs from './Components/AboutUs.js'

import { BrowserRouter as Router, Switch, Route} from "react-router-dom"


class App extends React.Component {


  render() {
  return (
    <div className="app">
     
            <Router>
            <NavBar />
              <Switch>
                  
                    <Route path="/menu" component={Menu} />
                    <Route path="/aboutus" component={AboutUs} />
              </Switch>
            
            </Router> 
           
      </div>

          

  );
}}

export default App;
