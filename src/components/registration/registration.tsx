import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../misc/context';
import { registerNewUser } from '../../misc/apiCalls';
import { updateLocalStorage } from '../../misc/userFunctions';
import { updateUser } from '../../misc/userFunctions';
import { loginUser } from '../../misc/apiCalls';
import NewUserFields from './newUserFields';
import { RegistrationProps, ResponseType } from './registrationTypes';
import './registration.css';

export default function Registration () {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState<RegistrationProps>({
        username: '',
        password1: '',
        password2: '',
    })

    async function handleSubmit (): Promise<void>{
        const result = 'Valid' //Validation
        if(result === 'Valid') {
            const response = await registerNewUser(credentials);            
            if(response.status === 201) {
                handleValidRegistrationResponse(response.data.key)
            } else if(response.status === 204) {
                handleUserLogin()
            }
        } 
    }

    function handleValidRegistrationResponse(token:string): void {
        updateLocalStorage(token, credentials.username)
        updateUser(token, credentials.username, user, setUser)
        navigate('/');
    }

    async function handleUserLogin (): Promise<void> {
        const response = await requestLogin()
        if(response?.status === 200) {
            handleValidLoginResponse(response.data.key)
        }
    }

    async function requestLogin (): Promise<ResponseType> {
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
                <div className="registration-header">Registration</div>
                <NewUserFields 
                    fields={ credentials } 
                    setFields={ setCredentials }
                    handleSubmit={ handleSubmit }/>
            </div>
        </main>
        
    )
}