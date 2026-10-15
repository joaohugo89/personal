import Icon from './Icon';

/* Setas Anterior / Próximo da navegação horizontal. */
export default function NavArrows({ onPrev, onNext, disablePrev, disableNext }) {
  return (
    <div className="nav-arrows">
      <button
        type="button"
        className="nav-arrows__btn"
        onClick={onPrev}
        disabled={disablePrev}
        aria-label="Seção anterior"
      >
        <Icon name="arrowLeft" />
      </button>
      <button
        type="button"
        className="nav-arrows__btn"
        onClick={onNext}
        disabled={disableNext}
        aria-label="Próxima seção"
      >
        <Icon name="arrowRight" />
      </button>
    </div>
  );
}
