import devmeetLogo1 from "../assets/svg/devmeet-logo1.svg";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="logo-and-login-container">
        <div className="landingPage-logo-container">
          <img
            src={devmeetLogo1}
            alt="Logo devmeet"
            className="landingPage-logo"
          />
        </div>
        <div className="landingPage-text">
          <h3>Scopri nuovi talenti per la tua Azienda!</h3>
        </div>
        <div className="landingPage-login-buttons">
          <div className="landingPage-login-button">
            <Link to="/login">
              <Button
                lowOp
                text={"ACCEDI"}
                wd={"266px"}
                bgColor={"yellow"}
                textColor={"#364764"}
                wg={"bold"}
                hg={"50px"}
              />
            </Link>
          </div>
          <div className="landingPage-login-button">
            <Link to="/signUp">
              <Button
                lowOp
                text={"CREA ACCOUNT"}
                wd={"266px"}
                bgColor={"white"}
                textColor={"#364764"}
                wg={"bold"}
                hg={"50px"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
