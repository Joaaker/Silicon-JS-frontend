import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './common/DarkModeContext';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Construction from './pages/Construction';
import ScrollToTop from './common/ScrollToTop';

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter basename="/Silicon-JS-frontend">
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Construction" element={<Construction />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;