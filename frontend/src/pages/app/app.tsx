import { Navigate, Outlet } from "react-router-dom";
import "./app.scss";
import { AuthContext } from "../../context/authContext.tsx";
import { useAuth } from "../../hooks/useAuth.ts";

// Components
import Header from "../../components/ui/header/header.tsx";
import Container from "../../components/ui/container/container.tsx";
import Avatar from "../../components/ui/avatar/avatar.tsx";
import Navbar from "../../components/nav-bar/nav-bar.tsx";

function App() {
    const { user, login, logout, setUser } = useAuth();

    return user ? (
        <AuthContext.Provider value={{ user, setUser }}>
            <main className="app-separator-size">
                <Header />
                <Container>
                    <div className="col-3">
                        <div className="row">
                            <Avatar />
                            <Navbar />
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <Outlet />
                        </div>
                    </div>
                </Container>
            </main>
        </AuthContext.Provider>
    ) : (
        <Navigate to="/login" />
    );
}

export default App;
