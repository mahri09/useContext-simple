import React,{useState} from 'react';
import "./App.css"
import {MyContext} from '../context/MyContext';
import Family from './Family'

function App() {

  const initialState={
    age: 33,
    name: 'Mahri'
  }
  const [state, setState] = useState(initialState)
  
  const growOlder=()=>{
    return setState({...state, age:state.age+1})
  }

  return (
    <MyContext.Provider value={{state,growOlder}}>
      <div className="App">
        <Family/>
      </div>
    </MyContext.Provider>
  )
}

export default App;