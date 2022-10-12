import React, { useState } from "react";
import Calendar from "react-calendar";
import notificationsDb from "../data/notificationsDb";
//library npm react-calendar

const ReactCalendar = () => {
  const [value, onChange] = useState(new Date());

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
            <div className="appuntamento" key={notificationsDb[0].id}>
              <div id="placeholderJob">
                <img
                  src={notificationsDb[0].logo}
                  id="foto-azienda"
                  alt="azienda"
                />
              </div>
              <div className="texts">
                <p>
                  <b>{notificationsDb[0].name}</b>
                </p>
                <p style={{ fontSize: 13 }}>{notificationsDb[0].appointment}</p>
              </div>
            </div>

            <div className="appuntamento" key={notificationsDb[1].id}>
              <div id="placeholderJob">
                <img
                  src={notificationsDb[1].logo}
                  id="foto-azienda"
                  alt="azienda"
                />
              </div>
              <div className="texts">
                <p>
                  <b>{notificationsDb[1].name}</b>
                </p>
                <p style={{ fontSize: 13 }}>{notificationsDb[1].appointment}</p>
              </div>
            </div>
          </div>

          {/* -------------------------------*/}
        </div>
      </div>
    </>
  );
};

export default ReactCalendar;
