import React from 'react';
import 'C:/Users/ethan/CS260/startup/src/app.css' 
// Will this work in the long run? I'm not sure if this is the best way to do this.
import './instructions.css';

export function Instructions() {
    return (
        <main className="container-fluid">
                <div className="user">
                        User:
                        <span className="username">New User</span>
                </div>
                <h1>Instructions</h1>
                <h3>What is a story date?</h3>
                        <p>A story date is an idea that originally came from my brother. It's foundation is a "choose your own adventure story." 
                        If you know what those are, the rest will be pretty simple. If not, <a href="instructions.html#adventure">click here</a>. The idea behind this
                        concept is that instead of already having the date planned before you head out, all you have is ideas for what you
                        could do. As you read through the "choose your own adventure story," you will be creating your date along the way.
                        <span>Perfect for group dates or smaller!</span></p>
                <h3>How do I set it up?</h3>
                        <ol>
                                <li>Pick a story from the <a href="stories.html">stories</a> tab</li>
                                <li>Decide on options for the date <span>(Feel free to customize and add alternatives in case of weather)</span></li>
                                <ul>
                                        <li>2 activities options</li>
                                        <li>4 dinner options</li>
                                        <li>8 dessert options</li>
                                        <li>16 movie options</li>
                                </ul>
                                <li>Assign numbers and letters to each option</li>
                                <ul>
                                        <li>e.g. 1A-Activity #1, 1B-Activity #2, 2A-Dinner #1, etc.</li>
                                </ul>
                                <li>Record these labels somewhere you can access</li>
                                <ul>
                                        <li>A fun idea <span>(if you have time)</span>, place each option into an envelope with the label for you to open
                                                 throughout the night</li>
                                </ul>
                        </ol>
                        <img src="./Envelopes.jpg" alt="Envelope_Idea" width="1000px" />
                        <h4>Here is a map to help you find local options:</h4>
                        <img src="https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/07/googleMapsTricksHero.jpg" alt="GoogleMaps" width="1000px" />
                <h2>What is this website for?</h2>
                        <p>This website is a place where you can have access to many stories written by others for the purpose of a story date. You
                                 can submit your own as well as collaborate in writing them with others.</p>
                        <h3>How do I submit a story?</h3>
                                <p>Once you have logged in, there should be a '+' sign in the bottom corner of the stories page where you can add your own stories.</p>
                                <ul>
                                        <li>You will fill out a form for your story that will organize it for you</li>
                                </ul>
                <aside>
                        <h4>Additional Info:</h4>
                        <h5 id="adventure">What is a "choose your own adventure story?"</h5>
                        <p>A "choose your own adventure story" is a story that has multiple endings. As you read through it, you will come across
                                 points where you get to make a choice. Depending on how you choose, the story will then continue and end differently</p>
                </aside>
        </main>
    );
}