import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import HomeSection from './component/HomeSection';
import ServiceSection from './component/ServiceSection';
import ProjectSection from './component/ProjectSection';
import BlogSection from './component/BlogSection';
import ContactSection from './component/ContactSection';
import DesignInspiration from './component/DesignSection';
import Footer from './component/Footer';
import DetailService from './pages/DetailService';
import OurBlog from './pages/OurBlog';
import OurProjects from './pages/OurProjects';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='bg-[#60b4fc]'>
        <Routes>
          <Route path="/" element={
            <>
              <HomeSection />
              <ServiceSection />
              <ProjectSection />
              <BlogSection />
              <DesignInspiration />
              <ContactSection />
            </>
          } />
          <Route path="/DetailService" element={<DetailService />} />
          <Route path="/OurBlog" element={<OurBlog />} />
          <Route path="/OurProjects" element={<OurProjects />} />
          <Route path="/DesignInspiration" element={<DesignInspiration />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
