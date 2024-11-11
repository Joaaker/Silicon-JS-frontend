import React from 'react'
import Navbar from '../components/Navbar';

const Construction = () => {
  return (
    <>
    <div className='gradient-wrapper'>
      <Navbar/>
      <main className='constructionMain'>
        <h1>
          <i class="fa-solid fa-hammer"></i>
          This page is under construction
          <i class="fa-solid fa-hammer"></i>
        </h1>
        <h2>We’re working hard to bring you the best experience. Check back soon!</h2>
      </main>
    </div>
    </>

  )
}

export default Construction