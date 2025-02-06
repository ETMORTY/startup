import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <img src="StoryDateLogo.png" alt="Logo" className="Logo navbar-brand" />
                        <menu>
                            <ul className="navbar-nav">
                                <li className="nav-item"><a href="index.html" className="nav-link active" aria-current="page">Home</a></li>
                                <li className="nav-item"><a href="instructions.html" className="nav-link">Instructions</a></li>
                                <li className="nav-item"><a href="stories.html" className="nav-link">Stories</a></li>
                                <li className="nav-item"><a href="SubmitStory.html" className="nav-link">Submit a Story</a></li>
                            </ul>
                        </menu>
                    </div>
                </nav>
                <hr />
            </header>

            <main>App components go here</main>

            <footer className="container-fluid">
                <p><span className="text-reset">Author: </span>Ethan Mortensen</p>
                <a href="https://github.com/ETMORTY/startup.git" className="text-reset">GitHub</a>
            </footer>
        </div>
    );
}