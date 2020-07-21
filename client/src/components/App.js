import React,{useState} from 'react';
import { Route,Switch,Link } from 'react-router-dom'
import '../styles/_App.scss'
import Main from './Main';
import Portfolio from './Portfolio'
import Skills from './Skills'
import Contact from './Contact';
import burger from '../assets/burger.png'



function App() {
  const [MenuSelete,setMenuSelete] = useState(false)
  
  const MenuSeleteHandler = () => {
    setMenuSelete(!MenuSelete)
  } 


  const MenuHandler = () => {
    return (
      <div className='MenuItems'>
        <button>
          <Link to='/' >Home</Link>
        </button>
        <button>
          <Link to='/skills' >Skills</Link>
        </button>
        <button>
          <Link to='/portfolio' >Portfolio</Link>
        </button>
        <button>
          <Link to='/contact' >Contact</Link>
        </button> 
      </div>
      )
    }
  return (
    <div className='AppWrapper'>
    <span className='MenuWrapper'>
        <button className='Menu' onClick={MenuSeleteHandler}><img src={burger} className='burgerBar'/><p>Menu</p></button>
        {MenuSelete === true ? MenuHandler() : null}
      </span>
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
