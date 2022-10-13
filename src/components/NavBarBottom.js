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
import { PopUp } from "./PopUp";
import { useState } from "react";
import { useSelector } from "react-redux";

export function NavBarBottom() {
  const location = useLocation();
  const arrLocationWithoutBottomNav = [
    "/",
    "/signUp",
    "/login",
    "/signUp/regUser",
    "/signUp/user",
    "/singUp/regUser/skills",
    "/singUp/regUser/workExperiences",
    "/singUp/regUser/linksLanguages",
    "/signUp/regUser/addPhoto",
    "/settings",
  ];
   const notificationsAmount = useSelector(
     (state) => state.appointments[0].notifications.length
   );
  const [popUpVisibility, setPopUpVisibility] = useState(false);

  const closePopUp = () => {
    setPopUpVisibility(!popUpVisibility);
  };

  return (
    <>
      {popUpVisibility && location.pathname === "/card" ? (
        <PopUp type={1} handleChange={closePopUp} />
      ) : (
        ""
      )}
      {!arrLocationWithoutBottomNav.find(
        (element) => element === location.pathname
      ) ? (
        <div className="navBarBottomContainer">
          <div className="buttonAppointment" onClick={closePopUp}>
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
                      location.pathname === "/filterBy"
                        ? IconFilterBlu
                        : IconFilter
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
                  {notificationsAmount > 0 && (
                    <span className="notificationNumber">
                      {notificationsAmount}
                    </span>
                  )}
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
      ) : null}
    </>
  );
}
