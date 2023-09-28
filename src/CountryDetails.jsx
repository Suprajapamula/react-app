import axios from "axios";
import React, { useEffect,useState } from "react";
import { useLocation, useParams } from "react-router-dom";
function CountryDetails(){
    var x=useParams();
    var[details,setDetails]=useState(null)
    useEffect(()=>{
        axios.get("https://restcountries.com/v3/name/"+x.cname).then((res)=>{
            setDetails({...res.data[0]})
        })
    })
    return(
        <div>
        {console.log(details)}
        
        {typeof(details)==="object"&& details && <div className="myBox">
            <h1>{details.name.common}Country Details</h1> 
            <div style={{display:"flex",flexWrap:"wrap"}}>
                <div style={{width:"50%"}}>
                    <img src={details.flags[0]} style={{width:"100%"}}/>
                </div>
                <div style={{width:"40%", padding:"10px"}}>
                    <h1>name:{details.name.common}</h1>
                    <h2>Population:{details.population}</h2>
                    <h2>Capital:{details.capital}</h2>
                </div>
            </div>
        </div>}
        </div>
    )
}
export default CountryDetails