import notificationsDb from "../data/notificationsDb";
import { useState } from "react";
import { PopUp } from "../components/PopUp";
import { useRef } from "react";
import { useEffect } from "react";
import Emiliano from '../components/assets/calendarImages/Emiliano.jpg';

const AppNotifications = () => {
  // for the on click of the buttons
  const [notification, setNotification] = useState(notificationsDb);
  const [appointment, setAppointment] = useState([{
    id: 1,
    logo: Emiliano,
    name: "Emiliano Gabriele Scanga",
    appointment: "Lunedi 17 Ottobre - Ore 18:00",
    held: false,
    accepted: false,
    declined: false,
}]);
  const [show, setShow] = useState(-1);
  const [popUpVisibility, setPopUpVisibility] = useState(false);
  const [popUpType, setPopUpType] = useState(0);
  const elementRef = useRef([]);

  const closePopUp = (type) => {
    setPopUpType(type);
    setPopUpVisibility(!popUpVisibility);
  };

  const acceptAppointment = (accepted, id, notificationId) => {
    elementRef.current[id].className += ` accepted`;
    const remove = setTimeout(() => {
      setNotification(notification.filter((item, index) => index !== id));
      setAppointment((prev) => {
        return [...prev, notification[id]];
      });
      clearTimeout(remove);
    }, 1400);
    setShow(-1);
  };

  const buttonsShower = (id) => {
    if (show === id) {
      setShow(-1);
    } else {
      setShow(id);
    }
  };

  useEffect(() =>{console.log(elementRef);})

  const declineAppointment = (id) => {
    elementRef.current[id].className += ` removed`;
    const remove = setTimeout(() => {
      setNotification(notification.filter((item, index) => index !== id));
      clearTimeout(remove);
    }, 1300);
    setShow(-1);
  };

  return (
    <>
      {popUpVisibility ? (
        <PopUp
          type={popUpType}
          handleChange={closePopUp}
        />
      ) : (
        ""
      )}
      <div className="container13">
        <p id="firstP">Notifiche</p>

        {/* <Appointments /> */}

        <div className="containerAppuntamenti">
          {notification.length > 0 ? (
            notification.map((element, id) => {
            return (
              <>
                <div
                  className="appuntamento"
                  key={element.name}
                  onClick={() => {
                    buttonsShower(id);
                  }}
                  ref={(refElement) => {
                    elementRef.current[id] = refElement;
                  }}
                >
                  <div id="placeholderJob" style={{backgroundImage: `url(${element.logo})`, backgroundSize: "cover", }}>
                  </div>
                  <div className="texts">
                    <p>
                      <b>{element.name}</b>
                    </p>
                    <p style={{ fontSize: 13 }}>{element.appointment}</p>
                  </div>
                </div>
                {show === id && (
                  <div
                    className="appuntamentiButtons"
                    style={{ display: "flex", width: "70%", gap: "10px" }}
                  >
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
                      onClick={() => {
                        acceptAppointment(true, id, element.id);
                      }}
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
                      onClick={() => {
                        declineAppointment(id);
                      }}
                    >
                      RIFIUTA
                    </button>
                  </div>
                )}
              </>
            );
          })): (<p style={{ color: "#000" }}>Non ci sono appuntamenti</p>)}
        </div>

        <p id="firstP">Prossimi appuntamenti</p>
        {/* sezione appuntamenti accettati */}
        <div className="containerAppuntamenti">
          {appointment.length > 0 ? (
            appointment.map((element, id) => {
              return (
                <div className="appuntamento goIn" key={element.id}>
                  <div id="placeholderJob" style={{backgroundImage: `url(${element.logo})`, backgroundSize: "cover", }}>

                  </div>
                  <div className="texts">
                    <p>
                      <b>{element.name}</b>
                    </p>
                    <p style={{ fontSize: 13 }}>{element.appointment}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p style={{ color: "#000" }}>Non ci sono appuntamenti</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AppNotifications;
