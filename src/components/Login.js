import {NavBar} from './NavBar'
import FormRow from './FormRow'



function Login () {
    return (
        <div>
            <NavBar back />
            <FormRow email text={'email'} />
        </div>
    )
}


export default Login