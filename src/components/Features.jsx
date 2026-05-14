import AOS from 'aos';
import { useEffect } from 'react';
import { features } from '../data/features';
import '../styles/Features.css';

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <section id="features" className="features" data-aos="fade-up">
      <div className="features-container">
        <h2 className="section-title">
          Por que escolher a <span className="gradient-text">ForceGym</span>?
        </h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay={`${index * 0.15 * 100}`}
            >
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;