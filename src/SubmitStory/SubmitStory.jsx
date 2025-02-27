import React, { useState, useEffect, use } from 'react';
import './SubmitStory.css';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";


export function SubmitStory() {
    const [storyMap, setStoryMap] = useState(new Map([[ "Title", ""], ["Intro", ""], ["1A", ""], ["1B", ""], ["2A", ""], ["2B", ""], ["2C", ""], ["2D", ""], ["3A", ""], ["3B", ""], ["3C", ""], ["3D", ""], ["3E", ""], ["3F", ""], ["3G", ""], ["3H", ""], ["4A", ""], ["4B", ""], ["4C", ""], ["4D", ""], ["4E", ""], ["4F", ""], ["4G", ""], ["4H", ""], ["4I", ""], ["4J", ""], ["4K", ""], ["4L", ""], ["4M", ""], ["4N", ""], ["4O", ""], ["4P", ""]]))

    const Option1 = ["1A", "1B"]
    const Option2 = ["2A", "2B", "2C", "2D"]
    const Option3 = ["3A", "3B", "3C", "3D", "3E", "3F", "3G", "3H"]
    const Option4 = ["4A", "4B", "4C", "4D", "4E", "4F", "4G", "4H", "4I", "4J", "4K", "4L", "4M", "4N", "4O", "4P"]
    // const storyMap = {}
    // for (let i = 0; i < Option1.length; i++) {
    //     storyMap[Option1[i]] = ""
    // }
    // for (let i = 0; i < Option2.length; i++) {
    //     storyMap[Option2[i]] = ""
    // }
    // for (let i = 0; i < Option3.length; i++) {
    //     storyMap[Option3[i]] = ""
    // }
    // for (let i = 0; i < Option4.length; i++) {
    //     storyMap[Option4[i]] = ""
    // }
    const [i, seti] = useState(0)
    const [j, setj] = useState(0)
    const [k, setk] = useState(0)
    const [l, setl] = useState(0)
    const [counter, setCounter] = useState(0)
    const [titleValue, setTitleValue] = useState("")
    const [introValue, setIntroValue] = useState("")
    const [option1Value, setOption1Value] = useState("")
    const [option2Value, setOption2Value] = useState("")
    const [option3Value, setOption3Value] = useState("")
    const [option4Value, setOption4Value] = useState("Sample Text")

    function initializeText() {
        console.log("Initialize Text")
        setTitleValue(storyMap.get("Title"))
        setIntroValue(storyMap.get("Intro"))
        setOption1Value(storyMap.get(Option1[i]))
        setOption2Value(storyMap.get(Option2[j]))
        setOption3Value(storyMap.get(Option3[k]))
        setOption4Value(storyMap.get(Option4[l]))
    }
    
    useEffect(() => {
        console.log("option1 " + option1Value)
        document.getElementsByName("Title")[0].value = titleValue
        document.getElementsByName("Intro")[0].value = introValue
        document.getElementsByName("Option1")[0].value = option1Value
        document.getElementsByName("Option2")[0].value = option2Value
        document.getElementsByName("Option3")[0].value = option3Value
        document.getElementsByName("Option4")[0].value = option4Value
    }, [titleValue, introValue, option1Value, option2Value, option3Value, option4Value])

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
    useEffect(() => {
        initializeText()
        console.log(i, j, k, l, counter)
    }, [i, j, k, l, counter])

    function saveNewValues(cycle) {
        
        setStoryMap(storyMap.set("Title", document.getElementsByName("Title")[0].value))
        setStoryMap(storyMap.set("Intro", document.getElementsByName("Intro")[0].value))
        setStoryMap(storyMap.set(Option1[i], document.getElementsByName("Option1")[0].value))
        setStoryMap(storyMap.set(Option2[j], document.getElementsByName("Option2")[0].value))
        setStoryMap(storyMap.set(Option3[k], document.getElementsByName("Option3")[0].value))
        setStoryMap(storyMap.set(Option4[l], document.getElementsByName("Option4")[0].value))
        
        console.log(storyMap)
        console.log(storyMap.get("Title"))
        cycle()
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
                    <textarea className="textBoxes" name="Intro"rows="10" cols="70" ></textarea><br />
                    
                <label for="Option1">{Option1[i]}: </label>
                    <textarea className="textBoxes" name="Option1" rows="10" cols="70" ></textarea><br />
                    
                <label for="Option2">{Option2[j]}: </label>
                    <textarea className="textBoxes" name="Option2" rows="10" cols="70" ></textarea><br />
                    
                <label for="Option3">{Option3[k]}: </label>
                    <textarea className="textBoxes" name="Option3" rows="10" cols="70" ></textarea><br />
                    
                <label for="Option4">{Option4[l]}: </label>
                    <textarea className="textBoxes" name="Option4" rows="10" cols="70" defaultValue={option4Value}></textarea><br />
      
                {/* <input type="submit" value="Previous" className="btn btn-secondary Next" />
                <input type="submit" value="Next" className="btn btn-primary Previous" /> */}
                <Button className="btn btn-secondary" onClick={() => saveNewValues(cyclePrev)}>Previous</Button>
                <Button className="btn btn-primary" onClick={() => saveNewValues(cycleNext)}>Next</Button>
            </form>
        </div>
    </main>
  );
}