import { createResource, createSignal, For, Show } from "solid-js";

type Result = { docs: { title: string }[] };

export async function searchBooks(query: string) {
  if (query.trim() === "") return [];
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURI(query)}`
  );
  const results: Result = await response.json();
  return results.docs.slice(0, 10).map(({ title }) => title);
}

export default () => {
  const [query, setQuery] = createSignal<string>("");

  const [data] = createResource(query, searchBooks);

  return (
    <>
      <form>
        <input
          type="text"
          id="query"
          value={query()}
          onInput={(e) => setQuery(e.currentTarget.value)}
        />
      </form>
      <Show when={!data.loading} fallback={<p>Searching</p>}>
        <ul>
          <For each={data()}>{(book) => <li>{book}</li>}</For>
        </ul>
      </Show>
    </>
  );
};
