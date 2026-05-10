import AOS from 'aos';
import { useEffect } from 'react';
import { plans } from '../data/plans';
import '../styles/Plans.css';

const Plans = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <section id="plans" className="plans" data-aos="fade-up">
      <div className="plans-container">
        <h2 className="section-title">
          Escolha seu <span className="gradient-text">Plano</span>
        </h2>

        <div className="plans-grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card ${plan.popular ? 'popular' : ''}`}
              data-aos="fade-up"
              data-aos-delay={`${plan.id * 100}`}
            >
              {plan.popular && <div className="popular-badge">Mais Popular</div>}

              <h3>{plan.name}</h3>

              <div className="plan-price">
                <span className="price">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn btn-plan">
                Escolher
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;