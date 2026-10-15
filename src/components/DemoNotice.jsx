import { useEffect } from 'react';
import { demoNotice } from '../data/site';

/* ============================================================
   AVISO DE MODELO DEMONSTRATIVO
   ------------------------------------------------------------
   Barra fina no topo informando que os dados são fictícios.
   AO ENTREGAR O SITE AO CLIENTE: basta definir
   `demoNotice.enabled = false` em src/data/site.js (ou remover
   <DemoNotice /> do App.jsx) — nada mais precisa ser ajustado.
   ============================================================ */
export default function DemoNotice() {
  /* Sem a barra, zera a altura reservada no topo dos painéis. */
  useEffect(() => {
    if (!demoNotice.enabled) {
      document.documentElement.style.setProperty('--demo-h', '0px');
    }
  }, []);

  if (!demoNotice.enabled) return null;

  return (
    <aside className="demo-bar" role="note">
      <span className="demo-bar__icon" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 11v5" strokeLinecap="round" />
          <path d="M12 8h.01" strokeLinecap="round" />
        </svg>
      </span>
      <strong>{demoNotice.label}</strong>
      <span>{demoNotice.text}</span>
    </aside>
  );
}
