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
import expo from '../assets/expo.png'
import TypeScript from '../assets/typescript.png'

const Skills = () => {
  return (
      <div className='skillsWrapper'>
      <Link to='/' >
      <img src={upArrow} className='upArrow' alt=''/> 
     </Link>
        <h1 className='title'>skills</h1>
          <div className='SkillsImgWrapper'>
            <div>
              <img src={Html} className='SkillsImg' alt=''/>
              <p className='SkillsP'>Html</p>
            </div>
            <div>
              <img src={Css} className='SkillsImg' alt=''/>
              <p className='SkillsP'>Css</p>
            </div>
            <div>
              <img src={Js} className='SkillsImg' alt=''/>
              <p className='SkillsP'>JavaScript</p>
            </div>
            <div>
              <img src={TypeScript} className='SkillsImg' alt=''/>
              <p className='SkillsP'>TypeScript</p>
            </div>
            <div>
              <img src={ReactImg} className='SkillsImg'alt=''/>
              <p className='SkillsP'>React</p>
            </div>
            <div>
            <img src={expo} className='SkillsImg'alt=''/>
            <p className='SkillsP'>Expo</p>
          </div>
            <div>
              <img src={Node} className='SkillsImg' alt='' />
              <p className='SkillsP'>Node.js</p>
            </div>
            <div>
              <img src={Express} className='SkillsImg' alt=''/>
              <p className='SkillsP'>Express.js</p>
            </div>
            <div>
              <img src={Mysql} className='SkillsImg' alt=''/>
              <p className='SkillsP'>MySQL</p>
            </div>
            <div>
              <img src={Github} className='SkillsImg' alt=''/>
              <p className='SkillsP'>Github</p>
            </div>
          </div>
          <Link to='portfolio' >
          <img src={downArrow} className='downArrow' alt=''/>
        </Link>
      </div>
  )
}

export default Skills