import React from 'react'

const Logos = () => {
  return (
    <div className="all-logos-container">
            <div className="logo-container" id="logoipsum-1">
                <img src={`${import.meta.env.BASE_URL}Images/logoipsum1.svg`} alt="logo1"/>
            </div>
            <div className="logo-container" id="logoipsum-2">
                <img  src={`${import.meta.env.BASE_URL}Images/logoipsum2.svg`} alt="logo2"/>
            </div>
            <div className="logo-container" id="logoipsum-3">
                <img  src={`${import.meta.env.BASE_URL}Images/logoipsum3.svg`} alt="logo3"/>
            </div>
            <div className="logo-container" id="logoipsum-4">
                <img  src={`${import.meta.env.BASE_URL}Images/logoipsum4.svg`} alt="logo4"/>
            </div>
            <div className="logo-container" id="logoipsum-5">
                <img  src={`${import.meta.env.BASE_URL}Images/logoipsum5.svg`} alt="logo5"/>
            </div>
            <div className="logo-container" id="logoipsum-6">
                <img  src={`${import.meta.env.BASE_URL}Images/logoipsum6.svg`} alt="logo6"/>
            </div>
        </div> 
  )
}

export default Logos