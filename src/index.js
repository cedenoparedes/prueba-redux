import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./styles.css";

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const Counter = ({ values, onIncrement, onDecrement }) => (
  <div>
    <h1>{values}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

const store = createStore(counter);
const rootElement = document.getElementById("root");

const render = () => {
  ReactDOM.render(
    <Counter
      values={store.getState()}
      onIncrement={() =>
        store.dispatch({
          type: "INCREMENT"
        })
      }
      onDecrement={() =>
        store.dispatch({
          type: "DECREMENT"
        })
      }
    />,
    rootElement
  );
};

store.subscribe(render);
render();
