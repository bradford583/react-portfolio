import React from 'react';
import Navbar from './components/Navbar/navbar';
import Intro from './components/About/about';
import Resume from './components/Resume/resume';
import Work from './components/Work/work';
import Contact from './components/Contact/contact';
import Footer from "./components/Footer/footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <About />
        <Resume />
        <Work />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
