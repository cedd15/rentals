import { NavLink } from "react-router";
import "../styles/NavBar.css"

function NavBar() {

    const defaultClass = "nav-link"
    const getClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? "active-link " + defaultClass : defaultClass;

    return (
        <div className="navbar">
            <ul>
                <li><NavLink to='/' end className={getClass}>Home</NavLink></li>
                <li><NavLink to='/saved-rentals' className={getClass}>Saved</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar;