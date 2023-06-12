import {Link} from "react-router-dom";
import './login-page.scss'
import logo from '../../assets/img/logo.png'

function LoginPage() {
    return (
        <div className="login-container">
            <div className="login-form-container">
                <form>
                    <div className="login-logo-content">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="error-message">
                        error
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input className='form-input' type="text" id="username"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="username">Password</label>
                        <input className='form-input' type="text" id="password"/>
                    </div>
                    <div className="form-group">
                        <Link to='/recovery-password'><i className="bi bi-key"></i> Forgot your password?</Link>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-default btn-full-width">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;