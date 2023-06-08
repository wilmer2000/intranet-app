import {Outlet} from "react-router-dom";
import Header from "../../components/ui/header/header.tsx";
import Container from "../../components/ui/container/container.tsx";
import Avatar from "../../components/ui/avatar/avatar.tsx";
import Navbar from "../../components/nav-bar/nav-bar.tsx";

function Root() {
    return (
        <>
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
        </>
    )
}

export default Root
