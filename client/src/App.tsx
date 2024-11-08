import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Introduction from './components/Introduction';
import Statistic from './components/Statistic';
import OurSolutions from './components/OurSolutions';
import FeedBack from './components/FeedBack';
import Insights from './components/Insights';
import { useModal } from './GlobalState';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Partnerships from './components/Partnerships';
import GettingStarted from './components/GettingStarted';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { modalState } = useModal();

   // Lock background scroll when the modal is open
   useEffect(() => {
    if (modalState.modal) {
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset'; // Restore background scroll
    }

    // Clean up the overflow style when the component is unmounted
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalState]);

  return (
    <div className="wrapper">
        <ToastContainer />
        <Header />
        <HeroSection />
        <Introduction />
        <Statistic />
        <OurSolutions />
        <FeedBack />
        <Insights />
        <Partnerships />
        <GettingStarted />
        <Footer />
        <ScrollToTop />
        {
          modalState.modal &&
          modalState.modal 
        }
    </div>
  );
}

export default App;
