import React from 'react'
import { Link } from 'react-router-dom'
import downArrow from '../assets/download.png'
import upArrow from '../assets/upload.png'
import '../styles/_Portfolio.scss'


const Portfolio = () => {
  return(
    <div className='portfolioWrapper'>
    <Link to='/skills' ><img src={upArrow} className='upArrow'/> </Link>
      <h1 className='portfolioH1'>Projects</h1>
        <div className='portfolioContacts'>
          <ul>
            <li>
              <a src='#'>
                <img src='#'/>
              </a>
              <p>설명</p>
            </li>
            <li>
              <a src='#'>
                <img src='#'/>
              </a>
              <p>설명</p>
            </li>
          </ul>
        </div>
      <Link to='/contact'><img src={downArrow} className='downArrow'/></Link>
    </div>
  )
}

export default Portfolio