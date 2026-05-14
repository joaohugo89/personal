import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero" data-aos="fade-up">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Transforme seu corpo.
          <span className="gradient-text">Mude sua vida.</span>
        </h1>

        <p className="hero-subtitle">
          A ForceGym — onde a força encontra a determinação.
          Entre em contato agora e comece sua jornada.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            Começar Agora
          </a>
          <a href="#plans" className="btn btn-secondary">
            Ver Planos
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat" data-aos="fade-up" data-aos-delay="100">
            <span>500+ Alunos</span>
          </div>
          <div className="stat" data-aos="fade-up" data-aos-delay="200">
            <span>10 Anos</span>
          </div>
          <div className="stat" data-aos="fade-up" data-aos-delay="300">
            <span>20 Modalidades</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;