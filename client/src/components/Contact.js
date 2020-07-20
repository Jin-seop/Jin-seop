import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import upArrow from '../assets/upload.png'
import backArrow from '../assets/back.png'
import '../styles/_Contact.scss'


const Contact = () => {
  const [text,useText] = useState('')
  const textHandler = (e) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useText(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }
  
  return(
    <div className='contactWrapper'>
      <Link to='portfolio'><img src={upArrow} className='upArrow'/> </Link>
      <div className='contactContants'>
        <form>
          <input type="text" placeholder='E-mail' onChange={textHandler}/>
          <button onClick={submitHandler}>보내기</button>
        </form>
          <div className='contactText'>
            <p>이메일을 보내주시면 </p>
            <p>이력서를 발송해 드리겠습니다.</p>
            <p>방문해 주셔서 감사합니다.</p> 
          </div>
      </div>
      <Link to='/' ><img src={backArrow} className='backArrow'/></Link>
    </div>
  )
}

export default Contact