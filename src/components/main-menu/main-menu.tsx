import {Link} from "react-router-dom";

// CSS Imports
import "./main-menu.scss";
// Assets Imports
import avatarImg from "../../assets/img/avatar.jpeg";


const employerTest = {
    firstName: "Wilmer",
    lastName: "Blanco",
    job: "Software Engineer III",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

function MainMenu() {
    return (
        <div className="main-menu-content">
            <div className="main-menu-image-content">
                <div className="main-menu-img">
                    <img src={avatarImg} alt=""/>
                </div>
                <div className="main-menu-title"><p>{employerTest.fullName()}</p></div>
            </div>
            <div className="main-menu-options">
                <nav>
                    <ul>
                        <Link to="/">Home</Link>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="profile">My Salesforce Profile</Link></li>
                        <li><Link to="/">My Account</Link></li>
                        <li><Link to="/">Contact Support</Link></li>
                        <li><Link to="/">Logout</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default MainMenu;
