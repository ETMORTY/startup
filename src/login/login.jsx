import React from 'react';

export function Login() {
    return (
        <main className="container-fluid text-center">
                <div>
                        <h1>Login</h1>
                        <form action="stories.html" method="get" className="login">
                                <div className="input-group mb-3">
                                        <span className="input-group-text">Email: </span>
                                        <input type="email" className="form-control" placeholder="your@email.com" />
                                </div>
                                <div className="input-group mb-3">
                                        <span className="input-group-text">Password: </span>
                                        <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <input type="submit" value="Login" className="btn btn-primary" />
                                <input type="submit" value="Create Account" className="btn btn-secondary" />
                        </form>
                </div>
        </main>
    );
}