# AirGarage Recent Enforcement Leaderboard
Displays the parking lot name, the username of the enforcer, and the minutes since last enforcement, in order from most the least recently enforced.

## Table of Contents
* [Tech Stack](#techstack)<br/>
* [Setup/Installation](#installation)<br/>
* [Logic/ Explanation](#logic)<br/>
* [Short Answers](#shortanswers)<br/>

<a name="techstack"/></a>
## Tech Stack
Javascript, Node, React, HTML, CSS </br>

<a name="installation"/></a>
## Setup/Installation

On local machine, clone the project repository:
```
$ git clone https://github.com/jessicahojh/garage_leaderboard.git
```
In the project root directory, install dependencies:
```
$ npm install
```
Run the app:
```
$ npm start
```

<a name="logic"/></a>
## Logic/ Explanation
1. Iterate over each garage object from the first API call <br>
2. This allows us to get and also save the garage's "pk" and "name" <br>
3. Second API call takes in the "pk" <br>
4. From there, for each 2nd API call, we just look at the first enforcement object since that is most recent <br>
5. Create an array to save those first enforcement objects mentioned in step 4 along with the garage name <br>
6. Return the sorted array mentioned in step 5 by the minutes since last enforcement, in order from most the least recently enforced <br>
7. That array is then set in the sortedData state which is then passed to the Enforcements component and EnforcementCard component as props <br>
8. Final step - use the sortedData prop to display what is needed <br>

Note: First API gives us an array of garage objects. Second API gives us an array of enforcement objects for a specific garage <br>

<a name="shortanswers"/></a>
## Short Answers
1. Improvements? Answer: As I was building this app, there were a couple features I wanted to add if I had more time. Some examples: <br>
- Include a list of garages that never had an enforcement done. My current code ignores those. This is useful in a business prospective to allow the user to pinpoint the garages that never had a enforcemenet done. Is it because no one ever parked there or is it because an enforcer never visited and scanned a license plate there? <br>
- Search bar to search for specific parking lots to get more enforcement information
- Additional features to show/highlight garages that haven't had a single enforcement done for X amount of time <br>

2. What if there were 10,000 parking lots? Answer: The iterative approach I did would be the best. If there were 10,000 parking lots, it would be better if the first API with all the garage objects were paginated.