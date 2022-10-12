import notificationsDb from "../data/notificationsDb";
import { useState } from "react";
import { PopUp } from "../components/PopUp";

const AppNotifications = () => {
  // for the on click of the buttons
  const [notification, setNotification] = useState(notificationsDb);
  const [appointment, setAppointment] = useState([]);
  const [show, setShow] = useState(-1);
  const [popUpVisibility, setPopUpVisibility] = useState(false);
  const [popUpType, setPopUpType] = useState(0);
  const closePopUp = (type) => {
    setPopUpType(type);
    setPopUpVisibility(!popUpVisibility);
  };

  const acceptAppointment = (accepted, index, notificationId) => {
    setAppointment((prev) => {
      return [...prev, notification[index]];
    });
    declineAppointment(notificationId);
  };

  const buttonsShower = (id) => {
    if (show === id) {
      setShow(-1);
    } else {
      setShow(id);
    }
  };

  const declineAppointment = (id) => {
    setNotification(notification.filter((item) => item.id !== id));
  };

  return (
    <>
      {popUpVisibility ? (
        <PopUp
          type={popUpType}
          propFunction={declineAppointment}
          handleChange={closePopUp}
        />
      ) : (
        ""
      )}
      <div className="container13">
        <p id="firstP">Notifiche</p>

        {/* <Appointments /> */}

        <div className="containerAppuntamenti">
          {notification.map((element, id) => {
            return (
              <>
                <div
                  className="appuntamento"
                  key={id}
                  onClick={() => {
                    buttonsShower(id);
                  }}
                >
                  <div id="placeholderJob">
                    <img src={element.logo} id="foto-azienda" alt="azienda" />
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
                        closePopUp(5);
                      }}
                    >
                      RIFIUTA
                    </button>
                  </div>
                )}
              </>
            );
          })}
        </div>

        <p id="firstP">Prossimi appuntamenti</p>
        {/* sezione appuntamenti accettati */}
        <div className="containerAppuntamenti">
          {appointment.length > 0 ? (
            appointment.map((element, id) => {
              return (
                <div className="appuntamento" key={element.id}>
                  <div id="placeholderJob">
                    <img src={element.logo} id="foto-azienda" alt="azienda" />
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
