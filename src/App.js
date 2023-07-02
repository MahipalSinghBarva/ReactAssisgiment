import React, { useState } from 'react'
import './components/todo.css'
import Todolist from './components/todolist'



const App = () => {

  const [inputList, setInputList] = useState(" ");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList(" ");
  }; 

  const deleteItems = (id) => {
    console.log('deleted')

    setItems((oldItems)=>{
      return oldItems.filter((arrElem, index) => {   
         return index !==id;
      })
    })
}

  return (
    <>
    <div className = "containor" >
      <div className = "center_div" >
        <br />
        <h1>📜Add Your List Here</h1>
        <br />
        <input type="text" placeholder="add a Item" 
          value = {inputList} onChange={itemEvent}/>
        <button onClick= {listofItems} > + </button>

        <ol>
          {/* <li> {inputList} </li> */}
          {Items.map((itemval, index)=>{
          return <Todolist key={index}
          id={index} text={itemval}
          onSelect={deleteItems} />
          })}
        </ol>
      </div>
    </div>
    </>
  )
}

export default App;
