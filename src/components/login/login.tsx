import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../misc/context';
import { loginUser } from '../../misc/apiCalls';
import { updateLocalStorage, updateUser } from '../../misc/userFunctions';
import LoginFields from './loginFields';
import { FieldsType } from './loginTypes';
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
        if(response?.status === 200) {
            handleValidLoginResponse(response.data.key);            
        } 
    }

    function handleValidLoginResponse (token: string): void {
        updateLocalStorage(token, credentials.username);
        updateUser(token, credentials.username, user, setUser);
        navigate('/');
    }

    return (
        <main className="login-page">
            <div className="login" data-cy='login'>
                <div className="login-header">Login</div>
                <LoginFields 
                    fields={ credentials } 
                    setFields={ setCredentials } 
                    handleSubmit={ handleSubmit }/>
            </div>
        </main>
        
    )
}