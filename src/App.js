import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Info from './Component/api.js'
import {useState,useEffect} from 'react';
import Table from './Component/Table.js'
import Card from './Component/Card.js'


function App() {
   const [state, setstate] = useState([{}]);
  
    
    let db=Info(); 
    let dd=db.total_values;
    let dt=db.state_wise;
    let st=[];
    let p="Andaman and Nicobar Islands";
    if(dt!==""){
      let i=0;
      for(let tt in dt){
         st[tt]=dt[tt];
         i++;
      }
    }
    let keys=[];
    // loop through the keys
    dd? keys = Object.keys(dd):console.log("none");
  



  return (
    <div className="App">
      <h1>Corona Tracker</h1>
      <h2>India Info</h2>
       
      {dd? console.log(keys):null}
      {dd? console.log(dd[keys[0]]):console.log("none")}
      <ul>
      <li>active : {dd?dd[keys[0]]:null}</li>
      </ul>
      <div class="countryi">
         <Card  inf={dd?dd[keys[0]]:null} color="green"/>
         <Card inf={dd?dd[keys[1]]:null} color="red"/>
         <Card inf={dd?dd[keys[2]]:null} color="yellow"/>
      </div>
     
      <h2>State Info</h2>
     
      <table>
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
      {dd?Object.keys(dt).map((item,active,confirmed,deaths,recovered,key)=>(<Table key={key} active={dt[item].active} confirmed={dt[item].confirmed} 
      deaths={dt[item].deaths}  
      recovered={dt[item].recovered} 
      country={item} />)):<tr>India Info Loading  ....</tr>}

     
     </table>

    </div>
  );
}

export default App;
