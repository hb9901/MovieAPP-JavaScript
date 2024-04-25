import { observable } from "../component/core/observer.js";

export const store = {
  state: observable({
    movieList: [],
  }),

  setState(newState) {
    for (const [key, value] of Object.entries(newState)) {
      if (!this.state[key]) continue;
      this.state[key] = value;
    }
  },
};
