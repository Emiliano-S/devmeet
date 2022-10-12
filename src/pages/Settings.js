import { useState } from "react";
import Button from "../components/Button";
import { PopUp } from "../components/PopUp";
import SettingsRow from "../components/SettingsRow";
import UploadButton from "../components/UploadButton";


const Settings = () => {
  const [popUpVisibility, setPopUpVisibility] = useState(false);
  const [popUpType, setPopUpType] = useState(0);
  const [buttonTextVisibility, setButtontextVisibility] = useState('Nascondi profilo');

  const closePopUp = (type) =>{
    setPopUpType(type)
    setPopUpVisibility(!popUpVisibility);
  }

  const changeText = () =>{
      if(buttonTextVisibility === "Nascondi profilo"){
        setButtontextVisibility("Mostra profilo");
        closePopUp(3);
      }else{
        setButtontextVisibility("Nascondi profilo")
        closePopUp(4);
      }
  }

  return (
    <>
    {popUpVisibility  ?  <PopUp type={popUpType} handleChange={closePopUp} /> : ""}
      <div className="form-container">
        <div className="form-title-style">Notifiche</div>
        <div className="settings-container">
          <Button selectButton name={"News"} bgColor={"white"} wd={"100"} hg={"40px"} text={"Email"} />
          <Button selectButton name={"News"} bgColor={"white"} wd={"100"} hg={"40px"} text={"Notifiche Push"} />
          <Button selectButton name={"News"} bgColor={"white"} wd={"100"} hg={"40px"} text={"SMS"} /> 
        </div>
        <div className="form-title-style">Aiuto e assistenza</div>
        <SettingsRow 
        text = {"Aiuto e Assistenza"}
        id =  "Help"
        name = "Help"
        link = "/"
        />
        <div className="form-title-style">Sicurezza</div>
        <SettingsRow 
        text = {"Linee Guida"}
        id =  "Linee-Guida"
        name = "Linee-Guida"
        link = "/"
        />
        <SettingsRow 
        text = {"Sicurezza e termini d'uso"}
        id =  "Sicurezza"
        name = "Sicurezza"
        link = "/"
        />
        <SettingsRow 
        text = {"Consigli per la sicurezza"}
        id =  "Consigli"
        name = "Consigli"
        link = "/"
        />
        <div className="form-title-style">Cookie Policy e Privacy</div>
        <SettingsRow 
        text = {"Impostazioni Privacy"}
        id =  "Privacy"
        name = "Privacy"
        link = "/"
        />
        <SettingsRow 
        text = {"Condizioni di utilizzo"}
        id =  "Condizioni"
        name = "Condizioni"
        link = "/"
        />
        <UploadButton 
        profile
                          bgColor= {'#364764'}
                          text= {'NASCONDI PROFILO'}
                          textColor = {'white'}
                          textClicked ={'ATTIVA PROFILO'}
                          wg = {'semibold'} />
                          <div style={{width: "100%", display:"flex", justifyContent:"center", paddingTop:"20px"}}>
      <button onClick={changeText}>{buttonTextVisibility}</button>
      <Button submit text={'ELIMINA ACCOUNT'} textColor={'black'} bgColor={'yellow'} wd={'266px'} hg={'50px'} wg={'bold'} onClickFunction={()=>{closePopUp(2)}}/>
                          </div>

      </div>
    </>
  );
};

export default Settings;
