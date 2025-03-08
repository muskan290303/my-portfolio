import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './styles.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      
      <Projects />
      <Contact />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default App;
