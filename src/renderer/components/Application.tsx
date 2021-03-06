import React, { useEffect, useState } from 'react';
import darkModeIcon from '@assets/images/darkmode.png';
import lightModeIcon from '@assets/images/lightmode.png';
import './Application.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import LoadingPage from './LoadingPage';
import MainPage from './MainPage';

const Application: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  /**
   * On component mount
   */
  useEffect(() => {
    const useDarkTheme = parseInt(localStorage.getItem('dark-mode'));
    if (isNaN(useDarkTheme)) {
      setDarkTheme(true);
    } else if (useDarkTheme == 1) {
      setDarkTheme(true);
    } else if (useDarkTheme == 0) {
      setDarkTheme(false);
    }
  }, []);

  /**
   * On Dark theme change
   */
  useEffect(() => {
    if (darkTheme) {
      localStorage.setItem('dark-mode', '1');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('dark-mode', '0');
      document.body.classList.remove('dark-mode');
    }
  }, [darkTheme]);

  /**
   * Toggle Theme
   */
  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
      <HashRouter>
        <Routes>
          {/* <Route path="/" element={<LoadingPage />}/> */}
          <Route path="/" element={<MainPage />}/>
        </Routes>
      </HashRouter>
  );
};

export default Application;

      {/* <div className='header'>
        <div className='main-heading'>
          <h1 className='themed'>Scrap Mechanic Launcher</h1>
        </div>
        <img src={logo} title='Codesbiome' />
        <div className='main-teaser'>
          <div>
            Minimal boilerplate for rapid development of Desktop Applications
            using Electron, React, Typescript and Webpack. For faster
            development experience, this application will update using Hot
            Reload without needing to restart.
          </div>
        </div>
        <div className='versions'>
          <span>
            ERWT <span>{versions.erwt}</span>
          </span>
          <span>
            Electron <span>{versions.electron}</span>
          </span>
          <span>
            Chrome <span>{versions.chrome}</span>
          </span>
          <span>
            Node <span>{versions.node}</span>
          </span>
          <span>
            React <span>{versions.react}</span>
          </span>
          <span>
            Webpack <span>{versions.webpack}</span>
          </span>
          <span>
            Typescript <span>{versions.typescript}</span>
          </span>
          <span>
            License <span>{versions.license}</span>
          </span>
        </div>
      </div> */}
{/* 
      <div className='footer'>
        <div className='center'>
          <button
            onClick={() => {
              if (counter > 99) return alert('Going too high!!');
              setCounter(counter + 1);
            }}
          >
            Increment <span>{counter}</span>
          </button>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <button
            onClick={() => {
              if (counter == 0) return alert('Oops.. thats not possible!');
              setCounter(counter > 0 ? counter - 1 : 0);
            }}
          >
            Decrement <span>{counter}</span>
          </button>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <button onClick={toggleTheme}>
            {darkTheme ? 'Light Mode' : 'Dark Mode'}
            <span>
              <img
                className='rotate'
                src={darkTheme ? lightModeIcon : darkModeIcon}
              />
            </span>
          </button>
        </div>
      </div> */}
      {/* <Button fixSize={false} onClick={getGamePath}>Open Game Path</Button> */}