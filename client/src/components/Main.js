import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/img1.png'
import '../styles/_Main.scss'
import downArrow from '../assets/download.png'

const Main = () => {
  return (
    <div>
        <img src={img1} />
        <div className='MainTextWrapper'>
          <h1 className='MainText'>안녕하세요,방문해 주셔서 감사합니다.</h1>
          <p className='MainText' >새로운 기술에 대한 끊임없는 배움</p>
          <p className='MainText' >도전에 대한 두려움이 없는 개발자</p>
          <p className='MainText' >협업을 좋아하는 개발자</p>
          <p className='MainText' >저는 신입 프론트엔드 개발자 신진섭입니다.</p>
        </div>
          <Link to='/skills' > <img src={downArrow} className='downArrow'/></Link>
    </div>
  )
}

export default Main