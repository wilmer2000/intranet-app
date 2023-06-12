import {Outlet} from "react-router-dom";
import "./root.scss";

// Components
import Header from "../../components/ui/header/header.tsx";
import Container from "../../components/ui/container/container.tsx";
import Avatar from "../../components/ui/avatar/avatar.tsx";
import Navbar from "../../components/nav-bar/nav-bar.tsx";

function Root() {
    return (
        <main className="app-separator-size">
            <Header/>
            <Container>
                <div className="col-3">
                    <div className="row">
                        <Avatar/>
                        <Navbar/>
                    </div>
                </div>
                <div className="col-9">
                    <div className="row">
                        <Outlet/>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default Root
