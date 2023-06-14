import "./app-list.scss";

function AppList() {
    return (
        <div className="app-list-content">
            <h3 className="card-title">My applications</h3>
            <ul className="app-list">
                <li>
                    <div className="app-icon-content">
                        <i className="bi bi-alarm"></i>
                    </div>
                    <a href="#">
                        Timesheet
                    </a>
                </li>
                <li>
                    <div className="app-icon-content">
                        <i className="bi bi-person-rolodex"></i>
                    </div>
                    <a href="#">
                        Directory
                    </a>
                </li>
                <li>
                    <div className="app-icon-content">
                        <i className="bi bi-slack"></i>
                    </div>
                    <a href="#">
                        Slack
                    </a>
                </li>
                <li>
                    <div className="app-icon-content">
                        <i className="bi bi-door-open"></i>
                    </div>
                    <a href="#">
                        Door
                    </a>
                </li>
                <li>
                    <div className="app-icon-content">
                        <i className="bi bi-book"></i>
                    </div>
                    <a href="#">
                        Assignments
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default AppList;
