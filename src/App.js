import React, { useEffect, useLayoutEffect} from 'react';
import './App.css';

function App() {

  useEffect(() => {
    console.log('use effect lifecycle : componentDidMount');
  }, [])

  useLayoutEffect(() => {
    console.log('use layout effect lifecycle : componentDidMount');
  }, [])

  console.log('render lifecycle');
  return (
    <div className="App">
      <div>
        <label>Your name</label>
        <input type='text' autoComplete='off'/>
      </div>
    </div>
  );
}

export default App;


// In console,
// Before the return statement I’ve added a couple console messages to see the order of those messages.

// useLayoutEffect and useEffect are only being executed after a component did mount lifeycle.