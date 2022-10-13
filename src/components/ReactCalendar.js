import React, { useState } from "react";
import Calendar from "react-calendar";
import notificationsDb from "../data/appointmentsDb";
//library npm react-calendar

const ReactCalendar = () => {
  const [value, onChange] = useState(new Date());
  const [notification, setNotification] = useState(notificationsDb);

  return (
    <>
      <div className="containerCalendarCard">
        <div className="calendarComponentContainer">
          <p id="firstP">Il tuo calendario</p>
          <div className="calendarDiv">
            <Calendar onChange={onChange} value={value} />
          </div>
          <p id="secondP">Appuntamenti in programma</p>

          {/* sezione notifica appuntamento-------------*/}

          <div className="containerAppuntamenti">
          {notification.map((element, id) => {
            return (
              <>
                <div
                  className="appuntamento"
                  key={id}
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
              </>
            );
          })}
          </div>

          {/* -------------------------------*/}
        </div>
      </div>
    </>
  );
};

export default ReactCalendar;
