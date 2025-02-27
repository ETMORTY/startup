import React from 'react';
import './stories.css';
import { Link } from 'react-router-dom';

import { Cards } from './cards.jsx';
import {SubmitStory} from '../SubmitStory/SubmitStory.jsx'
const myStyle = {}

export function Stories() {
    const story1 = JSON.parse(localStorage.getItem("Story1"))
    const storyList = []
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).includes("-story")) {
            console.log(localStorage.key(i))
            storyList.push(i)
        }
    }
    console.log("Story List:" + storyList)
        
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
            {storyList.map((element, index) => (< Cards key={index} id={element} />))}
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{story1.Title}</h5>
                    <p className="card-text">{story1.Intro}</p>
                    <Link to={"/ReadStory/" + story1.Title} className="btn btn-primary" id="Story1">Begin date!</Link>
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