import React from 'react'
import { Link } from 'react-router-dom'
import downArrow from '../assets/download.png'
import upArrow from '../assets/upload.png'
import '../styles/_Skills.scss'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Js from '../assets/js.png'
import Node from '../assets/nodejs.png'
import Express from '../assets/express.png'
import Mysql from '../assets/mysql.png'
import Github from '../assets/github.png'
import ReactImg from '../assets/react.png'


const Skills = () => {
  return (
    <div >
     <Link to='/' ><img src={upArrow} className='upArrow'/> </Link>
        <div className='skillsWrapper'>
          <h1 className='skillsH1'>skills</h1>
          <p className='skillsP'>Html Css JavaScript React.js Node.js Express.js MySQL Github</p>
            <div className='SkillsImgWrapper'>
              <img src={Html} className='SkillsImg' />
              <img src={Css} className='SkillsImg'/>
              <img src={Js} className='SkillsImg' />
              <img src={ReactImg} className='SkillsImg'/>
              <img src={Node} className='SkillsImg' />
              <img src={Express} className='SkillsImg' />
              <img src={Mysql} className='SkillsImg' />
              <img src={Github} className='SkillsImg' />
            </div>
        </div>
      <Link to='portfolio' ><img src={downArrow} className='downArrow'/></Link>
    </div>
  )
}

export default Skills