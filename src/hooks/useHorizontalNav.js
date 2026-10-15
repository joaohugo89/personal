import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(Observer);

/* ============================================================
   MOTOR DA NAVEGAÇÃO HORIZONTAL
   ------------------------------------------------------------
   Desktop: o trilho (.track) é um flex de painéis de 100vw.
   Trocar de seção = animar `xPercent` do trilho em múltiplos
   de -100. O GSAP Observer captura wheel, swipe e drag e
   converte QUALQUER gesto (vertical ou horizontal) em um passo
   lateral, com trava enquanto a animação roda (sem acúmulo).

   Mobile / touch: o CSS neutraliza o trilho e os painéis viram
   uma pilha vertical com scroll nativo. Aqui apenas trocamos o
   motor: scrollIntoView para o menu e IntersectionObserver para
   saber qual seção está ativa.

   Customização rápida:
   --t-slide / --e-slide (src/styles/theme.css) = duração e curva.
   ============================================================ */

/* Consulta que define QUANDO cair para o modo vertical. */
const MOBILE_QUERY = '(max-width: 900px), (hover: none) and (pointer: coarse)';

/* Lê a duração/easing do tema para o JS seguir o CSS. */
function readMotion() {
  if (typeof window === 'undefined') return { duration: 1, ease: 'power3.inOut' };
  // Respeita "reduzir movimento": a troca de seção fica instantânea.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return { duration: 0, ease: 'none' };
  }
  const css = getComputedStyle(document.documentElement);
  const raw = css.getPropertyValue('--t-slide').trim();
  const duration = raw.endsWith('ms') ? parseFloat(raw) / 1000 : parseFloat(raw) || 1;
  return { duration, ease: 'power3.inOut' };
}

export function useHorizontalNav(total) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches,
  );
  const [hasInteracted, setHasInteracted] = useState(false);

  const indexRef = useRef(0);
  const animating = useRef(false);

  /* ---- detecta a troca de modo (resize / rotação) ---- */
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  /* ---- vai para um índice ---- */
  const goTo = useCallback(
    (next, { instant = false } = {}) => {
      const clamped = Math.max(0, Math.min(total - 1, next));
      if (clamped === indexRef.current && !instant) return;

      indexRef.current = clamped;
      setIndex(clamped);

      if (isMobile) {
        // Modo vertical: rolagem nativa até o painel.
        const panel = trackRef.current?.children?.[clamped];
        panel?.scrollIntoView({ behavior: instant ? 'auto' : 'smooth', block: 'start' });
        return;
      }

      const { duration, ease } = readMotion();
      animating.current = true;
      gsap.to(trackRef.current, {
        xPercent: -100 * clamped,
        duration: instant ? 0 : duration,
        ease,
        overwrite: true,
        onComplete: () => {
          animating.current = false;
        },
      });
    },
    [isMobile, total],
  );

  const next = useCallback(() => goTo(indexRef.current + 1), [goTo]);
  const prev = useCallback(() => goTo(indexRef.current - 1), [goTo]);

  /* ---- modo horizontal: Observer (wheel / touch / drag) ---- */
  useEffect(() => {
    document.body.classList.toggle('is-horizontal', !isMobile);
    if (isMobile) {
      gsap.set(trackRef.current, { clearProps: 'transform' });
      return undefined;
    }

    // Reposiciona sem animar ao voltar do modo vertical ou ao redimensionar.
    gsap.set(trackRef.current, { xPercent: -100 * indexRef.current });

    const step = (dir) => {
      if (animating.current) return;
      setHasInteracted(true);
      goTo(indexRef.current + dir);
    };

    const observer = Observer.create({
      target: window,
      // Sem 'pointer': um clique com micro-arrasto não pode virar seção.
      type: 'wheel,touch',
      wheelSpeed: -1,
      tolerance: 12,
      preventDefault: true,
      // Qualquer direção de gesto avança/retorna um painel.
      onUp: () => step(1),      // scroll para baixo / swipe para cima
      onDown: () => step(-1),
      onLeft: () => step(1),    // swipe para a esquerda = próxima seção
      onRight: () => step(-1),
    });

    const onKey = (e) => {
      if (['ArrowRight', 'PageDown'].includes(e.key)) step(1);
      if (['ArrowLeft', 'PageUp'].includes(e.key)) step(-1);
      if (e.key === 'Home') goTo(0);
      if (e.key === 'End') goTo(total - 1);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      observer.kill();
      window.removeEventListener('keydown', onKey);
    };
  }, [isMobile, goTo, total]);

  /* ---- modo vertical: marca a seção visível ---- */
  useEffect(() => {
    if (!isMobile || !trackRef.current) return undefined;
    const panels = Array.from(trackRef.current.children);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const i = panels.indexOf(entry.target);
          if (i >= 0) {
            indexRef.current = i;
            setIndex(i);
          }
        });
      },
      { threshold: 0.45 },
    );
    panels.forEach((p) => io.observe(p));
    return () => io.disconnect();
  }, [isMobile]);

  /* Campos de formulário não devem ser engolidos pelo Observer. */
  useEffect(() => {
    if (isMobile) return undefined;
    const stop = (e) => e.stopPropagation();
    const nodes = document.querySelectorAll('[data-scroll-free]');
    nodes.forEach((n) => n.addEventListener('wheel', stop));
    return () => nodes.forEach((n) => n.removeEventListener('wheel', stop));
  }, [isMobile]);

  return { trackRef, index, goTo, next, prev, isMobile, hasInteracted };
}
