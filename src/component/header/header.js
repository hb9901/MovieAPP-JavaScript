import Component from "../core/Component.js";
import SearchView from "./searchView/searchView.js";
import { TOP_RATED_URL } from "../../../constants/constants.js";
import fetchGet from "../../utils/apis/fetchGet.js";
import { store } from "../../store/store.js";

export default class Header extends Component {
  template() {
    return `
      <div id="headerContainer">
        <h2 id="headerTitle" class="headerTitle">MOVIE with 내배캠</h2>
        <div id="searchBar"></div>
      </div>
      `;
  }

  setEvent() {
    const { $el } = this;
    const $headerTitle = $el.querySelector("#headerTitle");

    $headerTitle.addEventListener("click", async function resetPage() {
      const data = await fetchGet(TOP_RATED_URL);
      store.setState({ movieList: data.results, searchValue: "", page: 1 });
      window.scrollTo(0, 0);
    });
  }

  mounted() {
    const { $el } = this;
    const $searchBar = $el.querySelector("#searchBar");

    new SearchView($searchBar);
  }
}
