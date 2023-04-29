
import {UsersState,UserAction} from '../../types/type'
import {combineReducers} from 'redux'
let initialState:UsersState = {
    users:[]
}

export let addUserReducer = (state=initialState,action:UserAction):UsersState=>{
    switch(action.type){
          case "ADDUSERS":
          return {...state,users:[...action.payload]}
            default:
                 return state
    }
}

// export const addUsers = (payload)=>({type:"ADDUSERS",payload})


export type RootState = ReturnType<typeof addUserReducer>
