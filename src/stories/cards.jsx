import React from 'react';
import { Link } from 'react-router-dom';
import './stories.css';

export function Cards(id) {
    const story = JSON.parse(localStorage.getItem(localStorage.key(id.id)));
            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{story.Title}</h5>
                        <p className="card-text">{story.Intro.substring(0,150) + " . . ."}</p>
                        <Link to={"/ReadStory/" + story.Title} className="btn btn-primary" id={story.Title}>Begin date!</Link>
                    </div>
                </div>
            );
}