import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Instructions } from './instructions/instructions';
import { ReadStory } from './ReadStory/ReadStory';
import { Stories } from './stories/stories';
import { SubmitStory } from './SubmitStory/SubmitStory';
import { AuthState } from './login/authState';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);
    return (
        <BrowserRouter>
            <div className='body'>
                <header>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <img src="StoryDateLogo.png" alt="Logo" className="Logo navbar-brand" />
                            <menu>
                                <ul className="navbar-nav">
                                    <li className="nav-item"><NavLink to="" className="nav-link" aria-current="page">Home</NavLink></li>
                                    <li className="nav-item"><NavLink to="instructions" className="nav-link">Instructions</NavLink></li>
                                    {authState === AuthState.Authenticated && (<li className="nav-item"><NavLink to="stories" className="nav-link">Stories</NavLink></li>)}
                                    {authState === AuthState.Authenticated && (<li className="nav-item"><NavLink to="SubmitStory" className="nav-link">Submit a Story</NavLink></li>)}
                                </ul>
                            </menu>
                        </div>
                    </nav>
                    <hr />
                </header>

                <Routes>
                    <Route path='/' element={<Login 
                    userName={userName}
                    authState={authState}
                    onAuthChange={(userName, authState) => {
                    setAuthState(authState);
                    setUserName(userName);
                }}/>} exact />
                    <Route path='/instructions' element={<Instructions />} />
                    <Route path='/stories' element={<Stories />} />
                    <Route path='/SubmitStory' element={<SubmitStory />} />
                    <Route path='/ReadStory/:id' element={<ReadStory />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer className="container-fluid">
                    <p><span className="text-reset">Author: </span>Ethan Mortensen</p>
                    <a href="https://github.com/ETMORTY/startup.git" className="text-reset">GitHub</a>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }