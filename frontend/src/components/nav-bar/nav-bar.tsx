import {Link} from "react-router-dom";

import "./nav-bar.scss"

function NavBar(){
    return (
        <div className="navbar-content">
            <div className="navbar-component">
                <ul className="navbar-menu">
                    <li><Link to="/"><i className="bi bi-house"></i>Home</Link></li>
                    <li><Link to="/profile"><i className="bi bi-person"></i>My Oktana Profile</Link></li>
                    <li><Link to="/about-oktana"><i className="bi bi-buildings"></i>About Oktana</Link></li>
                    <li><Link to="/human-resources"><i className="bi bi-people"></i>Human Resources</Link></li>
                    <li><Link to="/training"><i className="bi bi-joystick"></i>Training</Link></li>
                    <li><Link to="/delivery"><i className="bi bi-info-circle"></i>Delivery</Link></li>
                    <li><Link to="/support"><i className="bi bi-laptop"></i>Support</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;