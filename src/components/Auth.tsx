// Condition

import { Match, Show, Switch } from "solid-js";
import { Dynamic } from "solid-js/web";

interface IAuthProps {
  isLoggedIn: boolean;
  username?: string;
}

export default (props: IAuthProps) => {
  const fallback = <p>Plz login</p>;
  const switchDefault = <p>Not Logged in</p>

  return (
    <>
      <Show when={props.isLoggedIn} fallback={fallback}>
        <p>Welcome {props.username}</p>
      </Show>
      <Switch fallback={switchDefault}>
        <Match when={props.isLoggedIn && props.username === "Cyan"}>
          <p>Welcome Admin.</p>
        </Match>
        <Match when={props.isLoggedIn}>
          <p>{props.username} here.</p>
        </Match>
      </Switch>
    </>
  );
};

// Since component functions run only once in Solid,
// handling control flow by returning early from a component function won't work.
