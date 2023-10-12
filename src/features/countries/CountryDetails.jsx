import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCountryDetailsByNameQuery } from '../../services/countries'

function CountryDetails() {
    var {cname}=useParams()
    var {data,isLoading}=useGetCountryDetailsByNameQuery(cname)
  return (
    <div className='myBox'>
        <h1>Country Details of {cname}</h1>
        {
            isLoading && <img src="https://cdn.dribbble.com/users/583436/screenshots/1725368/out.gif" alt="imgEl"/>
        }
        {
            data && <img src={data[0].flags[0]} style={{width:"400px"}}/>
        }
    </div>
  )
}
export default CountryDetails