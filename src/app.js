import Component from "./component/core/Component.js";
import Header from "./component/header/Header.js";

export default class App extends Component {
  template() {
    return `
     <header id="movieHeader"></header>
    `;
  }

  mounted() {
    const { $el } = this;
    const $header = $el.querySelector("#movieHeader");
    new Header($header);
  }
}
