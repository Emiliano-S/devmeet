import Button from "../components/Button";
import {Link} from 'react-router-dom';


const SignUp = () => {
    return (
        <div className="signUp-container">
          {/* <NavBar back/> */}
          <div className="signUp-profile-choice">
            <div className="signUp-text">
                <h3>Scegli il profilo</h3>
            </div>
            <div className="signUp-buttons">
                <div className="signUp-button">
                <Link to='/signUp/regCompany'><Button lowOp text={'AZIENDA'} bgColor={'yellow'} textColor={'black'} wd={'266px'} hg={'50px'} wg={'bold'}/></Link>
                </div>
                <div className="signUp-button">
                <Link to='/signUp/regUser'><Button lowOp text={'PRIVATO'} bgColor={'#364764'} textColor={'white'} wd={'266px'} hg={'50px'} wg={'bold'}/></Link>
                </div>
            </div>
            <div className="signUp-already-signed">
                <p>Hai già un account? <Link to='/login'>Accedi</Link></p>
            </div>
          </div>
        </div>
    )
}



export default SignUp