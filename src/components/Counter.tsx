import { createSignal, createEffect } from "solid-js";

export default () => {
  // Signals
  // getter(not value itself), setter
  const [count, setCount] = createSignal(0);

  // Effects
  // Automatic effect dependency tracking
  createEffect(() => {
    console.log("The count is now", count());
  });

  // Derived Signals
  const doubleCount = () => count() * 2;

  // setCount(c => c + 1)
  return <button onClick={() => setCount(count() + 1)}>
    <p>COUNT {count()}</p>
    <p>DOUBLE {doubleCount()}</p>
    </button>;
};
