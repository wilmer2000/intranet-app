import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import "./login-page.scss";
import logo from "../../assets/img/logo.png";

import axios from "axios";

export interface ILoginCredentials {
    email?: string;
    password?: string;
}

export default function LoginPage() {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();

        const credentials: ILoginCredentials = {
            email,
            password
        };

        const response = await loginUser(credentials);

        if (response && "accessToken" in response) {
            console.log(
                "Success",
                response.message,
                "success"
            );
        } else {
            console.log(
                "Failed",
                response.message,
                "error"
            );
        }
    };

    async function loginUser(
        credentials: ILoginCredentials
    ): Promise<any> {
        const body = JSON.stringify(credentials);

        return await axios
            .post(
                `${
                    import.meta.env.VITE_INTRANET_API_URL
                }/auth/login`,
                body,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="login-container">
            <div className="login-form-container">
                <form noValidate onSubmit={handleSubmit}>
                    <div className="login-logo-content">
                        <img src={logo} alt="" />
                    </div>
                    <div className="error-message">
                        error
                    </div>
                    <div className="form-group">
                        <label
                            className="form-label"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="form-input"
                            type="email"
                            id="email"
                            name="email"
                            required
                            autoFocus
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label
                            className="form-label"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="form-input"
                            type="password"
                            id="password"
                            name="password"
                            required
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                        />
                    </div>
                    <div className="form-group">
                        <Link to="/recovery-password">
                            <i className="bi bi-key"></i>{" "}
                            Forgot your password?
                        </Link>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-default btn-full-width">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
