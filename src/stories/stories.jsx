import React from 'react';
import './stories.css';
import { Link } from 'react-router-dom';

import {SubmitStory} from '../SubmitStory/SubmitStory.jsx'
const myStyle = {}

export function Stories() {
    const story1 = JSON.parse(localStorage.getItem("Story1"))
  return (
    <main className="container-fluid">
        <div className="title">
            <div className="user">
                User:
                <span className="username"> {localStorage.userName}</span>
            </div>
            <h1>Stories</h1>
            <p><em>A catalog of stories to select from</em></p>
        </div>
        <div className="stories-container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{story1.Title}</h5>
                    <p className="card-text">{story1.Intro}</p>
                    <Link to={"/ReadStory/" + story1.Title} className="btn btn-primary" id="Story1">Begin date!</Link>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Story 2</h5>
                    <p className="card-text">This is a story that has been submitted by a user. It will be a choose your own adventure story that will be created as you go.</p>
                    <Link to="/ReadStory/Story2" className="btn btn-primary" id="Story2">Begin date!</Link>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Story 3</h5>
                    <p className="card-text">This is a story that has been submitted by a user. It will be a choose your own adventure story that will be created as you go.</p>
                    <Link to="/ReadStory/Story3" className="btn btn-primary" id="Story3">Begin date!</Link>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Story 4</h5>
                    <p className="card-text">This is a story that has been submitted by a user. It will be a choose your own adventure story that will be created as you go.</p>
                    <Link to="/ReadStory/Story4" className="btn btn-primary" id="Story4">Begin date!</Link>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Story 5</h5>
                    <p className="card-text">This is a story that has been submitted by a user. It will be a choose your own adventure story that will be created as you go.</p>
                    <Link to="/ReadStory/Story5" className="btn btn-primary" id="Story5">Begin date!</Link>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Story 6</h5>
                    <p className="card-text">This is a story that has been submitted by a user. It will be a choose your own adventure story that will be created as you go.</p>
                    <Link to="/ReadStory/Story6" className="btn btn-primary" id="Story6">Begin date!</Link>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Story 7</h5>
                    <p className="card-text">This is a story that has been submitted by a user. It will be a choose your own adventure story that will be created as you go.</p>
                    <Link to="/ReadStory/Story7" className="btn btn-primary" id="Story7">Begin date!</Link>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Story 8</h5>
                    <p className="card-text">This is a story that has been submitted by a user. It will be a choose your own adventure story that will be created as you go.</p>
                    <Link to="/ReadStory/Story8" className="btn btn-primary" id="Story8">Begin date!</Link>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Story 9</h5>
                    <p className="card-text">This is a story that has been submitted by a user. It will be a choose your own adventure story that will be created as you go.</p>
                    <Link to="/ReadStory/Story9" className="btn btn-primary" id="Story9">Begin date!</Link>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Story 10</h5>
                    <p className="card-text">This is a story that has been submitted by a user. It will be a choose your own adventure story that will be created as you go.</p>
                    <Link to="/ReadStory/Story10" className="btn btn-primary" id="Story10">Begin date!</Link>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Story 11</h5>
                    <p className="card-text">This is a story that has been submitted by a user. It will be a choose your own adventure story that will be created as you go.</p>
                    <Link to="/ReadStory/Story11" className="btn btn-primary" id="Story11">Begin date!</Link>
                </div>
            </div>
        </div>
        <div className="AddButton">
            <label for="button"><em>Add your own:</em></label>
            <Link to='/SubmitStory' className="btn btn-info">+</Link>
        </div>
    </main>
  );
}