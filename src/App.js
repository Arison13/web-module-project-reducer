import React, {useReducer} from 'react';

import reducer, {initialState} from './reducers'
import {  applyMemory, applyNumber, changeOperation, clearDisplay, clearMemory, setMemory } from './actions';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

 
function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  console.log("current state", state);

  const handleOperation = (num) => {
    dispatch(applyNumber(num))
  }

  const changeOperator = (operation) => {
    dispatch(changeOperation(operation))
  }
  
  const handleClear = () => {
    dispatch(clearDisplay());
  }

  const handleSetMemory = () => {
    dispatch(setMemory());
  }
  
  const handleClearMemory = () => {
    dispatch(clearMemory());
  }

  const handleApplyMemory = () => {
    console.log("Clicking")
    dispatch(applyMemory())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={()=> handleSetMemory(1)} />
              <CalcButton value={"MR"}onClick={()=> handleApplyMemory()}/>
              <CalcButton value={"MC"}onClick={()=> handleClearMemory()} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=> handleOperation(1)} />
              <CalcButton value={2} onClick={()=> handleOperation(2)}/>
              <CalcButton value={3} onClick={()=> handleOperation(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=> handleOperation(4)}/>
              <CalcButton value={5} onClick={()=> handleOperation(5)}/>
              <CalcButton value={6} onClick={()=> handleOperation(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=> handleOperation(7)}/>
              <CalcButton value={8} onClick={()=> handleOperation(8)}/>
              <CalcButton value={9} onClick={()=> handleOperation(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=> changeOperator("+")}/>
              <CalcButton value={"*"} onClick={()=> changeOperator("*")}/>
              <CalcButton value={"-"} onClick={()=> changeOperator("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=> handleClear()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
