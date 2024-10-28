import React from 'react';
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import Logos from '../components/Logos';
import Features from '../components/Features';
import Slider from '../components/Slider';
import Features2 from '../components/Features2';
import Testimonials from '../components/Testimonials';
import FAQContactSection from '../components/FAQContactSection';
import SubscribeSection from '../components/SubscribeSection';
import { Footer } from '../components/Footer';

const Home = () => {
  return (
    <>
      <div className="gradient-wrapper">
        <Navbar />
        <Showcase />
      </div>
      <main className="indexMain">  
        <Logos />
        <Features />
        <Slider />
        <Features2 />
        <Testimonials />
        <FAQContactSection />
        <SubscribeSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;