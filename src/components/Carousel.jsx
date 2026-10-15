import { useCallback, useEffect, useRef, useState } from 'react';

/* ============================================================
   CARROSSEL (somente mobile)
   ------------------------------------------------------------
   No desktop este componente é apenas a <div> do grid normal.
   No mobile o CSS transforma a mesma lista em uma faixa
   deslizável com scroll-snap nativo (fluido, sem biblioteca) e
   os indicadores abaixo mostram/trocam o card ativo.

   Uso:
     <Carousel className="pillars">{cards}</Carousel>
   `className` continua sendo a classe de grid da seção.
   ============================================================ */
export default function Carousel({ className = '', children, label = 'Itens' }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const total = Array.isArray(children) ? children.length : 1;

  /* Descobre o card mais próximo do centro da faixa. */
  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el || el.scrollWidth <= el.clientWidth) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let dist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const c = child.offsetLeft + child.offsetWidth / 2;
      const d = Math.abs(c - center);
      if (d < dist) {
        dist = d;
        best = i;
      }
    });
    setActive(best);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    el.addEventListener('scroll', sync, { passive: true });
    return () => el.removeEventListener('scroll', sync);
  }, [sync]);

  const goTo = (i) => {
    const el = trackRef.current;
    const child = el?.children?.[i];
    if (!el || !child) return;
    el.scrollTo({ left: child.offsetLeft - el.offsetLeft, behavior: 'smooth' });
  };

  return (
    <div className="carousel">
      {/* data-scroll-free: o arraste dentro do carrossel não troca de seção */}
      <div className={`carousel__track ${className}`} ref={trackRef} data-scroll-free>
        {children}
      </div>

      <div className="carousel__dots" role="tablist" aria-label={label}>
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Item ${i + 1} de ${total}`}
            className={`carousel__dot ${i === active ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
