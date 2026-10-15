import Icon from '../Icon';
import Carousel from '../Carousel';
import { programs, whatsappLink } from '../../data/site';

/* SEÇÃO 3 — PROGRAMAS: 3 planos, com o do meio em destaque. */
export default function Programs({ id }) {
  return (
    <section className="panel" id={id} aria-label="Programas de treino">
      <div className="panel__inner">
        <header className="sec-head sec-head--center">
          <span className="eyebrow" data-anim>{programs.eyebrow}</span>
          <h2 className="sec-head__title" data-anim>{programs.title}</h2>
          <p className="sec-head__text" data-anim>{programs.text}</p>
        </header>

        <Carousel className="plans" label="Planos">
          {programs.plans.map((plan) => (
            <article
              key={plan.id}
              className={`card plan ${plan.featured ? 'plan--featured card--dark on-dark' : ''}`}
              data-anim
            >
              <span className={plan.featured ? 'badge' : 'plan__tag'}>{plan.tag}</span>
              <h3 className="plan__name">{plan.name}</h3>
              <p className="plan__summary">{plan.summary}</p>

              <div className="plan__price">
                <span className="plan__currency">{plan.currency}</span>
                <span className="plan__value">{plan.price}</span>
                <span className="plan__period">{plan.period}</span>
              </div>

              <ul className="plan__features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <Icon name="check" size={16} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Todos os CTAs de plano abrem o WhatsApp do cliente */}
              <a
                className={`btn btn--block ${plan.featured ? 'btn--accent' : 'btn--ghost'}`}
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
