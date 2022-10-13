import Button from "./Button"
import { NavBar } from "./NavBar"


const SignUp = () => {
    return (
        <div className="signUp-container">
          <NavBar back/>
          <div className="signUp-profile-choice">
            <div className="signUp-text">
                <h3>Scegli il profilo</h3>
            </div>
            <div className="signUp-buttons">
                <div className="signUp-button">
                <Button lowOp text={'AZIENDA'} bgColor={'yellow'} textColor={'#364764'} wd={'266px'} hg={'50px'} wg={'bold'}/>
                </div>
                <div className="signUp-button">
                <Button lowOp text={'PRIVATO'} bgColor={'black'} textColor={'white'} wd={'266px'} hg={'50px'} wg={'bold'}/>
                </div>
            </div>
            <div className="signUp-already-signed">
                <p>Hai già un account? <a href={'www.google.com'}>Accedi</a></p>
            </div>
          </div>
        </div>
    )
}



export default SignUp