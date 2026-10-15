import { useState } from 'react';
import Icon from './Icon';
import { brand, whatsappLink } from '../data/site';

/* Header fixo. Clicar num item do menu dispara a transição
   horizontal (desktop) ou o scroll suave (mobile). */
export default function Header({ sections, index, onNavigate, dark }) {
  const [open, setOpen] = useState(false);

  const handle = (i) => {
    onNavigate(i);
    setOpen(false);
  };

  return (
    <header
      className={[
        'header',
        dark ? 'is-dark on-dark' : '',
        open ? 'header--mobile-open' : '',
      ].join(' ')}
    >
      <a className="brand" href="#hero" onClick={(e) => { e.preventDefault(); handle(0); }}>
        <span className="brand__mark">{brand.initials}</span>
        <span className="brand__name">
          {brand.name} <span>{brand.surname}</span>
        </span>
      </a>

      <nav className="nav" aria-label="Seções">
        {sections.slice(1).map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`nav__link ${index === i + 1 ? 'is-active' : ''}`}
            onClick={() => handle(i + 1)}
          >
            {s.label}
          </button>
        ))}
      </nav>

      <div className="header__right">
        {/* CTA do header — abre o WhatsApp do cliente */}
        <a className="btn btn--accent header__cta" href={whatsappLink} target="_blank" rel="noreferrer">
          Agendar consulta
        </a>
        <button
          type="button"
          className="burger"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>
    </header>
  );
}
