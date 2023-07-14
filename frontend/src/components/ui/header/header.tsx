// Assets imports
import logo from "../../../assets/img/logo.png";
// CSS Imports
import './header.scss';
// Component imports
import MainMenu from "../../main-menu/main-menu";

function Header() {
    return (
        <nav className="header-content">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-2">
                        <a className="navbar-brand" href="#">
                            <img className="navbar-logo" src={logo} alt="Company Logo"/>
                        </a>
                    </div>
                    <div className="col-7">
                        <input className="navbar-search-input" type="search" placeholder="Search" aria-label="Search"/>
                    </div>
                    <div className="col-3">
                        <MainMenu/>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;