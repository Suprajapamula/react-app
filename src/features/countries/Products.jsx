import React from 'react'
import { useGetAllProductsQuery } from '../../services/products'

function Products() {
    var {data,isLoading}=useGetAllProductsQuery();
    console.log(data);
  return (
    <div className='myBox'>
        <h1>Products</h1>
        <ul>
        {
            isLoading && <img src="https://cdn.dribbble.com/users/583436/screenshots/1725368/out.gif" alt="imgEl"/>
        }
        {
            data && data.map((product)=>{
                return <li>{product.title}</li>
            })
        }
        </ul>
    </div>
  )
}
export default Products
