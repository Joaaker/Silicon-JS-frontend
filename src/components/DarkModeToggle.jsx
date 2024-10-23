import React from 'react'

const DarkModeToggle = () => {
  return (
    <div className="dark-mode-toggle">
        <span className="darkmode-toggle-text">Dark Mode</span>
        <input type="checkbox" id="dark-mode" className="toggle-checkbox"/>
        <label aria-label="Dark mode toggle button" htmlFor="dark-mode" className="toggle-label"></label>
    </div>
  )
}

export default DarkModeToggle