import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

export function Login() {
    return (
        <main className="container-fluid text-center">
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
                                <Link to="/stories" className="btn btn-primary">Login</Link>
                                <Link to="/stories" className="btn btn-secondary">Create Account</Link>
                        </form>
                </div>
        </main>
    );
}