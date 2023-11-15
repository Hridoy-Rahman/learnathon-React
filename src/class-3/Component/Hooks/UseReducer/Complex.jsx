import React, { useReducer } from "react";

const initialState = {
  counter1: 0,
  counter2: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,counter1: state.counter1 + action.value,
      };
    case "decrement":
      return { ...state,counter1: state.counter1 - action.value };
    case "increment2":
      return {
        ...state, counter2: state.counter2 + action.value,
      };
    case "decrement2":
      return {...state, counter2: state.counter2 - action.value };
    default:
      return state;
  }
};

const Complex = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {/* <div>
        <p>Count : {count.counter}</p>
        <button
          onClick={() =>
            dispatch({
              type: "increment",
              value: 1,
            })
          }
        >
          Increment by 1
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "increment",
              value: 5,
            })
          }
        >
          Increment by 5
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "decrement",
              value: 1,
            })
          }
        >
          Decrement by 1
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "decrement",
              value: 5,
            })
          }
        >
          Decrement by 5
        </button>
      </div> */}
      <div>
        <p>Count : {count.counter1}</p>
        <button
          onClick={() =>
            dispatch({
              type: "increment",
              value: 1,
            })
          }
        >
          increment by 1
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "decrement",
              value: 1,
            })
          }
        >
        decrement by 1
        </button>

        <p>Count : {count.counter2}</p>
        <button
          onClick={() =>
            dispatch({
              type: "increment2",
              value: 1,
            })
          }
        >
          Increment by 1
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "decrement2",
              value: 1,
            })
          }
        >
          decrement by 1
        </button>
      </div>
    </div>
  );
};

export default Complex;
