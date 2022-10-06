import IconCalendar from "../assets/svg/navBottomCalendar.svg";
import IconFilter from "../assets/svg/navBottomFilter.svg";
import IconHome from "../assets/svg/navBottomHome.svg";
import IconNotifications from "../assets/svg/navBottomNotifications.svg";
import IconButtonAppointment from "../assets/svg/navBottomAppointment.svg";

import IconCalendarBlu from "../assets/svg/navBottomCalendarB.svg";
import IconFilterBlu from "../assets/svg/navBottomFilterB.svg";
import IconHomeBlu from "../assets/svg/navBottomHomeB.svg";
import IconNotificationsBlu from "../assets/svg/navBottomNotificationsB.svg";

import { Link, useLocation } from "react-router-dom";

export function NavBarBottom() {
  const location = useLocation();

  return (
    <div className="navBarBottomContainer">
      <div className="buttonAppointment">
        <img src={IconButtonAppointment} alt="Fissa appuntamento" />
      </div>
      <div className="navBarBottom">
        <div className="navBarBottomButtons">
          <Link to="/card">
            <div
              className={`navBarBottomButtonsActive ${
                location.pathname === "/card" ? " active" : ""
              }`}
            >
              <img
                src={location.pathname === "/card" ? IconHomeBlu : IconHome}
                alt="Ritorna alla home"
              />
              <span>home</span>
            </div>
          </Link>
        </div>
        <div className="navBarBottomButtons">
          <Link to="/filterBy">
            <div
              className={`navBarBottomButtonsActive ${
                location.pathname === "/filterBy" ? " active" : ""
              }`}
            >
              <img
                src={
                  location.pathname === "/filterBy" ? IconFilterBlu : IconFilter
                }
                alt="Filtra le tue ricerche"
              />
              <span>filtra</span>
            </div>
          </Link>
        </div>

        {/* Questo div serve per lo spazio nel mezzo */}
        <div className="navBarBottomButtons"></div>

        <div className="navBarBottomButtons">
          <Link to="/notifiche">
            <div
              className={`navBarBottomButtonsActive ${
                location.pathname === "/notifiche" ? " active" : ""
              }`}
            >
              <img
                src={
                  location.pathname === "/notifiche"
                    ? IconNotificationsBlu
                    : IconNotifications
                }
                alt="Le tue notifiche"
              />
              <span>notifiche</span>
            </div>
          </Link>
        </div>
        <div className="navBarBottomButtons">
          <Link to="/calendar">
            <div
              className={`navBarBottomButtonsActive ${
                location.pathname === "/calendar" ? " active" : ""
              }`}
            >
              <img
                src={
                  location.pathname === "/calendar"
                    ? IconCalendarBlu
                    : IconCalendar
                }
                alt="Le tue notifiche"
              />
              <span>calendario</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
