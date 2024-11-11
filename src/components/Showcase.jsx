import React, { useContext } from 'react';
import { DarkModeContext } from '../common/DarkModeContext';
import DiscoverMoreBtn from './DiscoverMoreBtn';

const Showcase = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section className="showcase">
        <div className="h1-container">       
            <h1>Manage All Your Money in One App</h1>
        </div>
        <p>We offer you a new generation of the mobile banking. <br className="tablet-desktop-only" />Save, spend & manage money in your pocket.</p>
        <a target='_blank' href="https://www.apple.com/se/app-store/" className="store-btn u-select-none" id="appstore">
            <img className={`${darkMode ? 'displayNone' : ''}`} src={`${import.meta.env.BASE_URL}Images/appStoreLight.svg`} alt="App store logo"/>
            <img className={`${darkMode ? '' : 'displayNone'}`} src={`${import.meta.env.BASE_URL}Images/appStoreDark.svg`} alt="App store logo"/>
        </a>
        <a target='_blank' href="https://play.google.com" className="store-btn u-select-none" id="googleplay">
            <img className={`${darkMode ? 'displayNone' : ''}`} src={`${import.meta.env.BASE_URL}Images/googlePlayLight.svg`} alt="Google play logo"/>
            <img className={`${darkMode ? '' : 'displayNone'}`} src={`${import.meta.env.BASE_URL}Images/googlePlayDark.svg`} alt="Google play logo"/>
        </a>
        <DiscoverMoreBtn/>
        <div className="imageContainer u-select-none">
            <img src={`${import.meta.env.BASE_URL}Images/iphone12Showcase.svg`} alt="iPhone 12"/>
        </div>
    </section>
  )
}

export default Showcase