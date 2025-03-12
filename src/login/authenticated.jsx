import React from "react";
import Button from "react-bootstrap/Button";

export function Authenticated(props) {
    function logout() {
        fetch(`/api/auth/logout`, {
            method: "delete",
        })
            .catch(() => {
                // Logout failed. Assuming offline
            })
            .finally(() => {
                localStorage.removeItem("userName");
                props.onLogout();
            });
    }
    
    return (
        <div className="content">
            <h1>Welcome, {props.userName}</h1>
            <Button className="btn btn-primary" onClick={ () => logout() }>Logout</Button>
        </div>
    );
}