import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Gallery from './Gallery';
import Contact from './Contact';
import News from './News';
import History from './History'; 
import Circulars from './Circular';
import TeamRanking from './Ranks';
import ExecutiveCommittee from './ExecutiveCommittee';
import Login from './Login';
import TournamentGraph from './graphs';

function MainLayout() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {/* Conditionally render Navbar and Footer only for non-admin routes */}
      {!isAdminRoute && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/history" element={<History />} />
        <Route path="/circulars" element={<Circulars />} />
        <Route path="/team-ranking" element={<TeamRanking />} />
        <Route path="/executive-committee" element={<ExecutiveCommittee />} />
        <Route path="/login" element={<Login />} />
        <Route path="/graph" element={<TournamentGraph />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}

export default MainLayout;
