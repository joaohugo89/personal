import { useState } from 'react';
import Carousel from '../Carousel';
import { stories } from '../../data/site';

/* Estrelas da avaliação */
function Stars({ n }) {
  return (
    <span className="stars" aria-label={`${n} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" width="14" height="14" aria-hidden="true">
          <path
            d="M10 1.8l2.5 5.2 5.6.8-4 4 .9 5.6L10 14.8 5 17.4l1-5.6-4-4 5.5-.8z"
            fill={i < n ? 'var(--c-accent)' : 'transparent'}
            stroke="var(--c-accent)"
            strokeWidth="1.2"
          />
        </svg>
      ))}
    </span>
  );
}

/* SEÇÃO 4 — HISTÓRIAS: comparador antes/depois + depoimentos.
   O comparador é um range nativo: funciona com mouse, toque e teclado. */
export default function Stories({ id }) {
  const story = stories.cases[0];
  const [split, setSplit] = useState(50);

  return (
    <section className="panel panel--alt" id={id} aria-label="Histórias de transformação">
      <div className="panel__inner">
        <header className="sec-head">
          <div>
            <span className="eyebrow" data-anim>{stories.eyebrow}</span>
            <h2 className="sec-head__title" data-anim>{stories.title}</h2>
          </div>
          <p className="sec-head__text" data-anim>{stories.text}</p>
        </header>

        <div className="stories">
          <article className="card story" data-anim>
            {/* ANTES/DEPOIS — troque as fotos em src/data/site.js (stories.cases) */}
            <div className="compare" style={{ '--split': `${split}%` }}>
              <img className="compare__img" src={story.before} alt="Antes do acompanhamento" />
              <img className="compare__img compare__img--after" src={story.after} alt="Depois do acompanhamento" />
              <span className="compare__label compare__label--before">{story.beforeLabel}</span>
              <span className="compare__label compare__label--after">{story.afterLabel}</span>
              <span className="compare__handle" aria-hidden="true" />
              <input
                className="compare__range"
                type="range"
                min="0"
                max="100"
                value={split}
                onChange={(e) => setSplit(Number(e.target.value))}
                aria-label="Comparar antes e depois"
              />
            </div>

            <div className="story__body">
              <p className="story__quote">“{story.quote}”</p>
              <p className="story__name">{story.name}</p>
              <p className="story__meta">{story.meta}</p>
              <dl className="story__metrics">
                {story.metrics.map((m) => (
                  <div key={m.label}>
                    <dt>{m.value}</dt>
                    <dd>{m.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>

          <Carousel className="quotes" label="Depoimentos">
            {stories.testimonials.map((t) => (
              <figure className="card quote" key={t.name} data-anim>
                <Stars n={t.rating} />
                <blockquote>“{t.quote}”</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
