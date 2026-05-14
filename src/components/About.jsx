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
                key={stat.id}
                className="about-stat"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="stat-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
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