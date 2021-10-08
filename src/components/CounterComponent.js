import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApiAsync } from "../actions/ApiAsync";
import {
  decrementCounter,
  incrementAsyncxCounter,
  incrementCounter,
  resetCounter as reset,
} from "../actions/Counter";

export const CounterComponent = () => {
  const data = useSelector((store) => store);
  // console.log("data", data);
  const { counter, dataApi } = data;
  console.log("dataApi", dataApi);
  const { img, name, nickname, category } = dataApi;
  const dispatch = useDispatch();
  //usando la api
  useEffect(() => {
    dispatch(ApiAsync(counter));
  }, [counter]);
  //fin usando la api
  const handlerIncrementCounter = () => {
    //dispatch(incrementAsyncxCounter(1));
    dispatch(incrementCounter(1));
  };
  const handlerDecrementCounter = () => {
    dispatch(decrementCounter(1));
  };
  const resetCounter = () => {
    dispatch(reset(0));
  };
  return (
    <div className="container">
      <div className="row aling-items-start">
        <div className="col">
          <button className="btn btn-primary" onClick={handlerIncrementCounter}>
            +1
          </button>
        </div>
        <div className="col">
          <img src={img} width="300px" height="350px" />
          <br />
          <span>{name}</span>
          <br />
          <span>{nickname}</span>
          <br />
          <span>{category}</span>
        </div>
        <div className="col">
          <button className="btn btn-danger" onClick={handlerDecrementCounter}>
            -1
          </button>
        </div>
        {/* <p>{counter}</p> */}
      </div>
      <button className="btn btn-warning" onClick={resetCounter}>
        reset
      </button>
    </div>
  );
};
