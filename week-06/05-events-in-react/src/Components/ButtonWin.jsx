import "./ButtonWin.css";

// react cannot track the changes in this component without a hook: hooks are React default functions that track updates in components (updates in state, updates in effec ts...)

// the keyword for hooks is use... --> to track updates in state, we will use useState
import { useState } from "react"; //destructuring --> extracting useState individually from react
export default function ButtonWin() {
  // This is my state
  //   let count = 0

  // structure
  // let [stateName, mutationFunction,] = useState("initialValue"); Which is below __
  let [count, setCount] = useState(0);

  // we CANNOT update the value opf our state withou the mutation function
  function handleClick() {
    setCount(count + 1);
  }
  function resetClick() {
    setCount(0);
  }
  function reduceClick() {
    setCount(count - 1);
  }
  return (
    <>
      <p>{`This is the count: ${count}`}</p>
      <button className="buttonWin" onClick={() => handleClick()}>
        Click to count!
      </button>
      <button className="buttonWin" onClick={() => reduceClick()}>
        Lower Count!
      </button>
      <button className="buttonWin" onClick={() => resetClick()}>
        Reset Count
      </button>
    </>
  );
}
