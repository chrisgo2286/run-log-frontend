import { 
    userLinksLoggedIn, 
    userLinksLoggedOut,
    siteLinksLoggedIn,
    siteLinksLoggedOut 
} from './navbarFunctions';
import './navbar.css';

export default function Navbar () {
    const user = {
        'username': 'Christian',
        'isLoggedIn': true
    };
    
    function handleSiteLinks () {
        return (user.isLoggedIn) ? siteLinksLoggedIn(): siteLinksLoggedOut();
    }

    function handleUserLinks () {
        return (user.isLoggedIn) ? userLinksLoggedIn(user.username): userLinksLoggedOut();
    }

    return (
        <nav className="bg-blue-100 flex justify-between mb-10">
            <div className="flex [&>*]:m-4">
                { handleSiteLinks() }
            </div>
            <div className="flex [&>*]:m-4">
                { handleUserLinks() }
            </div>
        </nav>
    )
}