// Condition

import { Show } from "solid-js";

interface IAuthProps {
  isLoggedIn: boolean;
  username?: string;
}

export default (props: IAuthProps) => {
  return (
    <Show when={props.isLoggedIn} fallback={<p>Plz login</p>}>
      <p>Welcome {props.username}</p>
    </Show>
  );
};

// Since component functions run only once in Solid,
// handling control flow by returning early from a component function won't work.
