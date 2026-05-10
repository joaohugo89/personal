import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Plans from './components/Plans';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100
});

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <Plans />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;