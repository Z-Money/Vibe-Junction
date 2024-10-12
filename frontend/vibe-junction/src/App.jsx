// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// React Imports
import { useState, useEffect } from 'react'

// CSS Imports
import './App.css'

// Component Imports
import AlbumList from './components/AlbumList.jsx'
import Vinyl from './components/Vinyl.jsx'
import Needle from './components/Needle.jsx'
import DurationBar from './components/DurationBar.jsx'
import SideMenu from './components/SideMenu.jsx'
import NextUp from './components/NextUp.jsx'
import Lyrics from './components/Lyrics.jsx'
import ArtistInfo from './components/ArtistInfo.jsx'

// Data Imports
import { albums } from './Albums.js'

function App() {
  const [currentAlbum, setCurrentAlbum] = useState(null);
  const [currentTab, setCurrentTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [delayedIsPlaying, setDelayedIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timerId;

    if (isPlaying) {
      setTimeout(() => {
        document.documentElement.style.setProperty('--rotate-start', `${36 * seconds}deg`);
        document.documentElement.style.setProperty('--rotate-end', `${36 * seconds + 360}deg`);
        timerId = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds + .1);
        }, 100); // Update every second

        setDelayedIsPlaying(isPlaying);
      }, 2000);

    }
    if (!isPlaying) {
      document.getElementsByClassName('vinyl')[0].style.transform = `rotate(${36 * seconds}deg)`;
      setDelayedIsPlaying(isPlaying);
    }
    return () => clearInterval(timerId); // Cleanup on component unmount or when isActive changes
  }, [isPlaying]);
  const updateIsPlaying = () => {
    setIsPlaying(!isPlaying);
  }
  const updateCurrentAlbum = (album) => {
    setCurrentAlbum(album);
  }
  const updateCurrentTab = (tab) => {
    setCurrentTab(tab);
  }
  return (
    <>
      <AlbumList albums={albums} updateCurrentAlbum={updateCurrentAlbum} />
      <div className="vinyl-info">
        <h1 className="vinyl-title">{currentAlbum ? `${currentAlbum.title} - ${currentAlbum.artist}` : 'No Album Selected'}</h1>
        <div className="record-player-container">
          <img src="/images/Record-Player.webp" alt="Record Player" className="record-player" />
          <Vinyl vinyl={currentAlbum} isPlaying={delayedIsPlaying} />
          <Needle isPlaying={isPlaying} updateIsPlaying={updateIsPlaying} />
        </div>
        <DurationBar duration={/*currentAlbum ? { length: currentAlbum.length, currentTime: currentTime } : { length: 0, currentTime: 0 }*/ { length: 243, currentTime: 50 }} />
      </div>
      <div className="side-menu-container">
        <SideMenu updateCurrentTab={updateCurrentTab} />
        {currentTab === 0 && <NextUp />}
        {currentTab === 1 && <Lyrics />}
        {currentTab === 2 && <ArtistInfo />}

      </div>
    </>
  )
}

export default App