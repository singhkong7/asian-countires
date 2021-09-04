import React,{useState,useEffect} from 'react'
import Axios from "axios";
import Details from './Details';
const Homepage = () => {
    const[items,setItems]=useState([]);
    useEffect(async ()=>{
    await Axios .get(`https://restcountries.eu/rest/v2/region/asia`).then((response)=>{
        setItems(response.data)
        }
    )
    },[items])
 
  return (
    <div className="ui grid container">
      <Details items={items} />
    </div>
  )
}

export default Homepage
