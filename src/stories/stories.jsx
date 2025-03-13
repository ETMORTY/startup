import React from 'react';
import './stories.css';
import { Link } from 'react-router-dom';

import { Cards } from './cards.jsx';
import {SubmitStory} from '../SubmitStory/SubmitStory.jsx'
const myStyle = {}

export function Stories() {
    const [stories, setStories] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/stories')
            .then((response) => response.json())
            .then((stories) => {
                setStories(JSON.parse(JSON.stringify(stories)));
                for (let i = 0; i < stories.length; i++) {
                    let story = JSON.parse(stories[i])
                    console.log("Title:" + story.Title)
                    localStorage.setItem(story.Title, JSON.stringify(story))
                }
            });
        
    }, []);
    console.log("Story List:" + stories)
        
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
            {stories.map((element, index) => (< Cards key={index} id={element} />))}
        </div>
        <div className="AddButton">
            <label for="button"><em>Add your own:</em></label>
            <Link to='/SubmitStory' className="btn btn-info">+</Link>
        </div>
    </main>
  );
}