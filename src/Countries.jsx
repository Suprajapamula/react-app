import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'
function Countries(){
    var[countries,setCountries]=useState([])
    useEffect(()=>{
      axios.get("https://restcountries.com/v3/all").then((res)=>{
        setCountries([...res.data])
        
    })
  },[])
    return (
        <div className='myBox'>
            <h1>Countries</h1>
            <div style={{display:"flex",flexWrap:"wrap"}}>
               <div style={{width:"50%"}}>
                  <ul id="countries">
                  {
                      countries.length>0 && countries.map((country)=>{
                          return (<li>
                                    <h4>{country.name.common}</h4>
                                    <img src={country.flags[0]}/>
                                    <Link to={"/countries/countrydetails/"+country.name.common} state={country}>Read more</Link>
                            </li>)

                      })
                  }
                </ul>
               </div>
               <div style={{width:"50%"}}>
                   <h1>Details</h1>
                   <Outlet></Outlet>
               </div>
          </div>
        </div>
    )
    
}
export default Countries  