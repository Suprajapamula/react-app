
import React from 'react'
import { useGetAllCountriesQuery } from '../../services/countries'
import {Link, Outlet} from 'react-router-dom'

function Countries() {
    var {isLoading,data}=useGetAllCountriesQuery()
    console.log(isLoading);
  return (
    <div className='myBox'>
        <h1>Countries</h1>
        <div style={{display:'flex',flexWrap:'wrap'}}>
        <ul style={{width:'20%'}}>
            {
                isLoading && <img src="https://cdn.dribbble.com/users/583436/screenshots/1725368/out.gif" alt="imgEl"/>
            }
            {
                data && data.map((country)=>{
                    return <li>
                                <Link to={`countryDetails/${country.name.common}`}>{country.name.common}</Link>
                           </li>
                })
            }
        </ul>
        <div style={{width:'70%'}}>
           <Outlet></Outlet>
        </div>
        </div>
    </div>
  )
}
export default Countries
