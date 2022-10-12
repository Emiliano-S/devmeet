import closer from "../assets/svg/xRemove.svg";

export function PopUp({ type = 3 }) {
  return (
    <div className="PopUpContainer">
      <div className="PopUp">
        {
          {
            1: <h1>Ok</h1>,
            2: <h2>Ok 2</h2>,
            3: <h3>Stai per eliminare l'account</h3>,
          }[type]
        }
        <div className="PopUpCloser">
          <img src={closer} alt="Chiudi PopUp" />
        </div>
      </div>
    </div>
  );
}
