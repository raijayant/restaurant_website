import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar.js'
import MenuList from './Components/MenuList.js'
import AboutUs from './Components/AboutUs.js'
import Cart from './Components/Cart/Cart'
import Modal from './Components/Modal'
import Details from './Components/Details'
import StripeCart from './Components/Cart/StripeCart'


import { BrowserRouter as Router, Switch, Route} from "react-router-dom"


class App extends React.Component {


  render() {
  return (
    <div>
     
            <Router>
            <NavBar />
              <Switch>
                    <Route exact path="/" component={AboutUs} />
                    <Route path="/menu" component={MenuList} />
                    <Route path="/details" component={Details} />
                    <Route path="/aboutus" component={AboutUs} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/checkout" component={StripeCart} />
            
              </Switch>
            <Modal />
            </Router> 
           
      </div>

          

  );
}}

export default App;
