import Component from "../core/Component.js";
import SearchView from "./searchView/searchView.js";
import { TOR_RATED_URL } from "../../../constants/constants.js";
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

    $headerTitle.addEventListener("click", async function minusStorePage() {
      const data = await fetchGet(TOR_RATED_URL);
      if (data.results.length !== 0) {
        store.setState({ movieList: data.results, searchValue: "", page: 1 });
      } else {
        alert("해당하는 영화가 없습니다!");
      }
    });
  }

  mounted() {
    const { $el } = this;
    const $searchBar = $el.querySelector("#searchBar");

    new SearchView($searchBar);
  }
}
