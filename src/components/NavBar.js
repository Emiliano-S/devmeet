import navBackArrow from "../assets/svg/backNav.svg";
import navBackArrowWhite from "../assets/svg/backNavWhite.svg";
import navOption from "../assets/svg/optionsNav.svg";
import navLogo from "../assets/img/logoNav.png";
import navLogoWhite from "../assets/svg/logoNav.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export function NavBar({ options, back }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [bgColor, setBgColor] = useState("transparent");
  const [logo, setLogo] = useState(navLogo);
  const [backFill, setBackFill] = useState(navBackArrow);

  useEffect(() => {
    if (location.pathname == "/ProfileSettings") {
      setBgColor("#364764");
      setLogo(navLogoWhite);
      setBackFill(navBackArrowWhite);
    }
  }, [location]);

  //INSERENDO options E back COME PROPS ALLA NAVBAR POSSIAMO AGGIUNGERE IL MENU OPZIONI E LA FRECCIA A SINISTRA
  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className="NavBar" style={{ backgroundColor: `${bgColor}` }}>
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
      <div className="NavBarLogoContainer">
        <img className="NavBarLogo" src={logo} alt="devmeet" />
      </div>
      <div className="NavBarOptionsContainer">
        {options && (
          <img className="NavBarOptions" src={navOption} alt="Options" />
        )}
      </div>
    </div>
  );
}
