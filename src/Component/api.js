import axios from "axios";
import {useState,useEffect} from 'react';
const count=1;

const stateInfo = {
  method: 'GET',
  url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api_india',
  headers: {
    'x-rapidapi-key': 'YOUR_RAPID_API_KEY',
    'x-rapidapi-host': 'YOUR_RAPID_API_HOSTKEY'
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
