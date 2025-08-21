
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[data,setData]=useState("");

  const handleChange=(e)=>{

    const text=e.target.value;
    setData(`Hello, ${text}!`)

  }
  return (
    <div>
        
        <label >Enter your name:</label><br/>
        <input type="text" onChange={handleChange}/>
        <p>{data}</p>
    </div>
  )
}

export default App
