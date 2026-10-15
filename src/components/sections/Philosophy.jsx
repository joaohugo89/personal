import Icon from '../Icon';
import Carousel from '../Carousel';
import { philosophy } from '../../data/site';

/* SEÇÃO 2 — FILOSOFIA: título grande + 3 pilares em cards. */
export default function Philosophy({ id }) {
  return (
    <section className="panel panel--alt" id={id} aria-label="Filosofia">
      <div className="panel__inner">
        <header className="sec-head">
          <div>
            <span className="eyebrow" data-anim>{philosophy.eyebrow}</span>
            <h2 className="sec-head__title" data-anim>
              {philosophy.title.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </h2>
          </div>
          <p className="sec-head__text" data-anim>{philosophy.text}</p>
        </header>

        <Carousel className="pillars" label="Pilares">
          {philosophy.pillars.map((p) => (
            <article className="card pillar" key={p.n} data-anim>
              <div className="pillar__top">
                <span className="pillar__icon"><Icon name={p.icon} size={22} /></span>
                <span className="pillar__n">{p.n}</span>
              </div>
              <h3 className="pillar__title">{p.title}</h3>
              <p className="pillar__text">{p.text}</p>
              <hr className="rule" />
              {/* Link opcional: aponte para uma página interna ou remova */}
              <span className="pillar__link">
                {p.link}
                <Icon name="arrowRight" size={16} />
              </span>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
