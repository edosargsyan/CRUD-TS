import { useEffect } from 'react'
import {Dispatch} from 'redux'
import { UserAction } from '../types/type'

export const delUsers=(id:string)=>{
    return function(dispatch:Dispatch<UserAction>){
        fetch(`/posts/${id}`,{
            method:"DELETE"
        })
        .then(()=>dispatch({type:'DELETE',payload:id}))
        .catch(()=>console.log('error'))
    }
    
}