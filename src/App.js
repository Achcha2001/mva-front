import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import News from './components/News';
import History from './components/History'; 
import Circulars from './components/Circular';
import TeamRanking from './components/Ranks';
import ExecutiveCommittee from './components/ExecutiveCommittee';
import Login from './components/Login';
import Footer from './components/Footer';   
import TournamentGraph from './components/graphs';
import AdminPortal from './components/AdminPortal';
import MainLayout from './components/MainLayout'; // Add this import for layout

function App() {
  return (
    <Router>
      <Routes>
        {/* Non-admin routes with Navbar and Footer */}
        <Route path="/*" element={<MainLayout />} />

        {/* Admin routes without Navbar and Footer */}
        <Route path="/admin" element={<AdminPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
