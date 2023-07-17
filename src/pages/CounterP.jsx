import { useEffect, useState } from "react";

function CounterP() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let clear = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      console.log("setInterval");
    }, 1000);

    return () => {
      clearInterval(clear);
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default CounterP;
