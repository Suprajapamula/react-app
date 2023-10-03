import React from 'react';
import {useFormik} from 'formik'; 
import * as Yup from 'yup';
import axios from 'axios';
function Studentform(){
    var [students,setStudents]=React.useState([])
    var studentform=useFormik({
        initialValues:{
          firstname:'',
          lastname:'',
          gender:'',
          age:'',
          password:'',
          username:''
        },
        validationSchema:Yup.object({
            firstname:Yup.string().required("First name is manditory").min(2,"name should have minimum of 2 charecters"),
            lastname:Yup.string().required("First name is manditory"),
            username:Yup.string().required("Username is manditory").test({
                name:'check username asynchronous',
                message:'username is already exist',
                test:((value,a)=>{
                    var p=new Promise((resolve,reject)=>{
                        axios.get(`https://jsonplaceholder.typicode.com/users?username=${value}`)
                        .then((res)=>{
                                if(res.data.length!==0){
                                    reject(a.createError({message:"This user is already exist"}))
                                }
                                else{
                                    resolve(true)
                                }
                        })
                    })
                    return p;
                })
            }),
            
            password:Yup.string().required("password is manditory").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,"password should include atleast 4-8 charecters..."),
            age:Yup.string().required("age is manditory").test({
                name:'genderBaseAgeValidation',
                message:'You are unfit for Marriage',
                test:(value,a)=>{
                        if(a.parent.gender==='male' && value<21){
                            return false
                        }
                        if(a.parent.gender==='female' && value<18){
                            return false
                        }
                   return true;
                }
            }),
        }),
        onSubmit:(values)=>{
            setStudents([...students,values])
        }
      })
    return(
        <div style={{padding:'10px',margin:'10px',border:'1px solid black'}}>
            
            <h1>Student login Form</h1>
            <form onSubmit={studentform.handleSubmit}>
                   <input type="text" placeholder="firstname" name="firstname" onBlur={studentform.handleBlur} onChange={(studentform.handleChange)}/>
                   <div>
                    <b>{studentform.touched.firstname && studentform.errors.firstname}</b>
                   </div>
                   <br/>
                   <input type="text" placeholder="lastname" name="lastname" onBlur={studentform.handleBlur} onChange={(studentform.handleChange)}/>
                   <div>
                    <b>{studentform.touched.lastname && studentform.errors.lastname}</b>
                   </div>
                   <br/>
                   <div>
                   <input type="text" placeholder="age" name="age" onBlur={studentform.handleBlur} onChange={(studentform.handleChange)}/><br/>
                    <b>{studentform.touched.age && studentform.errors.age}</b>
                   </div>
                   <input type="radio" name="gender" value="male" onBlur={studentform.handleBlur} onChange={(studentform.handleChange)}/>:Male
                   <input type="radio" name="gender" value="female" onBlur={studentform.handleBlur} onChange={(studentform.handleChange)}/>:Female
                   <div>
                    <b>{studentform.touched.firstname && studentform.errors.firstname}</b>
                   </div>
                   <br/>
                   <input type="text" placeholder="Username" name="username" onBlur={studentform.handleBlur} onChange={(studentform.handleChange)}/><br/>
                   <div>
                    <b>{studentform.touched.username && studentform.errors.username}</b>
                   </div>
                   <input type="text" placeholder="password" name="password" onBlur={studentform.handleBlur} onChange={(studentform.handleChange)}/><br/>
                   <div>
                    <b>{studentform.touched.password && studentform.errors.password}</b>
                   </div>
                   <button>Add Student</button>
            </form>
            <hr/>
            <ul style={{display:"flex",flexWrap:"wrap"}}>
            {
                students.map((student)=>{
                    return (
                        <li style={{width:"100x",listStyle:'none',border:'1px solid gray',padding:'10px',margin:'10px'}}>
                            <h3>{student.firstname}</h3>
                            <h3>{student.lastname}</h3>
                            <h3>{student.age}</h3>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}
export default Studentform;