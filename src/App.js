import logo from './logo.svg';
import './App.css';
import corlog from './Component/corlog.png'
import axios from "axios";
import Info from './Component/api.js'
import { useState, useEffect } from 'react';
import Table from './Component/Table.js'
import Card from './Component/Card.js'


function App() {
  const [state, setstate] = useState([{}]);


  let db = Info();
  let dd = db.total_values;
  let dt = db.state_wise;
  let st = [];
  let p = "Andaman and Nicobar Islands";


  let keys = [];
  // loop through the keys
  dd ? keys = Object.keys(dd) : console.log("none");




  return (
    <div className="App">
      <div className="header">
        <div className="inheader">
          <h1>Corona Tracker</h1>
          <img src={corlog} /></div>

        {dd ? <p>Last Updated : {dd[keys[6]]}</p> : <p></p>}
      </div>
      <h2>India Info</h2>

      <hr style={{ width: "80%" }}></hr>

      {/* {dd ? console.log(keys) : null}
      {dd ? console.log(dd[keys[0]]) : console.log("none")} */}
      {dd ? <div className="countryi">
        <Card inf={dd[keys[0]]} deltainf={dd[keys[3]]} text="Active" color="Orange" tcolor="rgb(255 219 150)" />
        <Card inf={dd[keys[1]]} deltainf={dd[keys[3]]} text="Confirmed" color="yellow" tcolor="rgb(210 209 108)" />
        <Card inf={dd[keys[8]]} deltainf={dd[keys[5]]} text="Recovered" color="green" tcolor="green" />
        <Card inf={dd[keys[2]]} deltainf={dd[keys[4]]} text="Deaths" color="red" tcolor="red" />

      </div>
        : <h3>Data is Loading Please wait......</h3>}


      <h2>States Info</h2>
      <hr style={{ marginBottom: "20px", width: "80%" }}></hr>
      <table>
        <thead>
          <tr>
            <th>
              COUNTRY
        </th>
            <th>
              ACTIVE
        </th>
            <th>
              CONFIRMED
        </th>
            <th>
              RECOVERED
        </th>
            <th>
              DEATHS
        </th>
          </tr>
        </thead>
        <tbody>
          {dd ? Object.keys(dt).map((item, key) => (<Table key={key} active={dt[item].active} confirmed={dt[item].confirmed}
            deaths={dt[item].deaths}
            deltadeaths={dt[item].deltadeaths}
            deltaconfirmed={dt[item].deltaconfirmed}
            recovered={dt[item].recovered}
            deltarecovered={dt[item].deltarecovered}
            country={item} />)) : <tr><td colSpan="5">India Info Loading  ....</td></tr>}

        </tbody>
      </table>

    </div>
  );
}

export default App;
