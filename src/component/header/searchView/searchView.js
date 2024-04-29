import Component from "../../core/Component.js";
import { store } from "../../../store/store.js";
import fetchGet from "../../../utils/apis/fetchGet.js";
import { SEARCH_URL } from "../../../../constants/constants.js";

export default class SearchView extends Component {
  template() {
    return `
        <div id="searchTitle" class="searchTitle">영화 검색:</div>
        <input type="text" id="searchInput" placeholder="영화 제목을 검색해 보세요"" autofocus />
        <button id="searchBtn" class="searchBtn">검색</button>
      `;
  }
  setEvent() {
    const { $el } = this;
    const $searchInput = $el.querySelector("#searchInput");
    const $searchBtn = $el.querySelector("#searchBtn");

    $searchBtn.addEventListener("click", async function updateStore() {
      let data = await fetchGet(`${SEARCH_URL}&query=${$searchInput.value}`);
      if (data.results.length !== 0) {
        store.setState({
          movieList: data.results,
          searchValue: $searchInput.value,
          page: 1
        });
      } else {
        alert("해당하는 영화가 없습니다!");
      }
    });

    $searchInput.addEventListener("keyup", function makeEnterClick(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        $searchBtn.click();
      }
    });
  }
}
