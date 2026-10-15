import { hero, whatsappLink } from '../../data/site';

/* SEÇÃO 1 — HERO
   Imagem à esquerda, manchete + métricas à direita. */
export default function Hero({ id, onNavigate }) {
  return (
    <section className="panel panel--hero" id={id} aria-label="Início">
      <div className="panel__inner hero">
        <figure className="hero__media" data-anim>
          {/* IMAGEM DO PERSONAL — troque em src/data/site.js (hero.image) */}
          <img src={hero.image} alt={hero.imageAlt} loading="eager" />
          <figcaption className="hero__tag">
            <span className="hero__dot" />
            {hero.imageTag}
          </figcaption>
        </figure>

        <div className="hero__content">
          <span className="badge" data-anim>{hero.badge}</span>

          <h1 className="hero__title" data-anim>
            {hero.titleLines.map((line, i) => (
              <span key={line} className={i === hero.highlightLine ? 'is-accent' : ''}>
                {line}
              </span>
            ))}
          </h1>

          <p className="hero__text" data-anim>{hero.text}</p>

          <div className="hero__actions" data-anim>
            {/* CTA principal — WhatsApp do cliente */}
            <a className="btn btn--accent" href={whatsappLink} target="_blank" rel="noreferrer">
              {hero.ctaPrimary}
            </a>
            <button type="button" className="btn btn--ghost" onClick={() => onNavigate(2)}>
              {hero.ctaSecondary}
            </button>
          </div>

          <span className="eyebrow" data-anim>{hero.eyebrow}</span>

          <dl className="hero__stats" data-anim>
            {hero.stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
