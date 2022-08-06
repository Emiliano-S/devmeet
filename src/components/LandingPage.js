import devmeetLogo1 from "./assets/devmeet-logo1.svg"
import Button from "./Button"


const LandingPage = () => {
   

    return (
        <div className="landingPage">
            <div className="logo-and-login-container">
                <div className="landingPage-logo-container">
                   <img src={devmeetLogo1} alt="Logo devmeet" className="landingPage-logo"/>
                </div>
                <div className="landingPage-text">
                    <h3>Scopri nuovi talenti per la tua Azienda!</h3>
                </div>
                <div className="landingPage-login-buttons">
                    <div className="landingPage-login-button">
                        <Button lowOp text={"ACCEDI"} wd={"266px"} bgColor={'yellow'} textColor={'black'} wg={'bold'} hg={'50px'}/>
                    </div>
                    <div className="landingPage-login-button">
                        <Button selectButton text={"CREA ACCOUNT"} wd={'266px'} bgColor={'white'} textColor={'black'} wg={'bold'} hg={'50px'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}





export default LandingPage