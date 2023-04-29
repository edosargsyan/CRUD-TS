import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Post} from './Post'
import  UpdateUser  from './UpdateUser'
import { Posts } from './Posts'
import DeleteUser from './deleteUser'
import { Link } from 'react-router-dom'
const Main:React.FC=()=>{
    return(
        <div className='main'>
            <Routes>
                <Route path="/" element={<Posts/>}/>
                <Route path={'/users/:_id'} element={<Post/>}/>
                <Route path={'/users/update/:_id'} element={<UpdateUser/>}/>
                <Route path={'/users/delete/'} element={<DeleteUser/>}/>
            </Routes>
         

        </div>
    )
}   
export default Main