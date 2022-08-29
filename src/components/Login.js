import {NavBar} from './NavBar'
import FormRow from './FormRow'
import { Link } from 'react-router-dom'
import Button from './Button'



function Login ({registration, user}) {
    return (
        <div style={{width: '100%', height: '100%'}}>
            <NavBar back />
            <div className="form-container" >
            <form id='login-form'>
            <FormRow email text={'Email'} />
            <FormRow password text={'Password'}/>
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