import './App.css';
import corlog from './Component/corlog.png'
import Info from './Component/api.js'
import Table from './Component/Table.js'
import Card from './Component/Card.js'
import Search from './Component/Search';
import Darkmode from 'darkmode-js';

const options = {
  bottom: '50px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}
function App() {


  let db = Info();
  let dd = db.total_values;
  let dt = db.state_wise;
  // let det = [];


  let keys = [];
  // loop through the keys
  dd ? keys = Object.keys(dd) : console.log("none");
  // dd ? det = Object.keys(dt).map((item) => dt[item].district):console.log("");
  // dd?console.log(det):console.log("");




  return (
    <div className="App">
      {new Darkmode(options).showWidget()}
      <div className="header">
        <div className="inheader">
          <h1>Corona Tracker</h1>
          <img src={corlog} alt="corona img" /></div>

        {dd ? <p>Last Updated : {dd[keys[6]]}</p> : <p></p>}
      </div>
      <Search info={dt} />
      <h2 className="countryname"><span>India Info</span></h2>
      {console.log("render")}
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
    

      <h2 className="statename"><span>States Info</span></h2>
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
