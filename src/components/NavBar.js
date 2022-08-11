export function NavBar({options, back}) {
    //INSERENDO options E back COME PROPS ALLA NAVBAR POSSIAMO AGGIUNGERE IL MENU OPZIONI E LA FRECCIA A SINISTRA
  return (
    <div className="NavBar">
      <div className="NavBarBackContainer">
       {back &&  <a href={back}><img
          className="NavBarBackArrow"
          src="./img/backNav.svg"
          alt="Go back!"
        /></a>}
      </div>
      <div className="NavBarLogoContainer">
        <img className="NavBarLogo" src="./img/logoNav.png" alt="devmeet" />
      </div>
      <div className="NavBarOptionsContainer">
        {options && <img
          className="NavBarOptions"
          src="./img/optionsNav.svg"
          alt="Options"
        />}
      </div>
    </div>
  );
}
