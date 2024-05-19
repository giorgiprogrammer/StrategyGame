
import './App.css';
import React, { useState } from 'react'; // Import useState
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
import musicImg from './images/musicLogo.png';
import musicMP3 from './musics/backMusic.mp3'

function App() {
  
  function music(){
    return(
      <div className='music'>
        <img src={musicImg} alt="Music" style={{ width: '4vw', height: '4vw', borderRadius: '50%' }}/>
        <audio controls src={musicMP3}>
        Your browser does not support the audio element.
      </audio>
      </div>
    );
  }
  function MyComponent({ musicMP3 }) { // Pass musicMP3 as a prop
    const canAutoplay = !('autoplay' in document.createElement('audio'));
    const [isPlaying, setIsPlaying] = useState(canAutoplay); // Initial play state based on compatibility
  
    const handlePlayPause = () => {
      setIsPlaying(!isPlaying);
    };}
  function counteries(){
    return (
      <div className='optionsOfCountrey'>
      <div className="byzanties"><img src={bizantieImg} alt="Bizantie" style={{ width: '2vw', height: '2vw', borderRadius: '50%' }}/> Byzanty</div>
      <div className="germans"><img src={germanImg} alt="German" style={{ width: '2vw', height: '2vw', borderRadius: '50%' }}/> Germans</div>
      <div className="england"><img src={englandImg} alt="England" style={{ width: '1.9vw', height: '2vw', borderRadius: '50%' }}/> England</div>
      <div className="spain"><img src={spainImg} alt="Spain" style={{ width: '2vw', height: '2vw', borderRadius: '50%' }}/> Spain </div>
      <div className="france"><img src={francedImg} alt="France" style={{ width: '2vw', height: '2vw', borderRadius: '50%' }}/> France</div>
      <div className="russian"><img src={russianImg} alt="Russian" style={{ width: '2vw', height: '2vw', borderRadius: '50%' }}/> Russian</div>
      <div className="moors"><img src={moorsImg} alt="Moors" style={{ width: '2.3vw', height: '2vw', borderRadius: '50%' }}/> Moors</div>
      <div className="arabs"><img src={arabianImg} alt="Arabian" style={{ width: '2.3vw', height: '2vw', borderRadius: '50%' }}/> Arabs</div>
      <div className="vikings"><img src={vikingImg} alt="Viking" style={{ width: '2vw', height: '2vw', borderRadius: '50%' }}/> Vikings</div>
      <div className="turks"><img src={turkImg} alt="Turk" style={{ width: '2vw', height: '2vw', borderRadius: '50%' }}/> Turks</div>
      <div className="mongols"><img src={mongolImg} alt="Mongol" style={{ width: '2vw', height: '2vw', borderRadius: '50%' }}/> Mongols</div>
    </div>
    );
  }
  return (
    <div className="App">
      {music()}
     {counteries()}

    </div>
  );
}

export default App;
