import Component from "../../core/Component.js";
import { store } from "../../../store/store.js";

export default class SearchView extends Component {
  template() {
    return `
        <div id="searchTitle" class="searchTitle">영화 검색:</div>
        <input type="text" id="searchInput" placeholder="영화 제목을 검색해 보세요"" />
        <button id="searchBtn" class="searchBtn">검색</button>
      `;
  }
  setEvent() {
    const { $el } = this;
    const searchInput = $el.querySelector("#searchInput");

    $el.querySelector("#searchBtn").addEventListener("click", () => {
      store.setState({ searchContent: searchInput.value });
    });
  }
}
