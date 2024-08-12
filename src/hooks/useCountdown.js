import { useState, useEffect } from "react";

function useCountdown(initialCount) {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    if (isCounting && count > 0) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isCounting, count]);

  function startCount() {
    setIsCounting(true);
    setCount(initialCount);
  }

  function stopCount() {
    setIsCounting(false);
    setCount(0);
  }

  return { count, startCount, stopCount };
}

export default useCountdown;
