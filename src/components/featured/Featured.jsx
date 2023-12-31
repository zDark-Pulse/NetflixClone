import { ArrowDropDown, InfoOutlined, PlayArrow } from '@mui/icons-material'
import './featured.scss'
import { useState } from 'react';

export default function Featured({type}) {

  const[genres, setGenres] = useState(false);

  const toggleGenres = () =>{
    if(genres === false){
      setGenres(true);
    }else{
      setGenres(false);
    }
  }

  return (
    <div className='featured'>
       <div className="category" >
    <span className='type-genre'>{type === 'Movies' ? 'Movies' : 'TV Shows'}</span>
    <div className='genre-content' onClick={toggleGenres}>
      <p>Genres</p>
     <ArrowDropDown/>
    </div>
  </div>

<div className={genres ? 'sub-menu' : 'sub-menu inactive'}>
      <ul className="sub-menu-list multi-column">
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">Action</a>
        </li>
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">Anime</a>
        </li>
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">Asian</a>
        </li>
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">British</a>
        </li>
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">Colombian</a>
        </li>
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">Comedies</a>
        </li>
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">Docuseries</a>
        </li>
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">Dramas</a>
        </li>
      </ul>
      <ul className="sub-menu-list multi-column">
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">Horror</a>
        </li>
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">Kids</a>
        </li>
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">Latin American</a>
        </li>
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">Mysteries</a>
        </li>
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">Police</a>
        </li>
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">Reality & talk</a>
        </li>
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">Romance</a>
        </li>
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">Sci-Fi & Fantasy</a>
        </li>
      </ul>
      <ul className="sub-menu-list multi-column">
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">Science & Nature</a>
        </li>
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">Soaps</a>
        </li>
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">Stand-Up Comedy</a>
        </li>
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">Teen</a>
        </li>
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">The World of The Witcher</a>
        </li>
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">Thriller</a>
        </li>
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">Unte in Pride</a>
        </li>
        <li className="sub-menu-item">
          <a href="#" className="sub-menu-link">US</a>
        </li>
      </ul>
  </div>
        <img src="https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWRCHRZddZbN3N6xtcSlvewA_ByHfJ390KfYErk2ebzRcGSS-HR3QPH-S6Lpd-juvZXGei3fk-4x2NSZjhBrTwFdrh4m_EDurWUa.webp?r=751" alt="" />
        <div className="info">
          <img src="https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRw4ervf9ALVFJU-ko6c9WeKi-FaCJnf0fVRic91bx0tQgdCb6T93gXfrWyoX52Tk2MiD_Kcx0RQUQT-S-0CM5cS18bNOmtp6TtNigInds4eN6AzQfD3DPzWl19B7sazVIvUbHNEsya__zlEqTcLR5eGobkM_LVyW1x9yXk70-4OcUS91P_7Eg.webp?r=090" alt="" />
          <span className="desc">In a Norwegian town poisoned by pollution and rattled by melting glaciers, the End Times feel all too real. It'll take a legend to battle an old evil</span>

          <div className="buttons">
            <button className="play">
              <PlayArrow/>
              <span>Play</span>
            </button>
            <button className="info-btn">
              <InfoOutlined/>
              <span>More info</span>
            </button>
          </div>
        </div>
    </div>
    
  )
}
