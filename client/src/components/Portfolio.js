import React from 'react'
import { Link } from 'react-router-dom'
import downArrow from '../assets/download.png'
import upArrow from '../assets/upload.png'
import '../styles/_Portfolio.scss'
import Css from '../assets/css.png'
import Express from '../assets/express.png'

const Portfolio = () => {
  return(
    <div className='portfolioWrapper'>
    <Link to='/skills' ><img src={upArrow} className='upArrow'/> </Link>
      <h1 className='portfolioH1'>Projects</h1>
        <div className='portfolioContacts'>
          <ul>
            <li>
              <div className='imgWrapper'>
                <img src={Css}/>
                <p>설명<br/>asdasdasdasdasdasdas<br/>dasdasdaasdasdasdasd</p>
              </div>
            </li>
            <li>
              <div className='imgWrapper'>
                <img src={Express}/>
                <p>설명<br/>asdasdasdasdasdasdas<br/>dasdasdaasdasdasdasd</p>
              </div>
            </li>
          </ul>
        </div>
      <Link to='/contact'><img src={downArrow} className='downArrow'/></Link>
    </div>
  )
}

export default Portfolio