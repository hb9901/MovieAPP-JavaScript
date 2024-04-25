import Component from "../../core/Component.js";
import { store } from "../../../store/store.js";
import fetchGet from "../../../utils/apis/fetchGet.js";
import { MOVIE_API_KEY } from "../../../../constants/constants.js";

export default class SearchView extends Component {
  template() {
    return `
        <div id="searchTitle" class="searchTitle">영화 검색:</div>
        <input type="text" id="searchInput" placeholder="영화 제목을 검색해 보세요"" />
        <button id="searchBtn" class="searchBtn">검색</button>
      `;
  }
  async setEvent() {
    const { $el } = this;
    const search = $el.querySelector("#searchInput");

    $el.querySelector("#searchBtn").addEventListener("click", () => {
      fetchGet(
        `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&language=ko-KR&query=${search.value}&page=1&include_adult=false`
      ).then((res) => {
        store.setState({ movieList: res.results });
      });
    });
  }
}
