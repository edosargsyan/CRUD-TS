import React from 'react'
import {useState} from 'react'
let DeleteUser:React.FC=()=>{
    const[value,setValue] = useState<string>('')
   
    return(
        <form className='delete'>
           <input type="text" name='id' value={value} onChange={e=>setValue(e.target.value)}/>
           <button type='submit'>Delete</button>
        </form>
    )
}

export default DeleteUser