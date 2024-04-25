import { observable } from "../component/core/observer.js";

export const cardStore = {
  state: observable({
    title: "",
  }),

  setState(newState) {
    for (const [key, value] of Object.entries(newState)) {
      if (!this.state[key]) continue;
      this.state[key] = value;
    }
  },
};
