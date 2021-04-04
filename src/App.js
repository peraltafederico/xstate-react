import "./styles.css";
import { useMachine } from "@xstate/react";
import machine from "./machine";

import cn from "classnames";

export default function App() {
  const [current] = useMachine(machine);

  return (
    <div className="App">
      <h1>State Machine :)</h1>
      <div className="box-container">
        <div
          className={cn("box stop", {
            active: current.matches("stop")
          })}
        />
        <div
          className={cn("box ready", {
            active: current.matches("ready")
          })}
        />
        <div
          className={cn("box go", {
            active: current.matches("go")
          })}
        />
      </div>
    </div>
  );
}
