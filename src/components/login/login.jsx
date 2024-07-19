import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../misc/context';
import { loginUser } from '../../misc/apiCalls';
import { refreshPage } from '../../misc/miscFunctions';
import { updateLocalStorage, updateUser } from '../../misc/userFunctions';
import LoginFields from './loginFields';
import './login.css';

export default function Login () {
    const [ user, setUser ] = useContext(UserContext);
    const navigate = useNavigate();
    const [ credentials, setCredentials ] = useState({
        username: '',
        password: '',
    })

    async function handleSubmit () {
        const result = 'Valid'
        if(result === 'Valid') {
            const response = await loginUser(credentials);

            if(response.status && response.status === 200) {
                const token = response.data.key;
                updateLocalStorage(token, credentials.username);
                updateUser(token, credentials.username, user, setUser);
                navigate('/');
                refreshPage();
                
            } 
        }
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