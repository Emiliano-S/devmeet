import { NavBar } from "./NavBar";
import notificationsDb from "../data/notificationsDb";
import { useState } from "react";

const AppNotifications = () => {
// for the on click of the buttons
    const [notification, setNotification] = useState(notificationsDb);
    const [appointment, setAppointment] = useState([]);
    const [show, setShow] = useState(false)

    const acceptAppointment = (accepted, index, notificationId) => {
        setAppointment(prev => {
            return [...prev, notification[index]]
        })
        declineAppointment(notificationId);
    }

    const buttonsShower = (id) => {
        setShow(!show);
    }

    const declineAppointment = (id) =>{
        setNotification(notification.filter(item => item.id !== id));
    }

    return (
        <>
            <div className="container13">
                <NavBar back/>
                <p id="firstP">Notifiche</p>
                                   
                {/* <Appointments /> */}

            <div className="containerAppuntamenti">
                {notification.map((element, index) =>{
                    return(
                        <>
                             <div className="appuntamento" key={index} onClick={() => {buttonsShower(index)}}>
                                <div id="placeholderJob">
                                    <img src={element.logo} id="foto-azienda" alt="azienda"/>
                                </div>
                                <div className="texts">
                                    <p><b>{element.name}</b></p>
                                    <p style={{fontSize: 13}}>{element.appointment}</p>
                                </div>
                            </div>
                            {show &&
                                <div className="appuntamentiButtons" style={{display: 'flex', width: '70%',  gap: '10px'}}>
                                    <button
                                    style={{
                                    backgroundColor: "yellow",
                                    width: "50%",
                                    color: "rgb(54, 71, 100)",
                                    borderRadius: "6px",
                                    height: "3rem",
                                    border: "none",
                                    cursor: "pointer",
                                    }}
                                    onClick={() => {acceptAppointment(true, index, element.id)}}
                                    >
                                    ACCETTA
                                    </button>
                                    <button
                                    style={{
                                    backgroundColor: "#364764",
                                    width: "50%",
                                    color: "#ffff",
                                    borderRadius: "6px",
                                    height: "3rem",
                                    border: "none",
                                    cursor: "pointer",
                                    }}
                                    onClick={() => {declineAppointment(element.id)}}
                                    >
                                    RIFIUTA
                                    </button>
                                </div>
                            }
                        </>
                )})}
            </div>

                <p id="firstP">Prossimi appuntamenti</p>
                {/* sezione appuntamenti accettati */}
                <div className="containerAppuntamenti">
                        {appointment.length > 0 ? appointment.map((element,id) =>{
                            return(
                                <div className="appuntamento" key={element.id} >
                                        <div id="placeholderJob">
                                            <img src={element.logo} id="foto-azienda" alt="azienda"/>
                                        </div>
                                        <div className="texts">
                                            <p><b>{element.name}</b></p>
                                            <p style={{fontSize: 13}}>{element.appointment}</p>
                                        </div>
                                </div>
                            )
                        }): <p style={{color:'#000'}}>Non ci sono appuntamenti</p>}
                </div>
            </div>
        </>
    );
}

export default AppNotifications;


