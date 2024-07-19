import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../misc/context';
import { registerNewUser } from '../../misc/apiCalls';
import { updateLocalStorage } from '../../misc/userFunctions';
import { updateUser } from '../../misc/userFunctions';
import { loginUser } from '../../misc/apiCalls';
import NewUserFields from './newUserFields';
import './registration.css';

export default function Registration () {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: '',
        password1: '',
        password2: '',
    })

    async function handleSubmit () {

        const result = 'Valid';

        if(result === 'Valid') {
            const response = await registerNewUser(credentials);
            
            if(response.status === 201) {
                const token = response.data.key;
                updateLocalStorage(token, credentials.username)
                updateUser(token, credentials.username, user, setUser)
                navigate('/');

            } else if(response.status === 204) {
                const loginCredentials = {
                    username: credentials.username,
                    password: credentials.password1
                }

                const response = await loginUser(loginCredentials);

                if(response.status && response.status === 200) {
                    const token = response.data.key;
                    updateLocalStorage(token, credentials.username);
                    updateUser(token, credentials.username, user, setUser);
                    navigate('/');
                }
            }
        } 
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