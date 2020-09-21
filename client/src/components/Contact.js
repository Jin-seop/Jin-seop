import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import upArrow from '../assets/upload.png';
import backArrow from '../assets/back.png';
import '../styles/_Contact.scss';
import Tistory from '../assets/Tistory.png';
import github from '../assets/github.png';

const Contact = () => {
  const [text, setText] = useState('');
  const textHandler = (e) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch('http://3.34.81.192:3000/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    });
    setText('');
    alert('이력서 발송 완료');

  };
  return (
    <div >
      <Link to='portfolio'>
        <img src={upArrow} className='upArrow' alt='' />
      </Link>
      <h1 className='title'>Contect</h1>
      <div className='contactImg'>
        <a href='https://github.com/Jin-seop' target='_blank' rel="noopener noreferrer">
          <img src={github} alt=''></img>
        </a>
        <a href='https://newjsdeveloper.tistory.com/' target='_blank' rel="noopener noreferrer">
          <img className='TistoryImg' src={Tistory} alt=''></img>
        </a>
      </div>
      <div className='contactContants'>
        <form>
          <input type="text" placeholder='E-mail' onChange={textHandler} value={text} />
          <button onClick={submitHandler}>보내기</button>
        </form>
        <div className='contactText'>
          <p>이메일을 보내주시면 </p>
          <p>이력서를 발송해 드리겠습니다.</p>
          <p>방문해 주셔서 감사합니다.</p>
        </div>
      </div>
      <Link to='/' ><img src={backArrow} className='backArrow' alt='' /></Link>
    </div>
  );
};

export default Contact;