import { 
    userLinksLoggedIn, 
    userLinksLoggedOut,
    siteLinksLoggedIn,
    siteLinksLoggedOut 
} from './navbarFunctions';

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
        <nav className="flex justify-between">
            <div>
                { handleSiteLinks() }
            </div>
            <div className="flex">
                { handleUserLinks() }
            </div>
        </nav>
    )
}