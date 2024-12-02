import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects'
import Features from './components/Features';
import SuccessStories from './components/SuccessStories';
import ActionSection from './components/ActionSection';
import Chatbot from './components/Chatbot'
import Priceing from './components/Priceing';
//import CourseDetails from './components/CourseDetails';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Always show the Header */}
        <Header />

        <div className="main-content">
          <Routes>
            {/* Define routes and dynamically render components */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Features />
                  <Projects />
                  <SuccessStories />
                  <ActionSection />
                  <Chatbot />
                  <Priceing />
                  <Contact />
                  <Features />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Always show the Footer */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

