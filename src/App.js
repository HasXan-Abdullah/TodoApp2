import React, { useState } from 'react';
import './App.css';
import ToDoLists from './ToDoList';
const App =()=>{

  //using hooks and state to display items

  const[inputList,setInputList]= useState("");

  // store state in array
  const [Items ,setItems] =useState([]);

 const itemEvent=(e)=>{
  setInputList(e.target.value);

 }
 const listOfitems=()=>{
  

   // oldItems is accessing data stored in array 
   setItems((oldItems) =>{
     //...is spread opertion
     return[...oldItems,inputList];
   })
setInputList("");
 }

 const deleteItems = (id)=>{
console.log('deleted');
setItems((oldItems)=>{
  return oldItems.filter((arrElm,index)=>{
    return index !==id;
     
  })
})
}
 

  return(
<>

          <div className='main_container' id='div'>
            <div className='head'>
                  <h1>Todo List</h1>

            </div>


            <div>

              <div className='additems'>

              <input className='inputitmes' type='text' placeholder='Add TODO' 
              value ={inputList}onChange={itemEvent}/>
              <button className='btnadd'  onClick={listOfitems}> +</button>
              </div>
              <div className='items'>
              <ol >
                
                {/* this map method will return all values stored in array */}
                {
                  Items.map((itemvalue,index) => {
                   return (
                   <ToDoLists
                    //passsing props
                    key={index}
                    id={index}
                    text={itemvalue}
                    onSelect ={deleteItems}
                    is_done='false'
                    />)
                  })
                 
                }
                 
              </ol>
              </div>
            </div>
          </div>

          </>
  )
}

export default App;