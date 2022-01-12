import react from 'react';
import React, { useState } from 'react';
import './App.css';
const ToDoLists =(props)=>{
   
      
    return (
        <>
        <div className='itemsvalue'>
        <li  
           >{props.text}</li>
        <button className='btn1' onClick={
            ()=>{
                props.onSelect(props.id)
            }
        }>X</button>
        <button id='btn2' className='btn2'
      
        
        
        >🗸</button>
        </div>
        </> 
        )
}
export default ToDoLists;
