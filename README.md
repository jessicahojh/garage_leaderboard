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
1. Iterate over each garage object from the first API call <br>
2. This allows us to get and also save the garage's "pk" and "name" <br>
3. Second API call takes in the "pk" <br>
4. From there, for each 2nd API call, we just look at the first enforcement object <br>
5. Create an array to save those first enforcement objects mentioned in step 4 along with the garage name <br>
6. Return the sorted array mentioned in step 5 by the minutes since last enforcement, in order from most the least recently enforced <br>

Note: First API gives us an array of garage objects. Second API gives us an array of enforcement objects for a specific garage <br>

<a name="shortanswers"/></a>
