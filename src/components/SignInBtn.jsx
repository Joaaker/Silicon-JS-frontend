import React from 'react'
import { Link } from 'react-router-dom'

const SignInBtn = () => {
  return (
    <Link className="primary-btn desktop-only" id="signin-auth-btn" to="/">
        <i className="fa-regular fa-user"></i>
        <span>Sign in / up</span>
    </Link>
  )
}

export default SignInBtn