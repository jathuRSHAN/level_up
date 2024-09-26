import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
//import Resume from './components/Resume';
import Features from './components/Features';
import SuccessStories from './components/SuccessStories';
import ActionSection from './components/ActionSection';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Features />
      <Projects />
      <SuccessStories />
      <ActionSection />
      {/* <Resume/> */}
      <Contact />
      <Footer />

    </div>

  );
}

export default App;
