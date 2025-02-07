import React from 'react';
import './ReadStory.css';

export function ReadStory() {
  return (
    <main className="container-fluid">
        <div className="user">
            User:
            <span className="username">New User</span>
        </div>
        <h1>Title of Story</h1>
        <div className="story">
            <p>It was Halloween night, and we were heading to a Halloween party at a friend’s house, who lived a good distance away.
                “Honey, we’re going to be late, we were supposed to be at the party thirty minutes ago.”
                “I’m driving as fast as I can, it’s not my fault Provo traffic is terrible.”
                “Well, if we would have left at 5:30 like I’d planned—“
                “It’s not my fault my costume broke!”
                We drive farther and the landscape gets more and more unfamiliar. No longer are we in a bustling city, but somewhere out in the middle of nowhere.
                “Honey, I think you missed a turn—“
                “I didn’t miss a turn.”
                “Are you sure? I’m pretty sure the Smiths live in a subdivision, not out in the countryside.”
                “Yes, I’m sure. Joe told me to turn after the old bridge. I haven’t seen a bridge yet.”
                “Why didn’t Joe just give us his address? I could’ve put it into my phone.”
                “Cellphones don’t work this far out, and I don’t even think Joe could remember his birthday, let alone his address. He still has to search his phone for his own phone number.”
                Suddenly, the engine starts to stutter, the car begins to jerk. Smoke comes out from underneath the hood. We pull over to the side of the road. With a final wheeze like that of a dying animal, the engine shuts off. After the smoke clears, we get out of the car and look around. We see…
                </p>
        </div>
        <form action="ReadStory.html">
            <div className="options">
                <input type="radio" id="Option1" value="Option 1" name="StoryOptions" />
                <label htmlFor="Option1"><strong>1A</strong> A dark, scary forest. The trees have grown twisted together, and thorny undergrowth fills in the gaps too small for the trees. There is a narrow trail, and through the trees we can see a dim light. “Maybe that’s someplace we can get help.” We walk into the woods.</label><br />
                <input type="radio" id="Option2" value="Option 2" name="StoryOptions" />
                <label htmlFor="Option2"><strong>1B</strong> An old, rickety house, with pointed spires and boarded up windows. Spider webs drape the front porch like the tattered shawl of an old crone. In one of the windows, a faint flickering light can be seen. “Maybe they have a phone we can use.” We start up the main walkway.</label><br />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </main>
  );
}