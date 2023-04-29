import React from 'react'
import { useDispatch} from "react-redux";
import { useParams} from 'react-router-dom'
import { fetchUsers } from '../asyncActions/users'
import {delUsers} from '../asyncActions/deleteUser'
import { Link } from "react-router-dom";
import { useTypesSelector } from '../hooks/useTypedSelector';
import {useEffect} from 'react'
import type{} from 'redux-thunk/extend-redux'

export const Post:React.FC=()=>{
    const {_id} = useParams()
    let dispatch = useDispatch()
    let users = useTypesSelector(state=>state.users)
     console.log(users)
     useEffect(()=>{
       dispatch(fetchUsers())
     },[])
   function del(){
       fetch(`/posts/${_id}`,{
           method:"DELETE"
       })
       .then(()=>console.log('yes'))
       .catch(()=>console.log('error'))
   }

    return(
    <div>
        {users.map(item=>{
            if(_id===item._id){
                return(
                <div key={item._id} className="userPage">
                      <div className="about">
                        <span>name-{item.name}</span>
                        <span>lastname-{item.lastname}</span>
                        <span>age-{item.age}</span>
                        <span>username-{item.username}</span>
                        <span>email-{item.email}</span>
                        <span>password-{item.password}</span>
                        <span>id-{item._id}</span>
                      <Link to={"/users/update/"+item._id}><button>Change User</button></Link>
                      <form action="" onSubmit={del}>
                        <button type='submit'>Delete</button>
                        </form>
                      </div>
                </div>
                )
            }
        })}
    </div>
    )   
}