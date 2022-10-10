import {NavBar} from '../components/NavBar'
import FormRow from '../components/FormRow'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { useState } from 'react'
import axios from 'axios'



function Login ({registration, user, setLogOutUser}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const login = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:5000/api/auth/login", {
            email,
            password
        }).then((response) => {
            console.log("response", response);
            localStorage.setItem("login", JSON.stringify({
                userLogin: true,
                token: response.data.access_token
            }))
            setError("");
            setEmail("");
            setPassword("");
            setLogOutUser(false);
        }).catch(error => setError(error.response.data.message));
    }

    return (
        <div style={{width: '100%', height: '100%'}}>
            {/* <NavBar back /> */}
            <div className="form-container" >
                {error && <p style={{color: "red"}}>{error}</p>}
            <form id='login-form' onSubmit={login}>
            <FormRow email text={'Email'} value={email} handleChange={(e) => setEmail(e.target.value) }/>
            <FormRow password text={'Password'} value={password} handleChange={(e) => setPassword(e.target.value)}/>
             {!registration && (<div className="pass-forgot">
                <a href='#'>Password dimenticata?</a>
             </div>)}
             {!registration && (
                <div className ='registration-container'>
                <Button submit
                name={'SubmitLogin'}
                bgColor={'yellow'}
                wd={'266px'}
                hg={'50px'}
                text={'ACCEDI'}
                wg={'bold'} />
                <div className='text-login-registration'>
                    <p>Sei un nuovo utente? <Link to='/signUp'>Crea un nuovo account</Link></p>
                </div>
                </div>
             )}
             {registration && user &&  (
                <div className ='registration-container'>
                    <Link to='/signUp/user'><Button submit
                    name={'SubmitRegister'}
                    bgColor={'yellow'}
                    wd={'266px'}
                    hg={'50px'}
                    text={'CONTINUA'}
                    wg={'bold'} /> </Link>
                    </div>
             )}
             {registration && !user &&  (
                <div className ='registration-container'>
                    <Link to='/signUp/company'><Button submit
                    name={'SubmitRegister'}
                    bgColor={'yellow'}
                    wd={'266px'}
                    hg={'50px'}
                    text={'CONTINUA'}
                    wg={'bold'} /> </Link>
                    </div>
             )}
            </form>
            </div>
        </div>
    )
}


export default Login