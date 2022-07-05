import { createSignal, createEffect, createMemo } from "solid-js";

function fibonacci(num: number): number {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

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

  // Memo
  const fib = createMemo(() => fibonacci(count()));

  // setCount(c => c + 1)
  return (
    <button onClick={() => setCount(count() + 1)}>
      <p>COUNT {count()}</p>
      <p>DOUBLE {doubleCount()}</p>
      <p>FIB {fib()}</p>
    </button>
  );
};
