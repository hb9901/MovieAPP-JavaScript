import { observable } from "..//core/observer.js";

export const store = {
  state: observable({}),

  setState(newState) {
    for (const [key, value] of Object.entries(newState)) {
      if (!this.state[key]) continue;
      this.state[key] = value;
    }
  },
};
