import React from 'react'
import { Link } from 'react-router-dom'


const Features2 = () => {
  return (
    <>   
      <article className="features2 desktop-only">
        <div className="upperWrapper"> 
            <h2>Make your money <br/> transfer simple and clear</h2>
            <ul>
              <li>
                <i className="fa-regular fa-circle-check"></i>
                Banking transactions are free for you
              </li>
              <li>
                <i className="fa-regular fa-circle-check"></i>
                No monthly cash commission
              </li>
              <li>
                <i className="fa-regular fa-circle-check"></i>
                Manage payments and transactions online
              </li>
            </ul>
            <Link className="primary-btn learn-more-btn" to="/Construction" end>
              <span>Learn more</span>
              <i className="fa-solid fa-arrow-right"></i> 
            </Link>
        </div>
        <div id="forecast-container">
            <img src={`${import.meta.env.BASE_URL}Images/forecast.svg`} alt="forecast preview"/>
        </div>
        <div id="contacts-container">
            <img src={`${import.meta.env.BASE_URL}Images/contacts.svg`} alt="contacts preview"/>
        </div>
        <div className="lowerWrapper">  
          <h2 id="lower-1">Receive payment from <br/> international bank details</h2>
          <div className="img-container-features" id="lower-2">
            <img src={`${import.meta.env.BASE_URL}Images/credit-card.svg`} alt="credit-card icon" className="icon-img"/>
          </div>
          <div className="img-container-features" id="lower-3">
            <img src={`${import.meta.env.BASE_URL}Images/wallet.svg`} alt="wallet icon" className="icon-img"/>
          </div>
          <div className="infoContainer" id="lower-4">   
            <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
          </div>
          <div className="infoContainer" id="lower-5" >   
            <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
          </div>
          <Link className="primary-btn learn-more-btn" id="lower-6" to="/Construction" end>
            <span>Learn more</span>
            <i className="fa-solid fa-arrow-right"></i> 
          </Link>
        </div>
      </article>
    </>
  )
}

export default Features2