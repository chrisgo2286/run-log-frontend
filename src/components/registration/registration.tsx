import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../misc/context';
import { registerNewUser } from '../../misc/apiCalls';
import { updateLocalStorage } from '../../misc/userFunctions';
import { updateUser } from '../../misc/userFunctions';
import { loginUser } from '../../misc/apiCalls';
import { ResponseType } from '../../misc/miscTypes';
import NewUserFields from './newUserFields';
import { RegistrationProps } from './registrationTypes';
import './registration.css';
import { validateRegistrationFields } from './registrationValidation';
import { Validation } from '../validation/validation';

export default function Registration (): JSX.Element {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState<RegistrationProps>({
        username: '',
        password1: '',
        password2: '',
    })
    const [errors, setErrors] = useState<string[]>([])

    async function handleSubmit (): Promise<void>{
        const result = validateRegistrationFields(credentials)

        if(result === 'Valid') {
            const response = await registerNewUser(credentials);            
            if(response.status === 201) {
                handleValidRegistrationResponse(response.data.key)
            } else if(response.status === 204) {
                handleUserLogin()
            }
        } else {
            setErrors(result)
        } 
    }

    function handleValidRegistrationResponse(token:string): void {
        updateLocalStorage(token, credentials.username)
        updateUser(token, credentials.username, user, setUser)
        navigate('/');
    }

    async function handleUserLogin (): Promise<void> {
        const response = await requestLogin()
        if (typeof response === "string") {
            console.log(response)
        } else if (response.status === 200) {
            handleValidLoginResponse(response.token)
        }
    }

    async function requestLogin (): Promise<ResponseType | string> {
        const loginCredentials = {
            username: credentials.username,
            password: credentials.password1
        }
        return await loginUser(loginCredentials);
    }

    function handleValidLoginResponse(token:string): void {
        updateLocalStorage(token, credentials.username);
        updateUser(token, credentials.username, user, setUser);
        navigate('/');
    }

    return (
        <main className="registration-page">
            <div className="registration" data-cy='registration'>
                <div 
                    className="registration-header" 
                    data-cy="registration-header">
                    Registration
                </div>
                <NewUserFields 
                    fields={ credentials } 
                    setFields={ setCredentials }
                    handleSubmit={ handleSubmit }/>
                <Validation errors={ errors } className={ "h-5" } />
            </div>
        </main>
        
    )
}