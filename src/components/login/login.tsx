import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../misc/context';
import { loginUser } from '../../misc/apiCalls';
import { updateLocalStorage, updateUser } from '../../misc/userFunctions';
import LoginFields from './loginFields';
import { FieldsType } from './loginTypes';
import { refreshPage } from '../../misc/miscFunctions';
import './login.css';

export default function Login () {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [ credentials, setCredentials ] = useState<FieldsType>({
        username: '',
        password: '',
    })

    async function handleSubmit (): Promise<void> {
        const result = 'Valid' //NEED TO ADD VALIDATION
        if(result === 'Valid') {
            handleLogin();
        }
    }

    async function handleLogin (): Promise<void> {
        const response = await loginUser(credentials);
        if (typeof response === "string") {
            console.log(response) // NEED TO ADD VALIDATION HERE!!!
        } else if (response.status === 200) {
            handleValidLoginResponse(response.token);            
        } 
    }

    function handleValidLoginResponse (token: string): void {
        updateLocalStorage(token, credentials.username);
        updateUser(token, credentials.username, user, setUser);
        navigate('/');
        refreshPage();
    }

    return (
        <main className="login-page">
            <div className="login" data-cy='login'>
                <div 
                    className="login-header" 
                    data-cy="login-header">
                    Login
                </div>
                <LoginFields 
                    fields={ credentials } 
                    setFields={ setCredentials } 
                    handleSubmit={ handleSubmit }/>
            </div>
        </main>
        
    )
}