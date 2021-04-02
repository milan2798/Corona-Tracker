import axios from "axios";
import {useState,useEffect} from 'react';
const count=1;

const stateInfo = {
  method: 'GET',
  url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api_india',
  headers: {
    'x-rapidapi-key': '959b4243e4mshbc54fc2a3419f89p1bb2d4jsndd5a39fb288f',
    'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com'
  }
};

const Info=()=>{
  const [state,setState]=useState([]);
  useEffect(() => {
    axios.request(stateInfo).then(function (response) {
      console.log(response.data);
      setState(response.data);
    }).catch(function (error) {
      console.error(error);
      setState(error);
    })
  },[count]);
  
  return state;
}
export default Info;
