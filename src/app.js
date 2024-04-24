import Component from "./core/Component.js";
import Header from "./component/header/Header.js";

export class App extends Component {
  template() {
    return `
      ${Header}
    `;
  }

  setEvent() {
    const { $el } = this;
  }
}
