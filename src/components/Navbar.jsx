import { Link, scroller } from 'react-scroll';
import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      duration: 500
    });
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link
          to="hero"
          smooth
          className="navbar-logo"
          onClick={() => setIsOpen(false)}
        >
          ForceGym
        </Link>

        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <a href="#hero" onClick={() => scrollToSection('hero')}>Início</a>
          </li>
          <li>
            <a href="#features" onClick={() => scrollToSection('features')}>Diferenciais</a>
          </li>
          <li>
            <a href="#plans" onClick={() => scrollToSection('plans')}>Planos</a>
          </li>
          <li>
            <a href="#about" onClick={() => scrollToSection('about')}>Sobre</a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => scrollToSection('testimonials')}>Depoimentos</a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection('contact')} className="btn-cta">
              Matricule-se
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;