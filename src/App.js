import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';

import Enforcements from './components/Enforcements';

function App() {

  const [sortedData, setSortedData] = useState(null);

  useEffect(() => {
    doAll()
    .then(data => setSortedData(data))
  },[])

class recentlyEnforcedSpot {
  constructor(id, name, username, createdAt, minsPassed) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.createdAt = createdAt;
    this.minsPassed = minsPassed;
  }
}

async function doAll() {

  let pkArr = await axios.get('https://airgara.ge/api/spots/');
  let promises = [];
  let gD = {}
  let arr = []

  const epochTimeNow = Math.floor(new Date().getTime()/1000.0)

  pkArr.data.forEach(function(singleElement){ 
    promises.push(axios.get('https://airgara.ge/api/enforcements/', { params: { spot: singleElement.pk } }));
    gD[singleElement.pk] = singleElement.name 
  })

  let secondCall = await axios.all(promises)

  secondCall.forEach(function(each){
    let pid = each.config.params.spot
    let pname = gD[pid]
      
    if (each.data[0] !== undefined) { // some parking lots don't have any enforcements yet
      let mins_passed = (epochTimeNow - each.data[0].created_at)/60;
      arr.push(new recentlyEnforcedSpot(pid,
                                        pname,
                                        each.data[0].enforcer_username,
                                        each.data[0].created_at,
                                        Math.floor(mins_passed)
                                        ))
    }
  })

  return arr.sort(compare);

  function compare(a, b) {

    const minsPassedA = a.minsPassed;
    const minsPassedB = b.minsPassed;

    let comparison = 0;
    if (minsPassedA > minsPassedB) {
      comparison = 1;
    } else if (minsPassedA < minsPassedB) {
      comparison = -1;
    }
    return comparison;
  }

}

  if (sortedData === null) {
    return (
      <div>
          <h2> Loading...</h2>
      </div>
    )
  } else {
    return (
      <Enforcements
      sortedData={sortedData}
      />
    );
  }
}

export default App;
