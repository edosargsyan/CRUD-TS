import {useState } from "react";
import React from "react";
import {Link, useNavigate, useParams} from 'react-router-dom'
import {IUsers} from '../types/type'
let UpdateUser:React.FC=()=>{
    const[value,setValue] = useState<IUsers>({name:'',lastname:'',age:'',username:"",email:"",password:""})
    const {_id} = useParams()
    const navigate = useNavigate()
    function update(){
 fetch('/posts',{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            _id,
            name:value.name,
            lastname:value.lastname,
            age:value.age,
            username:value.username,
            email:value.email,
            password:value.password
        })
    })
    .then(()=>console.log('success'))
}
      return(
        <form onSubmit={update} className='update'>
             <input type="text" placeholder="name" name='name' onChange={(e)=>setValue({...value,name:e.target.value})}/>
             <input type="text" placeholder="lastname" name='lastname' onChange={(e)=>setValue({...value,lastname:e.target.value})}/>
             <input type="text" placeholder="age" name="age" onChange={(e)=>setValue({...value,age:e.target.value})}/>
             <input type="text" placeholder="username" name="username" onChange={(e)=>setValue({...value,username:e.target.value})}/>
             <input type="text" placeholder="email" name="email" onChange={(e)=>setValue({...value,email:e.target.value})}/>
             <input type="text" placeholder="password" name="password" onChange={(e)=>setValue({...value,password:e.target.value})}/>
             <button type="submit">Update</button>
        </form>
      )
}
export default UpdateUser