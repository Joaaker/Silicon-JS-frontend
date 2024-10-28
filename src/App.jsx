import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './common/DarkModeContext';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;