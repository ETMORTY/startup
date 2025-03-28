import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { MessageDialog } from "./messageDialog";

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState("");
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        loginOrCreate(`/api/auth/login`);
    }

    async function createUser() {
        loginOrCreate(`/api/auth/create`);
    }

    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
            method: "post",
            body: JSON.stringify({ email: userName, password: password }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        if (response?.status === 200) {
            localStorage.setItem("userName", userName);
            props.onLogin(userName);
        } else {
            const body = await response.json();
            setDisplayError(`Error: ${body.msg}`);
        }
    }

    return (
        <>
        <div className="content">
                        <h1>Login</h1>
                        <form action="/stories" method="get" className="login">
                                <div className="input-group mb-3">
                                        <span className="input-group-text">Email: </span>
                                        <input type="email" className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="your@email.com" />
                                </div>
                                <div className="input-group mb-3">
                                        <span className="input-group-text">Password: </span>
                                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                </div>
                                {/* <input type="submit" value="Login" className="btn btn-primary" />
                                <input type="submit" value="Create Account" className="btn btn-secondary" /> */}
                                <Button className="btn btn-primary" onClick={() => loginUser()} disabled={!userName || !password}>Login</Button>
                                <Button className="btn btn-secondary" onClick={() => createUser()} disabled={!userName || !password}>Create Account</Button>
                        </form>
                </div>
                <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
                </>
    );
}