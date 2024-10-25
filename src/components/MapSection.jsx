import React from 'react'

const MapSection = () => {
  return (
    <section className="mapSection">
      <div className="mapContainer tablet-desktop-only">
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=11ibS4TB78wCbSLjHSrNB4w-Gc0yVUk0&ehbc=2E312F&noprof=1" 
        width="640" height="540"></iframe>
      </div>
      <div className="adressesContainer">
        <div className="adressContainer" id='adress-c-g-1'>
          <h3>Medical Center 1</h3>
          <div className="adress">
            <i className="fa-solid fa-location-dot"></i>
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
          </div>
          <div className="phoneNumber">
            <i className="fa-solid fa-phone-volume"></i>
            <p>(406) 555-0120</p>
          </div>
          <div className="openHours">
            <i className="fa-regular fa-clock"></i>
            <h4>Mon - Fri: </h4>
            <p>9:00 am - 22:00 am</p>
            <h4>Sat - Sun: </h4>
            <p>9:00 am - 20:00 am</p>  
          </div>
        </div>
        <div className="adressContainer" id='adress-c-g-2'>
          <h3>Medical Center 2</h3>
          <div className="adress">
            <i className="fa-solid fa-location-dot"></i>
            <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
          </div>
          <div className="phoneNumber">
            <i className="fa-solid fa-phone-volume"></i>
            <p>(406) 544-0123</p>
          </div>
          <div className="openHours">
            <i className="fa-regular fa-clock"></i>
            <h4>Mon - Fri: </h4>
            <p>9:00 am - 22:00 am</p>
            <h4>Sat - Sun: </h4>
            <p>9:00 am - 20:00 am</p>  
          </div>
        </div>
        <div className="externalLinksContainer">    
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a className="mobile-only" href="https://www.google.com/maps/d/u/0/embed?mid=11ibS4TB78wCbSLjHSrNB4w-Gc0yVUk0&ehbc=2E312F&noprof=1&ll=37.72990639029704%2C-122.4028530837383&z=15" target="_blank">
            <i className="fa-solid fa-map-location-dot"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default MapSection