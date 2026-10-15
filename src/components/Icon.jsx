/* Ícones inline (sem dependência externa).
   Para adicionar um novo: crie a chave e cole o path do seu set. */
const PATHS = {
  activity: 'M3 12h4l3 8 4-16 3 8h4',
  leaf: 'M4 20c0-8 6-14 16-14 0 10-6 14-12 14H4zm2-2c4-6 8-8 10-9',
  pulse: 'M3 12h3l2-5 4 10 2-5h7',
  arrowLeft: 'M19 12H5m0 0l6-6m-6 6l6 6',
  arrowRight: 'M5 12h14m0 0l-6-6m6 6l-6 6',
  check: 'M4 12.5l5 5L20 6.5',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6L6 18',
  whatsapp:
    'M20 12a8 8 0 01-11.9 7L4 20l1.1-4A8 8 0 1120 12zM9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1-.4 1-1v-.8l-1.8-.8-.8 1a4.6 4.6 0 01-2.3-2.3l1-.8-.8-1.8H10c-.6 0-1 .4-1 1z',
};

export default function Icon({ name, size = 20, stroke = 1.7, ...rest }) {
  const d = PATHS[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      <path d={d} />
    </svg>
  );
}
