import { useState } from "react";

const FunctionalComponent = (props) => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const handleIncreaseValue = () => {
    setCount(count + 1);
  };
  const handledecreaseValue = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Name : {props.name}</p>
      <p>Email : {props.email}</p>
        <p>Eligiblity : {props.passion==='Coding' ? "Eligible" : "Not eligible"} </p>

      <p>
        Count Value: <span style={{ color: "lime" }}>{count}</span>
      </p>
      <button onClick={() => handleIncreaseValue()}>Increase Value</button>
      <button onClick={() => handledecreaseValue()}>Decrease Value</button>
    </div>
  );
};

export default FunctionalComponent;
