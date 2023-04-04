import Header from './Header';
import Footer from './Footer';
import React,{useState} from 'react';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';



export default function Container () {
const [currentPage, setCurrentPage] = useState('AboutMe');
const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Resume />;
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
    </div>
  );

}