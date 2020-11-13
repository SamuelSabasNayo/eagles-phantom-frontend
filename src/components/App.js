import React,{ Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './auth/login';

class App extends Component{
  render(){
    return (
      <main>
        <h1>ergegrt</h1>
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/login' component={Login}/>
        </Switch>
      </main>
  )
}
};

export default App;
