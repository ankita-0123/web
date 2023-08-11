import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage'; 
import SignupPage from './components/SignupPage';
import imgSrc1 from './img/01.jpg';
import imgSrc2 from './img/02.jpg';
import imgSrc3 from './img/03.jpg';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/pragyan" element={<><Header /><Home/></>} />
          <Route path="/login" element={<LoginPage />} /> {/* Add this route */}
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Section
        imgSrc={imgSrc1}
        title="Section 1"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
      />
      <Section
        imgSrc={imgSrc2}
        title="Section 2"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
        reverseOrder
      />
      <Section
        imgSrc={imgSrc3}
        title="Section 3"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
      />
    </>
  );
};

export default App;
