import React, { useState } from 'react';
import './SubmitStory.css';
import { Link } from 'react-router-dom';

export function SubmitStory() {
    const Option1 = ["1A", "1B"]
    const Option2 = ["2A", "2B", "2C", "2D"]
    const Option3 = ["3A", "3B", "3C", "3D", "3E", "3F", "3G", "3H"]
    const Option4 = ["4A", "4B", "4C", "4D", "4E", "4F", "4G", "4H", "4I", "4J", "4K", "4L", "4M", "4N", "4O", "4P"]
    const storyMap = {}
    for (let i = 0; i < Option1.length; i++) {
        storyMap[Option1[i]] = ""
    }
    for (let i = 0; i < Option2.length; i++) {
        storyMap[Option2[i]] = ""
    }
    for (let i = 0; i < Option3.length; i++) {
        storyMap[Option3[i]] = ""
    }
    for (let i = 0; i < Option4.length; i++) {
        storyMap[Option4[i]] = ""
    }
    const [i, seti] = useState(0)
    const [j, setj] = useState(0)
    const [k, setk] = useState(0)
    const [l, setl] = useState(0)
    const [counter, setCounter] = useState(0)

    function cycleNext() {
        if (counter === 7) {
            seti(prevCount => prevCount + 1)
            
        }
        if (counter === 3 | counter === 7 | counter === 11) {
            setj(prevCount => prevCount + 1)
            
        }
        if (counter === 1 | counter === 3 | counter === 5 | counter === 7 | counter === 9 | counter === 11 | counter === 13) {
            setk(prevCount => prevCount + 1)
            
        }
        if (l === Option4.length - 1) {
            setl(0)
            seti(0)
            setj(0)
            setk(0)
            setCounter(-1)
        }
        else {setl(prevCount => prevCount + 1)}
        setCounter(prevCount => prevCount + 1)
    }
    function cyclePrev() {
        if (counter !== 0) {
            if (counter === 8) {
                seti(prevCount => prevCount - 1)
                
            }
            if (counter === 4 | counter === 8 | counter === 12) {
                setj(prevCount => prevCount - 1)
                
            }
            if (counter === 2 | counter === 4 | counter === 6 | counter === 8 | counter === 10 | counter === 12 | counter === 14) {
                setk(prevCount => prevCount - 1)
                
            }
            if (l === Option4.length - 1) {
                setl(0)
                seti(0)
                setj(0)
                setk(0)
                setCounter(-1)
            }
            else {setl(prevCount => prevCount - 1)}
            setCounter(prevCount => prevCount - 1)
        }
    }

    function saveNewValues() {
        storyMap[Option1[i]] = document.getElementsByName("Option1")[0].value
        storyMap[Option2[j]] = document.getElementsByName("Option2")[0].value
        storyMap[Option3[k]] = document.getElementsByName("Option3")[0].value
        storyMap[Option4[l]] = document.getElementsByName("Option4")[0].value
        console.log(storyMap)
    }

    
  return (
    <main className="container-fluid">
        <div className="title">  
            <div className="user">
                User:
                <span className="username"> {localStorage.userName}</span>
            </div>
            <h1>Submit A Story</h1>
        </div>
        <div className="text-container">
            <p><em>Submit a story for others to enjoy</em></p>
            <form action="SubmitStory.html" method="get">
                <label for="Title">Title: </label>
                    <input type="text" className="textBoxes title" name="Title" /><br />
                <label for="Intro">Intro: </label>
                    <textarea className="textBoxes" rows="10" cols="70"></textarea><br />
                    
                <label for="Option1">{Option1[i]}: </label>
                    <textarea className="textBoxes" name="Option1" rows="10" cols="70"></textarea><br />
                    
                <label for="Option2">{Option2[j]}: </label>
                    <textarea className="textBoxes" name="Option2" rows="10" cols="70"></textarea><br />
                    
                <label for="Option3">{Option3[k]}: </label>
                    <textarea className="textBoxes" name="Option3" rows="10" cols="70"></textarea><br />
                    
                <label for="Option4">{Option4[l]}: </label>
                    <textarea className="textBoxes" name="Option4" rows="10" cols="70"></textarea><br />
      
                {/* <input type="submit" value="Previous" className="btn btn-secondary Next" />
                <input type="submit" value="Next" className="btn btn-primary Previous" /> */}
                <Link to="/SubmitStory" className="btn btn-secondary" onClick={() => {saveNewValues(); cyclePrev()}}>Previous</Link>
                <Link to="/SubmitStory" className="btn btn-primary" onClick={() => {saveNewValues(); cycleNext()}}>Next</Link>
            </form>
        </div>
    </main>
  );
}