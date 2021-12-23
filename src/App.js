import React, { useState } from 'react';
import Navbar from './components/Navbar/navbar';
import About from './components/About/about';
import Resume from './components/Resume/resume';
import Work from './components/Work/work';
import Contact from './components/Contact/contact';
import Footer from "./components/Footer/footer";
import "./App.css";

function App() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = (currentPage) => {
    switch(currentPage) {
      case 'About':
        return <About />;
      case 'Work' :
        return <Work />;
      case 'Resume':
        return <Resume />;
      case 'Contact' :
        return <Contact />;
    }
  };

  return (
    <body>
      <section className='background'>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        <div className='render'>{renderPage(currentPage)}</div>
        <Footer />
      </section>
    </body>
  );
}

export default App;
