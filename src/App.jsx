import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import HomeSection from './pages/HomeSection';
import ServiceSection from './pages/services/ServiceSection';
import ProjectSection from './pages/project/ProjectSection';
import BlogSection from './pages/blog/BlogSection';
import ContactSection from './pages/ContactSection';
import DesignInspiration from './pages/design/DesignInspiration';
import DesignSection from './pages/design/DesignSection';
import Footer from './component/Footer';
import Blog from './pages/blog/Blog';
import OurProjects from './pages/project/Projects';
import FloatingWhatsApp from './component/FloatingWhatsapp';
import { DarkModeProvider } from './component/DarkModeContext';
import SingleBlog from './pages/blog/SingleBlog';
import SingleProject from './pages/project/SingleProject';
import SingleService from './pages/services/SingleService';
import ScrollToTop from './component/ScrollToTop';

const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={
              <>
                <HomeSection />
                <ServiceSection />
                <ProjectSection />
                <BlogSection />
                <DesignSection />
                <ContactSection />
              </>
            } />
            <Route path="/service/:slug" element={<SingleService />} />
            <Route path="/our-blog" element={<Blog />} />
            <Route path="/our-project" element={<OurProjects />} />
            <Route path="/design-inspiration" element={<DesignInspiration />} />
            <Route path="/blog/:slug" element={<SingleBlog />} />
            <Route path="/project/:slug" element={<SingleProject />} />
          </Routes>
        </div>
        <FloatingWhatsApp />
        <Footer />
      </Router>
    </DarkModeProvider>
  );
};

export default App;
