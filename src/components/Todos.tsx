// Looping over items

import { createSignal, For } from "solid-js";

interface IToDoCardProps {
  content: string;
}

const toDoData = ["Read some books", "Do the dishes"];

const ToDoCard = (props: IToDoCardProps) => {
  return <li>{props.content}</li>;
};

export default () => {
  const [toDoList, setToDoList] = createSignal(toDoData);

  return (
    <ul>
      <For each={toDoList()}>{(content) => <ToDoCard content={content} />}</For>
    </ul>
  );
};
