import React from 'react';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Work from './Pages/Work';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Skills className='ease-in duration-300' />
      <Work />
      <Contact />
    </>
  );
};

export default App