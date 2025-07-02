import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const calculateNewState = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const ReducerComp = () => {
  const [state, dispatch] = useReducer(calculateNewState, initialState);

  return (
    <div>
      <h2>Count:- {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default ReducerComp;
