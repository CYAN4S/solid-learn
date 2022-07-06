import { onCleanup, onMount } from "solid-js";

export default () => {
  onMount(() => console.log("Hi! :)"));
  onCleanup(() => console.log("Bye! ;)"));

  return <div>LIFECYCLE</div>;
};
