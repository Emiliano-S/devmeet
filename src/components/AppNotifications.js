import { NavBar } from "./NavBar";
import notificationsDb from "../data/notificationsDb";
import { useState, useEffect } from "react";
import AppointmentButtons from "./AppointmentButtons";


const AppNotifications = () => {
// for the on click of the buttons
    const [addApp1, setAddApp1] = useState(notificationsDb[0]);
    const [addApp2, setAddApp2] = useState(notificationsDb[1]);

        const appAdder1 = (event) => {
            setAddApp1(addApp1 => {
                return {...addApp1, accepted : !addApp1.accepted }
            })
        }
        

        const appAdder2 = (event) => {
            setAddApp2((addApp2) => {
                return {...addApp2, accepted : true}
            })
        }

// buttons appear
    const [showButtons1, setShowButtons1] = useState(false);
    const [showButtons2, setShowButtons2] = useState(false);
    

    const buttonsShower1 = (event) => {
        setShowButtons1(!showButtons1)
    }

    const buttonsShower2 = (event) => {
        setShowButtons2(!showButtons2)
    }
// end buttons part


    return (
        <>
            <div className="container13">
                <NavBar back/>
                <p id="firstP">Notifiche</p>
                {/* <Appointments /> */}


            <div className="containerAppuntamenti">
                <div className="appuntamento" key={addApp1.id} onClick={buttonsShower1}>
                    <div id="placeholderJob">
                        <img src={addApp1.logo} id="foto-azienda" alt="azienda"/>
                    </div>
                    <div className="texts">
                        <p><b>{addApp1.name}</b></p>
                        <p style={{fontSize: 13}}>{addApp1.appointment}</p>
                    </div>
                </div>
                    {showButtons1 && <AppointmentButtons appAdder1={appAdder1} />}
                <div className="appuntamento" key={addApp2.id} onClick={buttonsShower2}>
                    <div id="placeholderJob">
                        <img src={addApp2.logo} id="foto-azienda" alt="azienda"/>
                    </div>
                    <div className="texts">
                        <p><b>{addApp2.name}</b></p>
                        <p style={{fontSize: 13}}>{addApp2.appointment}</p>
                    </div>
                </div>
                    {showButtons2 && <AppointmentButtons appAdder2={appAdder2}/>}
            </div>

                <p id="firstP">Prossimi appuntamenti</p>
                {/* sezione appuntamenti accettati */}

                <div className="containerAppuntamenti">
                    {addApp1.accepted && <div className="appuntamento" key={addApp1.id} >
                            <div id="placeholderJob">
                                <img src={addApp1.logo} id="foto-azienda" alt="azienda"/>
                            </div>
                            <div className="texts">
                                <p><b>{addApp1.name}</b></p>
                                <p style={{fontSize: 13}}>{addApp1.appointment}</p>
                            </div>
                    </div>}
                    {addApp2.accepted && <div className="appuntamento" key={addApp2.id} >
                            <div id="placeholderJob">
                                <img src={addApp2.logo} id="foto-azienda" alt="azienda"/>
                            </div>
                            <div className="texts">
                                <p><b>{addApp2.name}</b></p>
                                <p style={{fontSize: 13}}>{addApp2.appointment}</p>
                            </div>
                    </div>}
                </div>
            </div>
        </>
    );
}

export default AppNotifications;


