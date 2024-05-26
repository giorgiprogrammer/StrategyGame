import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import spainImg from './images/spainLogo.png';
import germanImg from './images/germanLogo.png';
import englandImg from './images/englandLogo.png';
import francedImg from './images/franceLogo.png';
import russianImg from './images/russianLogo.png';
import mongolImg from './images/monglLogo.png';
import bizantieImg from './images/bizantieLogo.png';
import arabianImg from './images/arabianLogo.png';
import vikingImg from './images/vikingLogo.png';
import turkImg from './images/turkLogo.png';
import moorsImg from './images/moorsLogo.png';
import playMusicImg from './images/pauseMusicLogo.png';
import pauseMusicImg from './images/playMusicLogo.png';
import musicMP3 from './musics/backMusic.mp3';
import backgroundImg from './images/background.png';

const AudioPlayer = ({ musicMP3, isPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <audio ref={audioRef} src={musicMP3} />
  );
};

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicImgSrc, setMusicImgSrc] = useState(playMusicImg);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    setMusicImgSrc(!isPlaying ? pauseMusicImg : playMusicImg);
  };

  function counteries() {
    return (
      <div className="optionsOfCountrey">
        <div className="england">
          <img
            src={englandImg}
            alt="England"
            style={{ width: '1.9vw', height: '2vw', borderRadius: '50%' }}
          />{' '}
          England
        </div>
        <div className="france">
          <img
            src={francedImg}
            alt="France"
            style={{ width: '2vw', height: '2vw', borderRadius: '50%' }}
          />{' '}
          France
        </div>
        <div className="germans">
          <img
            src={germanImg}
            alt="German"
            style={{ width: '2vw', height: '2vw', borderRadius: '50%' }}
          />{' '}
          German
        </div>
        <div className="spain">
          <img
            src={spainImg}
            alt="Spain"
            style={{ width: '2vw', height: '2vw', borderRadius: '50%' }}
          />{' '}
          Spain{' '}
        </div>
        <div className="vikings">
          <img
            src={vikingImg}
            alt="Viking"
            style={{ width: '2vw', height: '2vw', borderRadius: '50%' }}
          />{' '}
          Vikings
        </div>
        <div className="byzanties">
          <img
            src={bizantieImg}
            alt="Bizantie"
            style={{ width: '2vw', height: '2vw', borderRadius: '50%' }}
          />{' '}
          Byzanty
        </div>
        <div className="turks">
          <img
            src={turkImg}
            alt="Turk"
            style={{ width: '2vw', height: '2vw', borderRadius: '50%' }}
          />{' '}
          Turks
        </div>
        <div className="russian">
          <img
            src={russianImg}
            alt="Russian"
            style={{ width: '2vw', height: '2vw', borderRadius: '50%' }}
          />{' '}
          Russian
        </div>
        <div className="moors">
          <img
            src={moorsImg}
            alt="Moors"
            style={{ width: '2.3vw', height: '2vw', borderRadius: '50%' }}
          />{' '}
          Moors
        </div>
        <div className="arabs">
          <img
            src={arabianImg}
            alt="Arabian"
            style={{ width: '2.3vw', height: '2vw', borderRadius: '50%' }}
          />{' '}
          Arabs
        </div>
        <div className="mongols">
          <img
            src={mongolImg}
            alt="Mongol"
            style={{ width: '2vw', height: '2vw', borderRadius: '50%' }}
          />{' '}
          Mongols
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <img
        src={backgroundImg}
        alt="Background"
        style={{
          position: 'absolute',
          top: '0vw',
          left: '0vw',
          width: '100vw',
          filter: 'grayscale(40%)',
        }}
      />
      <div className="music" onClick={togglePlay}>
        <img
          src={musicImgSrc}
          alt="Music"
          style={{ width: '3vw', height: '3vw', borderRadius: '50%', cursor: 'pointer' }}
        />
      </div>
      <AudioPlayer musicMP3={musicMP3} isPlaying={isPlaying} />
      {counteries()}
      <br></br>
      <br></br>
      <div className='dificulties'>
        <div id="easy">Easy</div>
        <div id ="normal">Normal</div>
        <div id="hard">Hard</div>
      </div>
    </div>
  );
}

export default App;
