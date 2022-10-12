import { useState } from "react";
import closer from "../assets/svg/xRemove.svg";
import Button from "./Button";

const PopUpAppointment = () => {
  return (
    <>
      <span className="PopUpTitle">Fissa un appuntamento</span>
      <form>
        <div className="formAppointRow">
          <div className="formAppointInput">
            <label htmlFor="date">Data</label>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="input-form-style"
            />
          </div>
          <div className="formAppointInput">
            <label htmlFor="time">Ora</label>
            <input type="time" className="input-form-style" />
          </div>
        </div>
        <div className="formAppointRow">
          <div className="formAppointInput">
            <label htmlFor="time">Note</label>
            <textarea type="time" className="input-form-style" />
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
  );
};

const PopUpDeleteAccount = () => {
  return (
    <>
      <span className="PopUpTitle">Elimina account</span>
      <div className="PopUpText">
        <p style={{ fontFamily: "DM Sans Bold" }}>
          Attenzione sei sicuro di voler eliminare il tuo account?
        </p>
        <p>
          {" "}
          Puoi prenderti una pausa e puoi <strong>nascondere</strong> il tuo
          profilo momentaneamente.{" "}
        </p>
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
  );
};

const PopUpDeactivateAccount = (handleChange) => {
  return (
    <>
      <span className="PopUpTitle">Nascondi profilo</span>
      <div className="PopUpText">
        <p style={{ fontFamily: "DM Sans Bold" }}>
          Hai già trovato un lavoro e non vuoi più ricevere nuove proposte?
        </p>
        <p>
          {" "}
          Nascondi il tuo profilo e riattivalo in un secondo momento in modo
          tale da non perdere i tuoi dati.{" "}
        </p>
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
          text={"NASCONDI PROFILO"}
          textColor={"rgb(54,71,100)"}
        />
      </div>
    </>
  );
};

const PopUpReactivateAccount = () => {
  return (
    <>
      <span className="PopUpTitle">Attiva profilo</span>
      <div className="PopUpText">
        <p style={{ fontFamily: "DM Sans Bold" }}>
          Sei in cerca di lavoro? Riattiva il tuo profilo!
        </p>
        <p>
          {" "}
          Mostra nuovamente il tuo profilo per essere disponibile nella ricerca
          del lavoro, potrai nasconderlo nuovamente se necessario.{" "}
        </p>
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
          text={"ATTIVA PROFILO"}
          textColor={"rgb(54,71,100)"}
        />
      </div>
    </>
  );
};

const PopUpRefuse = () => {
  return (
    <>
      <span className="PopUpTitle">Rifiuta appuntamento</span>
      <div className="PopUpText">
        <p style={{ fontFamily: "DM Sans Bold" }}>
          Sei sicuro di voler rifiutare?
        </p>
        <p> Chiedi invece di riprogrammare l'appuntamento! </p>
      </div>
      <form>
        <div className="formAppointRow">
          <div className="formAppointInput">
            <label htmlFor="date">Data</label>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="input-form-style"
            />
          </div>
          <div className="formAppointInput">
            <label htmlFor="time">Ora</label>
            <input type="time" className="input-form-style" />
          </div>
        </div>
        <div className="formAppointRow">
          <div className="formAppointInput">
            <label htmlFor="time">Note</label>
            <textarea type="time" className="input-form-style" />
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
          <Button
            submit
            type="submit"
            form="user-info"
            value="Submit"
            bgColor={"#fcf347"}
            wd={"100%"}
            hg={"3em"}
            text={"RIFIUTA"}
            textColor={"rgb(54,71,100)"}
          />
        </div>
      </form>
    </>
  );
};

export function PopUp({ type, handleChange }) {
  return (
    <div className="PopUpContainer">
      <div className="PopUp">
        {type === 1 && <PopUpAppointment />}
        {type === 2 && <PopUpDeleteAccount />}
        {type === 3 && <PopUpDeactivateAccount />}
        {type === 4 && <PopUpReactivateAccount />}
        {type === 5 && <PopUpRefuse />}
        <div className="PopUpCloser" onClick={handleChange}>
          <img src={closer} alt="Chiudi PopUp" />
        </div>
      </div>
    </div>
  );
}
