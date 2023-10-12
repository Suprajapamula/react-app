import React from 'react'
import {useFormik} from 'formik'
import { useAddProductMutation } from '../../services/products'
function AddProduct() {
  var [addFn]=useAddProductMutation()
  var productForm=useFormik({
    initialValues:{
        "title":'',
        "price":0,
        "description":'',
        "category":'',
        "image":'',
        "rating":{
          "rate":'',
          "count":''
        }

    },
    onSubmit:(values)=>{
      addFn(values).then(()=>{
        alert("product added sucessfully")
      })
    }
  })
  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={productForm.handleSubmit}>
          <input type="text" placeholder='title' name="title" onChange={productForm.handleChange} onBlur={productForm.handleBlur}/><br/>
          <input type="text" placeholder='price' name="price" onChange={productForm.handleChange} onBlur={productForm.handleBlur}/><br/>
          <input type="text" placeholder='description' name="description" onChange={productForm.handleChange} onBlur={productForm.handleBlur}/><br/>
          <input type="text" placeholder='category' name="category" onChange={productForm.handleChange} onBlur={productForm.handleBlur}/><br/>
          <input type="text" placeholder='image' name="image" onChange={productForm.handleChange} onBlur={productForm.handleBlur}/><br/>
          <button type="submit">Add Product</button>
      </form>
    </div>
  )
}
export default AddProduct