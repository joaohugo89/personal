/* Paginação: mostra em que painel o visitante está e permite pular. */
export default function Progress({ sections, index, onNavigate }) {
  return (
    <div className="progress">
      <span>
        {String(index + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
      </span>
      <div className="progress__dots">
        {sections.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`progress__dot ${i === index ? 'is-active' : ''}`}
            onClick={() => onNavigate(i)}
            aria-label={`Ir para ${s.label}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </div>
  );
}
