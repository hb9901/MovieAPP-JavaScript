import Component from "../core/Component.js";
import SearchView from "./searchView/searchView.js";

export default class Header extends Component {
  template() {
    return `
        <h2 class="headerTitle">내배캠 최고 평점 영화 콜렉션</h2>
        <div id="searchBar"></div>
      `;
  }

  mounted() {
    const { $el } = this;
    const $searchBar = $el.querySelector("#searchBar");
    new SearchView($searchBar);
  }
}
