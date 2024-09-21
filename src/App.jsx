import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './component/Navbar';
import HomeSection from './component/HomeSection';
import ServiceSection from './component/ServiceSection';
import ProjectSection from './component/ProjectSection';
import BlogSection from './component/BlogSection';
import ContactSection from './component/ContactSection';
import DesignInspiration from './component/DesignSection';
import Footer from './component/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='bg-[#60b4fc]'>
        <HomeSection />
        <ServiceSection />
        <ProjectSection />
        <BlogSection />
        <DesignInspiration />
        <ContactSection />
      </div>
      <Footer />
      
      {/* <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/services" element={<ServiceSection />} />
        <Route path="/projects" element={<ProjectSection />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes> */}
    </Router>
  );
};

export default App;
