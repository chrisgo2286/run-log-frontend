import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../misc/context';
import { loginUser } from '../../misc/apiCalls';
import { updateLocalStorage, updateUser } from '../../misc/userFunctions';
import LoginFields from './loginFields';
import { FieldsType } from './loginTypes';
import { validateLoginFields } from './loginValidation';
import { Validation } from "../validation/validation";
import { refreshPage } from '../../misc/miscFunctions';
import './login.css';

export default function Login (): JSX.Element {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [ credentials, setCredentials ] = useState<FieldsType>({
        username: '',
        password: '',
    })
    const [ errors, setErrors ] = useState<string[]>([])

    async function handleSubmit (): Promise<void> {
        const result = validateLoginFields(credentials)
        if(result === 'Valid') {
            handleLogin();
        } else {
            setErrors(result)
        }
    }

    async function handleLogin (): Promise<void> {
        const response = await loginUser(credentials);
        if (typeof response === "string") {
            setErrors([response])
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
                <Validation errors={ errors } className={ "h-5" }/>
            </div>
        </main>
        
    )
}