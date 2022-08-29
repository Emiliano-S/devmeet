import navBackArrow from "../assets/svg/backNav.svg";
import navOption from "../assets/svg/optionsNav.svg";
import navLogo from "../assets/img/logoNav.png";
import {useNavigate} from 'react-router-dom';


export function NavBar({options, back}) {
  const navigate = useNavigate();

    //INSERENDO options E back COME PROPS ALLA NAVBAR POSSIAMO AGGIUNGERE IL MENU OPZIONI E LA FRECCIA A SINISTRA
  return (
    <div className="NavBar">
      <div className="NavBarBackContainer">
       {back &&  <button onClick={() => navigate(-1, {replace:true})} style={{border:'none', backgroundColor:'Transparent', cursor:'pointer', backgroundRepeat: 'no-repeat'}}><img
          className="NavBarBackArrow"
          src={navBackArrow}
          alt="Go back!"
        /></button>}
      </div>
      <div className="NavBarLogoContainer">
        <img className="NavBarLogo" src={navLogo} alt="devmeet" />
      </div>
      <div className="NavBarOptionsContainer">
        {options && <img
          className="NavBarOptions"
          src={navOption}
          alt="Options"
        />}
      </div>
    </div>
  );
}
