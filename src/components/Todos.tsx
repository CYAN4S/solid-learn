// Looping over items

import { createSignal, For, Index, JSX, Setter } from "solid-js";

type EventHandler = JSX.EventHandlerUnion<
  HTMLFormElement,
  Event & { submitter: HTMLElement }
>;

const initial = ["Read some books", "Do the dishes"];

// ToDoCard
interface IToDoCardProps {
  content: string;
}

const Li = (props: IToDoCardProps) => {
  return <li>{props.content}</li>;
};

// Editor
interface IEditorProps {
  setToDoList: Setter<string[]>;
}

const Editor = (props: IEditorProps) => {
  const [newToDo, setNewToDo] = createSignal("");

  const onSubmit: EventHandler = (e) => {
    e.preventDefault();
    props.setToDoList((v) => [...v, newToDo()]);
    setNewToDo("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        id="content"
        onInput={(e) => setNewToDo(e.currentTarget.value)}
        value={newToDo()}
      />
      <button type="submit">+</button>
    </form>
  );
};

// Todos
export default () => {
  const [toDoList, setToDoList] = createSignal(initial);

  // Derived state
  const toDoCount = () => toDoList().length;

  return (
    <>
      <p>{toDoCount()}</p>

      {/* Loop */}
      <ul>
        <For each={toDoList()}>
          {(content, i) => (
            <>
              <b>INDEX {i() + 1}</b>
              <Li content={content} />
            </>
          )}
        </For>
      </ul>

      <ul>
        <Index each={toDoList()}>
          {(content, i) => (
            <>
              <b>INDEX {i + 1}</b>
              <Li content={content()} />
            </>
          )}
        </Index>
      </ul>

      <Editor setToDoList={setToDoList} />
    </>
  );

  // Array map method still works in Solid, but it's not optimal.
};
