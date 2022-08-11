const Button = ({
  wd,
  bgColor,
  text,
  textColor,
  wg,
  hg,
  lowOp,
  selectButton,
  name,
}) => {
  // USARE lowOp PER I PULSANTI CHE FANNO CAMBIARE PAGINA
  // USARE selectButton PER I PULSANTI A SCELTA MULTIPLA (Da fixare)
  const handleButtonClick = (event) => {
    if (lowOp) {
      event.target.style.opacity = 0.5;
    } else if (selectButton) {
      event.target.style.backgroundColor = "yellow";
    }
  };

  return (
    // LO STILE DEL COMPONENT BUTTON VIENE GESTITO CON bgColor - wd - textColor - wg - hg
    // <Button text={''} textColor={''} bgColor={''} wd={''} hg={''} wg={''}/>
    <div>
      {lowOp && (
        <button
          onClick={handleButtonClick}
          style={{
            backgroundColor: bgColor,
            width: wd,
            color: textColor,
            fontWeight: wg,
            borderRadius: "6px",
            height: hg,
            border: "none",
            cursor: "pointer",
          }}
        >
          {text}
        </button>
      )}

      {/* Ogni selectButton dovrà avere un nome specifico !Importante!  */}
{/* <Button selectButton
                            name={''}
                            bgColor={''}
                            wd={''}
                            hg={''}
                            text={''} /> */}
      {selectButton && (
        <label class="container-radio-button">
        <input type="radio" name={name}/>
        <span class="checkmark-radio-button" style={{
           width: wd,
           borderRadius: "6px",
           height: hg,
           border: "none",
           cursor: "pointer",
        }}>{text}</span>
      </label>
      )}
    </div>
  );
};

export default Button;
