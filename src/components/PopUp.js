import closer from "../assets/svg/xRemove.svg";
import Button from "./Button";

const PopUpAppointment = () =>{
  return(
    <>
    <span className="PopUpTitle">Fissa un appuntamento</span>
      <form>
        <div className="formAppointRow">
          <div className="formAppointInput">
            <label for="date">Data</label>
            <input type="date" min={new Date().toISOString().split("T")[0]} className="input-form-style"/>
          </div>
          <div className="formAppointInput">
            <label for="time">Ora</label>
            <input type="time" className="input-form-style"/>
          </div>
        </div>
        <div className="formAppointRow">
          <div className="formAppointInput">
            <label for="time">Note</label>
            <textarea type="time" className="input-form-style"/>
          </div>
        </div>
        <div className="formAppointRow">
          <Button
                  submit
                  type="submit"
                  form="user-info"
                  value="Submit"
                  bgColor={"yellow"}
                  wd={"100%"}
                  hg={"3em"}
                  text={"CONTINUA"}
                  textColor={"rgb(54,71,100)"}
                />
        </div>
      </form>
    </>
  )
}

const PopUpDeleteAccount = () =>{
  return(
    <></>
  )
}

const PopUpDeactivateAccount = () =>{
  return(
    <></>
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
