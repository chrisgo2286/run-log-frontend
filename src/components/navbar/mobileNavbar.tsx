import { useContext, useState } from "react"
import Logout from '../logout/logout';
import { Link } from 'react-router-dom';
import { UserContext } from "../../misc/context";

export default function MobileNavbar (): JSX.Element {
    const [ menuClicked, setMenuClicked ] = useState(false)
    const { user } = useContext(UserContext)

    return (
        <nav className="sm:hidden fixed top-0 w-screen">
            <div className="bg-blue-100 flex flex-col items-end justify-center pr-10 h-10">
                <i 
                    className="material-icons hover:cursor-pointer hover:text-gray-400"
                    onClick={() => setMenuClicked(!menuClicked)}>
                    menu
                </i>
            </div>
            <div className="bg-blue-100 w-36 float-right flex flex-col">
                <div className={ (menuClicked) ? "flex flex-col [&>*]:border [&>*]:border-gray-300 [&>*]:pl-4" : "hidden" }>
                    <Link onClick={() => setMenuClicked(false)} to="/">Home</Link>    
                    <Link onClick={() => setMenuClicked(false)} to="/profile">Profile</Link>
                    <Link onClick={() => setMenuClicked(false)} to="/calendar">Calendar</Link>
                    <Link onClick={() => setMenuClicked(false)} to="/trainingBlockList">Training Blocks</Link>
                    <div onClick={() => setMenuClicked(false)}>
                        { user.isLoggedIn ? <Logout /> : <Link to="/login">Login</Link> }
                    </div>
                        
                </div>
            </div>
        </nav>
    )
}