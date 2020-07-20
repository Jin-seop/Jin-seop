import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export  const useMenuHook = () => {

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
  }
    