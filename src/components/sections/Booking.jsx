import { useState } from 'react';
import Icon from '../Icon';
import { booking, brand, footer, sections } from '../../data/site';

const EMPTY = { nome: '', telefone: '', objetivo: '', periodo: '', mensagem: '' };

/* SEÇÃO 5 — AGENDAMENTO + FOOTER
   Sem backend: o formulário monta a mensagem e abre o WhatsApp.
   Para integrar com e-mail/CRM, troque o corpo de handleSubmit. */
export default function Booking({ id, onNavigate }) {
  const [form, setForm] = useState(EMPTY);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const texto = [
      'Olá! Quero agendar minha consulta gratuita.',
      `Nome: ${form.nome}`,
      `Telefone: ${form.telefone}`,
      `Objetivo: ${form.objetivo}`,
      `Melhor período: ${form.periodo}`,
      form.mensagem && `Mensagem: ${form.mensagem}`,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <section className="panel panel--dark on-dark" id={id} aria-label="Agendar consulta">
      <div className="panel__inner booking">
        <div className="booking__card card--dark">
          <div className="booking__intro">
            <span className="badge" data-anim>{booking.eyebrow}</span>
            <h2 className="booking__title" data-anim>{booking.title}</h2>
            <p className="booking__text" data-anim>{booking.text}</p>
            <ul className="booking__perks" data-anim>
              {booking.perks.map((p) => (
                <li key={p}>
                  <Icon name="check" size={16} />
                  {p}
                </li>
              ))}
            </ul>
            <a className="booking__wpp" href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer" data-anim>
              <Icon name="whatsapp" size={18} />
              Prefere falar agora? Chame no WhatsApp
            </a>
          </div>

          {/* data-scroll-free: o scroll dentro do form não troca de seção */}
          <form className="form" onSubmit={handleSubmit} data-anim data-scroll-free>
            <div className="form__row">
              <label className="field">
                <span>Nome completo</span>
                <input required value={form.nome} onChange={set('nome')} placeholder="Seu nome" />
              </label>
              <label className="field">
                <span>Telefone / WhatsApp</span>
                <input
                  required
                  type="tel"
                  value={form.telefone}
                  onChange={set('telefone')}
                  placeholder="(11) 90000-0000"
                />
              </label>
            </div>

            <div className="form__row">
              <label className="field">
                <span>Objetivo principal</span>
                <select required value={form.objetivo} onChange={set('objetivo')}>
                  <option value="">Selecione</option>
                  {booking.goals.map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </label>
              <label className="field">
                <span>Melhor período</span>
                <select required value={form.periodo} onChange={set('periodo')}>
                  <option value="">Selecione</option>
                  {booking.periods.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="field">
              <span>Conte um pouco do seu momento (opcional)</span>
              <textarea rows="2" value={form.mensagem} onChange={set('mensagem')} placeholder="Histórico, lesões, rotina..." />
            </label>

            <button className="btn btn--accent btn--block" type="submit">
              {booking.submit}
            </button>
            <p className="form__note">{booking.disclaimer}</p>
          </form>
        </div>

        {/* ---------- FOOTER INTEGRADO ---------- */}
        <footer className="footer" data-anim>
          <div className="footer__brand">
            <span className="brand__mark">{brand.initials}</span>
            <div>
              <strong>{brand.name} {brand.surname}</strong>
              <p>{footer.tagline}</p>
            </div>
          </div>

          <nav className="footer__nav" aria-label="Rodapé">
            {sections.map((s, i) => (
              <button key={s.id} type="button" onClick={() => onNavigate(i)}>
                {s.label}
              </button>
            ))}
          </nav>

          <div className="footer__meta">
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <span>{brand.city}</span>
          </div>

          <div className="footer__legal">
            <span>{footer.legal}</span>
            <span>{footer.note}</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
