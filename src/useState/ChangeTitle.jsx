import React, { useState } from 'react'

const ChangeTitle = () => {
    const[title,setTitle]=useState('Hello')

    
    const handeleCLick = ()=>{
        if (title==='Hello') {
            setTitle('Hello world')
            
            
            
        } else {
            setTitle('Hello')
            
        }
    }
  return (
    <> 
    <h1 className='text-center display-3' >{title}</h1>
    <button onClick={handeleCLick} className='btn btn-lg m-auto d-flex mt-3 btn-primary'>Change</button>
    </>
  )
}

export default ChangeTitle