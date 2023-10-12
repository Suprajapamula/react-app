import React from 'react'
import {useLazyGetAllProductsQuery,useGetAllProductsQuery,useDeleteProductMutation } from '../../services/products'
import axios from 'axios';

function Products() {
    var {data,isLoading}=useGetAllProductsQuery();
    console.log(data);
    var [fn,state]=useDeleteProductMutation();
    var [rfn]=useLazyGetAllProductsQuery();
    function deleteProduct(id){
         fn(id).then((res)=>{
            alert("Deleted Sucessfully");
            rfn()
         })
    }
    //function deleteProduct(id){
    //    axios.delete(`http://localhost:4000/products/${id}`).then(()=>{
    //       alert("Deleted sucessfully")
    //   })
    //}
  return (
    <div className='myBox'>
        <h1>Products</h1>
        <ul>
        {
            isLoading && <img src="https://cdn.dribbble.com/users/583436/screenshots/1725368/out.gif" alt="imgEl"/>
        }
        {
            data && data.map((product)=>{
                return <li>
                    {product.title}
                    <button onClick={()=>{deleteProduct(product.id)}}>Delete</button>
                </li>
                    
            })
        }
        </ul>
    </div>
  )
}
export default Products