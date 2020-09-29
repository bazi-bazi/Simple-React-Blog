import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/actions/testAction";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const stores = useSelector((state) => state);
  return (
    <div className="App">
      <h1> {stores.test} </h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
}

export default App;
