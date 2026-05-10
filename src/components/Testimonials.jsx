import { useEffect } from 'react';
import { testimonials } from '../data/testimonials';
import '../styles/Testimonials.css';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <section id="testimonials" className="testimonials" data-aos="fade-up">
      <div className="testimonials-container">
        <h2 className="section-title">
          O que nossos <span className="gradient-text">alunos</span> dizem
        </h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={`${index * 150}`}
            >
              <div className="testimonial-avatar">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>

              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>

              <h3 className="testimonial-name">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;