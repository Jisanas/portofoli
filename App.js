import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Works from './components/Works';

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}
import Skills from './items/Skills';

function App() {
  return (
    <div>
      {/* top of the home page*/}
      <Skills />
    </div>
  );
}
// App.js
import React from 'react';
import About from './About'; // Import the About component

function App() {
  return (
    <div>
      {/* You can add a navigation menu, header, or other components here */}
      <About /> {/* Rendering the About component here */}
    </div>
  );
}





export default App;

