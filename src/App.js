import React from "react";
import './App.css'
import { useState } from "react";

function App() {
  const [data,setData] = useState([]);
const [search,setSearch] = useState("");
useEffect(()=>{
  fetch("https://emoji-api.com/emojis?access_key=6f3f6f9c0ec1e91527af05cb0e92e9e9f1cd07db").then((res)=>{
    return res.json();
  }).then((result)=>{
    setData(result)
  })
},[])
const onSubmit = ()=>{
  if (search !=="") {
    fetch(`https://emoji-api.com/emojis?search=${search}&access_key=6f3f6f9c0ec1e91527af05cb0e92e9e9f1cd07db`).then((res)=>{
      return res.json();
    }).then((result)=>{
      if (result) {
        setData(result)
      }else{
        setData([]);
      }
    })
  }
}
  return (
    <div className="App">
    <div className="menu">
      <div className="menu_text">
      <h1>Emoji Search</h1>
      <p>A Simple Emoji Search with React</p>
      <div>
      <input type="text" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <button className="search" onClick={onSubmit}>Search</button>
      </div>
      </div>
    </div>
    <div className="container">
      {
        data.map((cuElem,id)=>{
          return <div className="card" key={id}>
          <p className="em">{cuElem.character}</p>
          <p className="name">{cuElem.unicodeName}</p>
        </div>
        })
      }
    </div>
  </div>
  );
}

export default App;
