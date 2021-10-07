import React from "react";
import { Provider } from "react-redux";
import store from "../store/Store";
import { CounterComponent } from "./CounterComponent";

export const CounterApp = () => {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
};
