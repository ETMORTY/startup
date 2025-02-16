import React from "react";
import { Link } from "react-router-dom";

export function Authenticated(props) {
    function logout() {
        localStorage.removeItem("userName");
        props.onLogout();
    }
    
    return (
        <div className="content">
            <h1>Welcome, {props.userName}</h1>
            <Link to="/" className="btn btn-primary" onClick={ logout() }>Logout</Link>
        </div>
    );
}