 import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Error from './components/Error';
import Navbar from './components/Navbar';

class App extends Component{
    render(){
        return (
            <div>
              <Navbar />
              <Switch>
                  <Route  path='/' component={Home} exact />
                  <Route path='/about' component={AboutUs}/>
                  <Route path='/contact' component={ContactUs} />
                  <Route path='/login' component={Login}/>
                  <Route component={Error}/>
              </Switch>
            </div>
        );
    };
}
export default App;
