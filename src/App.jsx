import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import HomeSection from './pages/HomeSection';
import ServiceSection from './pages/ServiceSection';
import ProjectSection from './pages/ProjectSection';
import BlogSection from './pages/BlogSection';
import ContactSection from './pages/ContactSection';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/services" element={<ServiceSection />} />
        <Route path="/projects" element={<ProjectSection />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </Router>
  );
};

export default App;
