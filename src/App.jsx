import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import DemoNotice from './components/DemoNotice';
import Header from './components/Header';
import NavArrows from './components/NavArrows';
import Progress from './components/Progress';
import SwipeHint from './components/SwipeHint';

import Hero from './components/sections/Hero';
import Philosophy from './components/sections/Philosophy';
import Programs from './components/sections/Programs';
import Stories from './components/sections/Stories';
import Booking from './components/sections/Booking';

import { useHorizontalNav } from './hooks/useHorizontalNav';
import { sections } from './data/site';
import './styles/layout.css';
import './styles/sections.css';

/* Ordem dos painéis — precisa casar com `sections` em src/data/site.js */
const PANELS = [Hero, Philosophy, Programs, Stories, Booking];

export default function App() {
  const { trackRef, index, goTo, next, prev, isMobile, hasInteracted } =
    useHorizontalNav(PANELS.length);

  const lastIndex = useRef(-1);

  /* ---- Stagger de entrada do painel ativo ----------------
     Os elementos marcados com data-anim na seção entram em
     cascata assim que o painel vira o ativo. No modo vertical
     o CSS já deixa tudo visível e isto não roda.              */
  useEffect(() => {
    if (isMobile) return;
    const panel = trackRef.current?.children?.[index];
    if (!panel) return;

    panel.classList.add('is-ready');
    const items = panel.querySelectorAll('[data-anim]');
    const backwards = index < lastIndex.current;
    lastIndex.current = index;

    const tween = gsap.fromTo(
      items,
      { opacity: 0, x: backwards ? -42 : 42 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.07,
        delay: 0.18,
        overwrite: true,
      },
    );
    /* Ao sair do painel, descarta o tween e devolve os elementos ao
       estado final do CSS (.is-ready) — assim uma troca rápida de
       seção nunca deixa conteúdo preso em opacity: 0. */
    return () => {
      tween.kill();
      gsap.set(items, { clearProps: 'opacity,transform,x' });
    };
  }, [index, isMobile, trackRef]);

  const theme = sections[index]?.theme ?? 'light';

  /* Classe global para os controles trocarem de cor na seção escura */
  useEffect(() => {
    document.body.classList.toggle('is-dark-ui', theme === 'dark' && !isMobile);
  }, [theme, isMobile]);

  return (
    <div className="app">
      {/* Barra de aviso — desligue em src/data/site.js ao entregar */}
      <DemoNotice />
      <Header sections={sections} index={index} onNavigate={goTo} dark={theme === 'dark'} />

      <div className="viewport">
        <div className="track" ref={trackRef}>
          {PANELS.map((Panel, i) => (
            <Panel key={sections[i].id} id={sections[i].id} onNavigate={goTo} />
          ))}
        </div>
      </div>

      <Progress sections={sections} index={index} onNavigate={goTo} />
      <SwipeHint hidden={hasInteracted || index > 0} />
      <NavArrows
        onPrev={prev}
        onNext={next}
        disablePrev={index === 0}
        disableNext={index === PANELS.length - 1}
      />
    </div>
  );
}
