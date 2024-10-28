import React from 'react'

const Showcase = () => {
  return (
    <section className="showcase">
        <div className="h1-container">       
            <h1>Manage All Your Money in One App</h1>
        </div>
        <p>We offer you a new generation of the mobile banking. <br className="tablet-desktop-only" />Save, spend & manage money in your pocket.</p>
        <a target='_blank' href="https://www.apple.com/se/app-store/" className="store-btn u-select-none" id="appstore">
            <img className="light-display" src="./public/Images/app store light.svg" alt="App store logo"/>
            <img className="dark-display" src="./public/Images/app store dark.svg" alt="App store logo"/>
        </a>
        <a target='_blank' href="https://play.google.com" className="store-btn u-select-none" id="googleplay">
            <img className="light-display" src="./public/Images/google play light.svg" alt="Google play logo"/>
            <img className="dark-display" src="./public/Images/google play dark.svg" alt="Google play logo"/>
        </a>
        <div className="discover-btn-container">
            <button aria-label="Discover more" className="circle-btn">
                <i className="fa-solid fa-chevron-up fa-rotate-180"></i>
            </button>
            <span className="discover-more-text">Discover more</span>
        </div>
        <div className="imageContainer u-select-none">
            <img src="./public/Images/iphone 12 header.svg" alt="iPhone 12"/>
        </div>
    </section>
  )
}

export default Showcase