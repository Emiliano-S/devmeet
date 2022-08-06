
export function NavBar(){
    return(
        <div className="NavBar">
            <div className="NavBarBackContainer">
                <img className="NavBarBackArrow" src="./img/backNav.svg" alt="Go back!" />
            </div>
            <div className="NavBarLogoContainer">
                <img className="NavBarLogo" src="./img/logoNav.png" alt="devmeet" />
            </div>
            <div className="NavBarOptionsContainer">
                <img className="NavBarOptions" src="./img/optionsNav.svg" alt="Options" />
            </div>
        </div>
    )
}