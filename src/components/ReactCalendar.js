import React, { useState } from "react";
import Calendar from "react-calendar";
import { NavBar } from "./NavBar";
//img delle notifiche
import google from './assets/calendarImages/google.png';
import meta from './assets/calendarImages/meta.png';


//library npm react-calendar

const ReactCalendar = () => {
    const [value, onChange] = useState(new Date());

    return (
        <>
        <NavBar back/>
        <div className="calendarComponentContainer">
            <p id="firstP">Il tuo calendario</p>
            <div className="calendarDiv">
                <Calendar onChange={onChange} value={value} />
            </div>
            <p id="secondP">Appuntamenti in programma</p>


{/* sezione notifiche-------------*/}    

            <div className="containerAppuntamenti">
                <div className="appuntamento1">
                    <div id="placeholderJob1">
                        <img src={google} id="azienda1" alt="azienda1"/>
                    </div>
                    <div className="texts">
                        <p><b>Meta</b></p>
                        <p style={{fontSize: 13}}>Mercoledi 13 Settembre - 11:30</p>
                    </div>
                </div>
                <div className="appuntamento2">
                    <div id="placeholderJob2">
                        <img src={meta} id="azienda2" alt="azienda2"/>
                    </div>
                    <div className="texts">
                        <p><b>Google</b></p>
                        <p style={{fontSize: 13}}>Venerdì 20 Novembre - 13:30</p>
                    </div>
                </div>
            </div>

{/* -------------------------------*/}
        </div>
        </>
    )
}


export default ReactCalendar;