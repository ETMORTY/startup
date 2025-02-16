import React from "react";
import { Link } from "react-router-dom";

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState("");
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        localStorage.setItem("userName", userName);
        props.onLogin(userName);
    }

    async function createUser() {
        localStorage.setItem("userName", userName);
        props.onLogin(userName);
    }

    return (
        <div className="content">
                        <h1>Login</h1>
                        <form action="/stories" method="get" className="login">
                                <div className="input-group mb-3">
                                        <span className="input-group-text">Email: </span>
                                        <input type="email" className="form-control" placeholder="your@email.com" />
                                </div>
                                <div className="input-group mb-3">
                                        <span className="input-group-text">Password: </span>
                                        <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                {/* <input type="submit" value="Login" className="btn btn-primary" />
                                <input type="submit" value="Create Account" className="btn btn-secondary" /> */}
                                <Link to="/stories" className="btn btn-primary" onClick={() => loginUser()} disabled={!userName || !password}>Login</Link>
                                <Link to="/stories" className="btn btn-secondary" onClick={() => createUser()} disabled={!userName || !password}>Create Account</Link>
                        </form>
                </div>
    )};