import { createSignal, createEffect } from "solid-js";

export default () => {
  const [count, setCount] = createSignal(0);

  // setInterval(() => setCount(count() + 1), 1000);
  // Or use setCount(c => c + 1);

  createEffect(() => {
    console.log("The count is now", count());
  });

  return <button onClick={() => setCount(count() + 1)}>COUNT {count()}</button>;
};
