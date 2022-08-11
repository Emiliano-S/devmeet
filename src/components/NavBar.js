import navBackArrow from "../assets/svg/backNav.svg"
import navOption from "../assets/svg/optionsNav.svg"
import navLogo from "../assets/img/logoNav.png";



export function NavBar(){
    return(
        <div className="NavBar">
            <div className="NavBarBackContainer">
                <img className="NavBarBackArrow" src={navBackArrow} alt="Go back!" />
            </div>
            <div className="NavBarLogoContainer">
                <img className="NavBarLogo" src={navLogo} alt="devmeet" />
            </div>
            <div className="NavBarOptionsContainer">
                <img className="NavBarOptions" src={navOption} alt="Options" />
            </div>
        </div>
    )
}