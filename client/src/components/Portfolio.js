import React from 'react';
import { Link } from 'react-router-dom';
import downArrow from '../assets/download.png';
import upArrow from '../assets/upload.png';
import '../styles/_Portfolio.scss';
import cooksiin from '../assets/cooksiin.png';
import dosiin from '../assets/dosiin.png';

const Portfolio = () => {

  return (
    <div className='portfolioWrapper'>
      <Link to='/skills' >
        <img src={upArrow} className='upArrow' alt='위로 방향이미지' />
      </Link>
      <h1 className='title'>Projects</h1>
      <h3>프로젝트 클릭하시면 자세한 내용을 보실 수 있습니다.</h3>
      <div className='portfolioContacts'>
        <ul>
          <li>
            <div className='imgWrapper'>
              <a href='https://github.com/Jin-seop/Do_for_city_in-client' target='_blank' rel="noopener noreferrer">
                <img src={dosiin} alt='' />
              </a>
              <p>식재료 공유 안드로이드 앱</p>
            </div>
          </li>
          <li>
            <div className='imgWrapper'>
              <a href='https://github.com/Jin-seop/Cook_for_city_client' target='_blank' rel="noopener noreferrer">
                <img src={cooksiin} alt='' />
              </a>
              <p>레시피 검색 안드로이드 앱</p>
            </div>
          </li>
        </ul>
      </div>
      <Link to='/contact'>
        <img src={downArrow} className='downArrow' alt='' />
      </Link>
    </div>
  );
};

export default Portfolio;