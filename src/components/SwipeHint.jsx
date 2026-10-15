import Icon from './Icon';

/* Dica inicial: some depois da primeira interação. */
export default function SwipeHint({ hidden }) {
  return (
    <div className={`hint ${hidden ? 'is-hidden' : ''}`} aria-hidden="true">
      <span>Role ou arraste para o lado</span>
      <Icon name="arrowRight" size={18} className="hint__arrow" />
    </div>
  );
}
