import React from 'react';
import './ReadStory.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { useEffect } from 'react';

export function ReadStory() {
    const fullUrl = window.location.href;
    const storyId = fullUrl.substring(fullUrl.lastIndexOf("/") + 1).replace(/%20/g, " ");
    const story = JSON.parse(localStorage.getItem(storyId + "-story")); //Fix later so it isn't hard coded
    

    const [selection, setSelection] = React.useState(story.OptionIntro);
    const [option1, setOption1] = React.useState(selection.next1.text);
    const [option2, setOption2] = React.useState(selection.next2.text);
    const [storyText, setStoryText] = React.useState(story.Intro);
    const [counter, setCounter] = React.useState(0);

    function count() {
        console.log("Count");
        setCounter(counter + 1);
        if (counter >= 3) {
            document.getElementById("submit").disabled = true;
            setCounter(3);
        }
    }

    function addSelection() {
        console.log("Add Selection");
        const option1Radio = document.getElementById("Option1");
        const option2Radio = document.getElementById("Option2");
        
        if (option1Radio.checked) {
            setStoryText(storyText + " | " + option1)
            console.log("Option 1");
            console.log(option1Radio.value);
            if (counter < 3) {
            setSelection(selection.next1);
            }
            
        } else if (option2Radio.checked) {
            setStoryText(storyText + " | " + option2)
            console.log("Option 2");
            console.log(option2Radio.value);
            if (counter < 3) {
                setSelection(selection.next2);
                }
        }
    }
    
    useEffect(() => {
        setOption1(option1 ? selection?.next1.text : "You finished the story!");
        setOption2(option2 ? selection?.next2.text : "You finished the story!");
    }, [selection]);

  return (
    <main className="container-fluid">
        <div className="user">
            User:
            <span className="username"> {localStorage.userName}</span>
        </div>
        <h1>{storyId}</h1>
        <div className="story">
            <p>{storyText}</p>
        </div>
        <form>
            <div className="options">
                <input type="radio" id="Option1" value={option1} name="StoryOptions" />
                <label htmlFor="Option1"><strong>{counter + 1}A</strong> {option1}</label><br />
                <input type="radio" id="Option2" value={option2} name="StoryOptions" />
                <label htmlFor="Option2"><strong>{counter + 1}B</strong> {option2}</label><br />
            </div>
            <Button className="btn btn-primary" id="submit" onClick={() => [addSelection(), count()] }>Submit</Button>
        </form>
    </main>
  );
}