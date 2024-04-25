import Component from "../core/Component.js";
import SearchView from "./searchView/searchView.js";

export default class Header extends Component {
  template() {
    return `
      <div id="headerContainer">
        <h2 class="headerTitle">MOVIE with 내배캠</h2>
        <div id="searchBar"></div>
      </div>
      `;
  }

  mounted() {
    const { $el } = this;
    const $searchBar = $el.querySelector("#searchBar");
    new SearchView($searchBar);
  }
}
