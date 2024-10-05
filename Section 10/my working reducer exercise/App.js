// WARNING - WON'T WORK LOCALLY !!!

import React from 'react';

export function counterReducer(state, action) {
    let data = {...state};
    if(action.type==='INCREMENT'){
        data.count += 1;
    }
    else if(action.type==='DECREMENT') {
        data.count -= 1;
    }
    else if(action.type==='RESET') {
        data.count = 0;
    }
    return data;
}

function App() {
  const [counterState, counterStateDispatch] = React.useReducer(counterReducer,{count: 0});
 
  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={()=>
            counterStateDispatch({
               type: 'INCREMENT' 
            })
        }>
            Increment
        </button>
        <button onClick={()=>
            counterStateDispatch({
               type: 'DECREMENT' 
            })
            
        }>
            Decrement
        </button>
        <button onClick={()=>
            counterStateDispatch({
               type: 'RESET' 
            })
        }>
            Reset
        </button>
      </p>
      <p id="counter">{counterState.count}</p>
    </div>
  );
}

export default App;