import navBackArrow from "../assets/svg/backNav.svg"
import navOption from "../assets/svg/optionsNav.svg"
import navLogo from "../assets/img/logoNav.png";


export function NavBar({options, back}) {
    //INSERENDO options E back COME PROPS ALLA NAVBAR POSSIAMO AGGIUNGERE IL MENU OPZIONI E LA FRECCIA A SINISTRA
  return (
    <div className="NavBar">
      <div className="NavBarBackContainer">
       {back &&  <a href={back}><img
          className="NavBarBackArrow"
          src={navBackArrow}
          alt="Go back!"
        /></a>}
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
