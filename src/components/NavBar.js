import navBackArrow from "../assets/svg/backNav.svg";
import navBackArrowWhite from "../assets/svg/backNavWhite.svg";
import navOption from "../assets/svg/optionsNav.svg";
import remove from "../assets/svg/xRemoveWhite.svg";
import navOptionWhite from "../assets/svg/navOptionWhite.svg";
import navLogo from "../assets/img/logoNavFix.png";
import navLogoWhite from "../assets/svg/logoNav.svg";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import devmeet from "../assets/img/userPicture/devmeet.png";

export function NavBar({ options, back }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [bgColor, setBgColor] = useState("transparent");
  const [logo, setLogo] = useState(navLogo);
  const [backFill, setBackFill] = useState(navBackArrow);
  const [optFill, setOptFill] = useState(navOption);
  const [profile, setProfile] = useState(false);
  useEffect(() => {
    if (location.pathname === "/ProfileSettings") {
      setBgColor("#364764");
      setLogo(navLogoWhite);
      setBackFill(navBackArrowWhite);
      setOptFill(navOptionWhite);
      setProfile(false);
    } else if (location.pathname === "/settings") {
      setBgColor("#364764");
      setLogo(navLogoWhite);
      setBackFill(navBackArrowWhite);
      setOptFill(remove);
      setProfile(false);
    } else if (location.pathname === "/card") {
      setBgColor("white");
      setLogo(navLogo);
      setBackFill(navBackArrow);
      setOptFill(navOption);
      setProfile(true);
    } else if (
      location.pathname === "/signUp" ||
      location.pathname === "/login" ||
      location.pathname === "/signUp/company" ||
      location.pathname === "/signUp/user" ||
      location.pathname === "/signUp/regUser" ||
      location.pathname === "/signUp/regCompany" ||
      location.pathname === "/singUp/regUser/skills" ||
      location.pathname === "/singUp/regUser/workExperiences" ||
      location.pathname === "/singUp/regUser/linksLanguages" ||
      location.pathname === "/signUp/regUser/addPhoto" ||
      location.pathname === "/signUp/regCompany/addLogo"
    ) {
      setBgColor("White");
      setLogo(navLogo);
      setBackFill(navBackArrow);
      setOptFill(null);
      setProfile(false);
    } else {
      setBgColor("White");
      setLogo(navLogo);
      setBackFill(navBackArrow);
      setOptFill(navOption);
      setProfile(false);
    }
  }, [location]);

  //INSERENDO options E back COME PROPS ALLA NAVBAR POSSIAMO AGGIUNGERE IL MENU OPZIONI E LA FRECCIA A SINISTRA
  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className="NavBar" style={{ backgroundColor: `${bgColor}` }}>
      {profile && (
        <div className="ProfileImage">
          <Link to="/profilesettings">
            <img
              src={devmeet}
              // src={user_picture}
              style={{
                height: "24px",
                width: "24px",
                borderRadius: "50%",
              }}
              alt="Profile"
            />
          </Link>
        </div>
      )}
      {!profile && (
        <div className="NavBarBackContainer">
          {back && (
            <button
              onClick={() => navigate(-1, { replace: true })}
              style={{
                border: "none",
                backgroundColor: `${bgColor}`,
                cursor: "pointer",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img className="NavBarBackArrow" src={backFill} alt="Go back!" />
            </button>
          )}
        </div>
      )}
      <div className="NavBarLogoContainer">
        <img className="NavBarLogo" src={logo} alt="devmeet" />
      </div>
      <div className="NavBarOptionsContainer">
        {options && (
          <>
            <button
              onClick={() => {
                if (location.pathname === "/settings") {
                  navigate(-1, { replace: true });
                  console.log("ciao");
                } else {
                  navigate("/settings", { replace: false });
                }
              }}
              style={{
                border: "none",
                backgroundColor: "Transparent",
                cursor: "pointer",
                backgroundRepeat: "no-repeat",
              }}
            >
              {optFill !== null && (
                <>
                  <img className="NavBarOptions" src={optFill} alt="Options" />{" "}
                </>
              )}
            </button>{" "}
          </>
        )}
        {/* {options && (
          <img className="NavBarOptions" src={navOption} alt="Options" />
        )} */}
      </div>
    </div>
  );
}
