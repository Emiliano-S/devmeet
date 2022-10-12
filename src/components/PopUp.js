import closer from "../assets/svg/xRemove.svg";
import Button from "./Button";

const PopUpAppointment = () =>{
  return(
    <>
    <span className="PopUpTitle">Fissa un appuntamento</span>
      <form>
        <div className="formAppointRow">
          <div className="formAppointInput">
            <label htmlFor="date">Data</label>
            <input type="date" min={new Date().toISOString().split("T")[0]} className="input-form-style"/>
          </div>
          <div className="formAppointInput">
            <label htmlFor="time">Ora</label>
            <input type="time" className="input-form-style"/>
          </div>
        </div>
        <div className="formAppointRow">
          <div className="formAppointInput">
            <label htmlFor="time">Note</label>
            <textarea type="time" className="input-form-style"/>
          </div>
        </div>
        <div className="formAppointRow">
          <Button
                  submit
                  type="submit"
                  form="user-info"
                  value="Submit"
                  bgColor={"#fcf347"}
                  wd={"100%"}
                  hg={"3em"}
                  text={"INVIA"}
                  textColor={"rgb(54,71,100)"}
                />
        </div>
      </form>
    </>
  )
}

const PopUpDeleteAccount = () =>{
  return(
    <>
    <span className="PopUpTitle">Elimina account</span>
     <div className="PopUpText">
      <p style={{fontFamily: 'DM Sans Bold'}}>Attenzione sei sicuro di voler eliminare il tuo account?</p>
      <p> Puoi prenderti una pausa e puoi <strong>nascondere</strong> il tuo profilo momentaneamente. </p>
     </div>
     <div className="PopUpText">
        <Button
            submit
            type="submit"
            form="user-info"
            value="Submit"
            bgColor={"#fcf347"}
            wd={"100%"}
            hg={"3em"}
            text={"ELIMINA ACCOUNT"}
            textColor={"rgb(54,71,100)"}
          />
     </div>
    </>
  )
}

const PopUpDeactivateAccount = () =>{
  return(
    <>
    <span className="PopUpTitle">Nascondi profilo</span>
     <div className="PopUpText">
      <p style={{fontFamily: 'DM Sans Bold'}}>Hai già trovato un lavoro e non vuoi più ricevere nuove proposte?</p>
      <p> Nascondi il tuo profilo e riattivalo in un secondo memento in modo tale da non perdere i tuoi dati. </p>
     </div>
     <div className="PopUpText">
        <Button
            submit
            type="submit"
            form="user-info"
            value="Submit"
            bgColor={"#fcf347"}
            wd={"100%"}
            hg={"3em"}
            text={"ELIMINA ACCOUNT"}
            textColor={"rgb(54,71,100)"}
          />
     </div>
    </>
  )
}

export function PopUp({ type, handleChange }) {
  return (
    <div className="PopUpContainer">
      <div className="PopUp">
        {type === 1 && <PopUpAppointment />}
        {type === 2 && <PopUpDeleteAccount />}
        {type === 3 && <PopUpDeactivateAccount />}
        <div className="PopUpCloser" onClick={handleChange}>
          <img src={closer} alt="Chiudi PopUp" />
        </div>
      </div>
    </div>
  );
}
