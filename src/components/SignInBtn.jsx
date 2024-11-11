import React from 'react'
import { Link } from 'react-router-dom'

const SignInBtn = () => {
  return (
    <Link className="primary-btn" id="signin-auth-btn" to="/Construction">
        <i className="fa-regular fa-user"></i>
        <span>Sign in / up</span>
    </Link>
  )
}

export default SignInBtn