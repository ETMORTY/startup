import React from 'react';
import './SubmitStory.css';

export function SubmitStory() {
  return (
    <main className="container-fluid">
        <div className="title">  
            <div className="user">
                User:
                <span className="username">New User</span>
            </div>
            <h1>Submit A Story</h1>
        </div>
        <div className="text-container">
            <p><em>Submit a story for others to enjoy</em></p>
            <form action="SubmitStory.html" method="get">
                <label for="Title">Title: </label>
                    <input type="text" className="textBoxes" name="Title" style="width: 450px;" /><br />
                <label for="Intro">Intro: </label>
                    <textarea className="textBoxes" rows="10" cols="70"></textarea><br />
                    
                <label for="Option1">1A: </label>
                    <textarea className="textBoxes" name="Option1" rows="10" cols="70"></textarea><br />
                    
                <label for="Option2">2A: </label>
                    <textarea className="textBoxes" name="Option2" rows="10" cols="70"></textarea><br />
                    
                <label for="Option3">3A: </label>
                    <textarea className="textBoxes" name="Option3" rows="10" cols="70"></textarea><br />
                    
                <label for="Option4">4A: </label>
                    <textarea className="textBoxes" name="Option4" rows="10" cols="70"></textarea><br />
      
                <input type="submit" value="Previous" className="btn btn-secondary Next" />
                <input type="submit" value="Next" className="btn btn-primary Previous" />
            </form>
        </div>
    </main>
  );
}