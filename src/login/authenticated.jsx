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
    
    const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
    React.useEffect(() => {
        const random = Math.floor(Math.random() * 1000);
        fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
            .then((response) => response.json())
            .then((data) => {
            const containerEl = document.querySelector('#picture');
    
            const width = 100;
            const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}`;
            setImageUrl(apiUrl);
            })
            .catch();
        }), [];

    return (
        <div className="content">
            <h1>Welcome, {props.userName}</h1>
            <Button className="btn btn-primary" onClick={ () => logout() }>Logout</Button>
            <img src={imageUrl} id='picture'></img>
        </div>
    );
}