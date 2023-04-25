import React from 'react';
import "./App.css";


const name = <span>And Hii Ajay</span>

const newElement=React.createElement('h2', {className:'newElement'}, 'Hello H2 Tag');  //This Component Using Without JSX 

const test= () =>{
  alert('Hello Ajay');
}

const age = (age) =>{
  if(age>=18){
    return <i>you are elegible .</i>
  }
  else{
    return <i>you are not elegible .</i>
  }
}

function App() {
  return (
    <div className='App'>
      <h1>Hello World ! , {name}</h1>
      {newElement}
      {/* <button onClick={test}>Submit</button> */}
      {age(18)}
    </div>
  )
}

export default App
