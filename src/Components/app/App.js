import { Button } from "bootstrap";
import React, { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(1);
  const inc = () => {
    setCounter((counter += 1));
  };
  const dec = () => {
    setCounter((counter -= 1));
  };
  const zero = () => {
    setCounter((counter = 0));
  };
  const mul = () => {
    setCounter((counter *2));
  };
  return (
    <>
      <div className="col-6 bg-dark text-white offset-3 rounded-5 p-4 mt-5">
        <h1>Counter : {counter} </h1>
        <button
          className=" btn btn-primary text-white col-2"
          onClick={inc}
        >
          +
        </button>
        <button className=" btn btn-primary text-white col-2 mx-2" onClick={dec}>
          -
        </button>
        <button className=" btn btn-primary text-white col-2 " onClick={zero}>
          zero
        </button>
        <button className=" btn btn-primary text-white col-2 mx-2" onClick={mul}>
          *2
        </button>
      </div>
    </>
  );
};

export default App;
