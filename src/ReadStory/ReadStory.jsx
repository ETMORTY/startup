import React from 'react';
import './ReadStory.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { useEffect } from 'react';

export function ReadStory() {
    const fullUrl = window.location.href;
    console.log(fullUrl);
    const storyId = fullUrl.substring(fullUrl.lastIndexOf("/") + 1).replace(/%20/g, " ");
    console.log(storyId);
    const story = JSON.parse(localStorage.getItem("Story1")); //Fix later so it isn't hard coded
    console.log(story);

    const [selection, setSelection] = React.useState(story.OptionIntro);
    const [option1, setOption1] = React.useState(selection.next1.text);
    const [option2, setOption2] = React.useState(selection.next2.text);

    function addSelection() {
        console.log("Add Selection");
        const option1 = document.getElementById("Option1");
        const option2 = document.getElementById("Option2");
        if (option1.checked) {
            console.log("Option 1");
            console.log(option1.value);
            setSelection(selection.next1);
        } else if (option2.checked) {
            console.log("Option 2");
            console.log(option2.value);
            setSelection(selection.next2);
        }
    }
    
    useEffect(() => {
        setOption1(option1 ? selection.next1.text : "You finished the story!");
        setOption2(option2 ? selection.next2.text : "You finished the story!");
    });

  return (
    <main className="container-fluid">
        <div className="user">
            User:
            <span className="username"> {localStorage.userName}</span>
        </div>
        <h1>{storyId}</h1>
        <div className="story">
            <p>{story.Intro}</p>
        </div>
        <form>
            <div className="options">
                <input type="radio" id="Option1" value={option1} name="StoryOptions" />
                <label htmlFor="Option1"><strong>1A</strong> {option1}</label><br />
                <input type="radio" id="Option2" value={option2} name="StoryOptions" />
                <label htmlFor="Option2"><strong>1B</strong> {option2}</label><br />
            </div>
            <Button className="btn btn-primary" onClick={() => addSelection() }>Submit</Button>
        </form>
    </main>
  );
}