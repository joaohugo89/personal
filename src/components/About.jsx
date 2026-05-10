import AOS from 'aos';
import { useEffect } from 'react';
import { aboutData } from '../data/about';
import '../styles/About.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">
            Sobre a <span className="gradient-text">ForceGym</span>
          </h2>

          <p className="about-description">
            {aboutData.description}
          </p>

          <div className="about-stats">
            {aboutData.stats.map((stat, index) => (
              <div
                key={index}
                className="about-stat"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;