import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/actions/testAction";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  const dispatch = useDispatch();
  const stores = useSelector((state) => state);
  return (
    <div className="App">
      <Header />

      <Main />
    </div>
  );
}

export default App;
