import { ReactElement, useContext } from 'react';
import { UserContext } from '../../misc/context';
import { 
    userLinksLoggedIn, 
    userLinksLoggedOut,
    siteLinksLoggedIn,
    siteLinksLoggedOut 
} from './navbarFunctions';
import './navbar.css';

export default function Navbar () {
    const { user } = useContext(UserContext);
    
    function handleSiteLinks (): ReactElement {
        return (user.isLoggedIn) ? siteLinksLoggedIn(): siteLinksLoggedOut();
    }

    function handleUserLinks (): ReactElement {
        return (user.isLoggedIn) ? userLinksLoggedIn(user.username): userLinksLoggedOut();
    }

    return (
        <nav className="bg-blue-100 flex justify-between">
            <div className="flex [&>*]:m-4">
                { handleSiteLinks() }
            </div>
            <div className="flex [&>*]:m-4">
                { handleUserLinks() }
            </div>
        </nav>
    )
}