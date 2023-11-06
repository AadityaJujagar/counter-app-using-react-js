import { useState } from "react";
import "./App.css";

function App() {
  // for rendering on UI simultenously
  const [count, setCount] = useState(0);

  // change handlers
  const decHandler = () => {
    setCount(count - 1);
  };
  const incHandler = () => {
    setCount(count + 1);
  };
  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">
        Increment and Decrement
      </div>
      <div className="bg-white flex justify-center items-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button
          onClick={decHandler}
          className="border-r-2 text-center w-20  border-[#bfbfbf] text-5xl"
        >
          -
        </button>
        <div className="100vw">{count}</div>
        <button
          onClick={incHandler}
          className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          +
        </button>
      </div>
      <button
        onClick={resetHandler}
        className="bg-[#0398d4] py-2 px-5 text-white rounded-sm text-lg"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
