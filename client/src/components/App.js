import React from 'react';
import { Route,Switch } from 'react-router-dom'
import '../styles/_App.scss'
import Main from './Main';
import Portfolio from './Portfolio'
import Skills from './Skills'
import Contact from './Contact';



function App() {
  return (
    <div className='AppWrapper'>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/skills' component={Skills} />
        <Route path='/contact' component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
