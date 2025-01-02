import React, { ReactElement, useContext } from 'react';
import { UserContext } from '../../misc/context';
import { 
    userLinksLoggedIn, 
    userLinksLoggedOut,
    siteLinksLoggedIn,
    siteLinksLoggedOut 
} from './navbarFunctions';
import './navbar.css';
import MobileNavbar from './mobileNavbar';

export default function Navbar (): JSX.Element {
    const { user } = useContext(UserContext);
    
    function handleSiteLinks (): ReactElement {
        return (user.isLoggedIn) ? siteLinksLoggedIn(): siteLinksLoggedOut();
    }

    function handleUserLinks (): ReactElement {
        return (user.isLoggedIn) ? userLinksLoggedIn(user.username): userLinksLoggedOut();
    }

    return (
        <React.Fragment>
            <nav className="hidden sm:flex fixed top-0 w-screen h-10 bg-blue-100 justify-between">
                <div className="flex [&>*]:my-2 [&>*]:ml-6">
                    { handleSiteLinks() }
                </div>
                <div className="flex [&>*]:my-2 [&>*]:mr-6">
                    { handleUserLinks() }
                </div>
            </nav>
            <MobileNavbar />
        </React.Fragment>
        
    )
}