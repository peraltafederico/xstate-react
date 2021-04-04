import { Machine } from "xstate";

const machine = Machine({
  id: "trafficLight",
  initial: "stop",
  states: {
    stop: {
      after: {
        1000: "ready"
      }
    },
    ready: {
      after: {
        1000: "go"
      }
    },
    go: {
      after: {
        1000: "stop"
      }
    }
  }
});

export default machine;
