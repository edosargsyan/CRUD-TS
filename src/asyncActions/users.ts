import { useEffect } from 'react'
import {Dispatch} from 'redux'
import { UserAction } from '../types/type'

export const fetchUsers=()=>{
    return function(dispatch:Dispatch<UserAction>){
            fetch('/posts').then(resp=>resp.json()).then(resp=>{
                dispatch({type:"ADDUSERS",payload:resp})
             }) 
    }
    
}