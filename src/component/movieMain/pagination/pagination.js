import { store } from "../../../store/store.js";
import Component from "../../core/Component.js";
import { MOVIE_API_KEY } from "../../../../constants/constants.js";
import fetchGet from "../../../utils/apis/fetchGet.js";

export default class Pagination extends Component {
  template() {
    return `
    <div id="paginationContainer" class="paginationContainer">
      <button id="backBtn" class="Btn"> < </button>
      <div id="paginationContainer" class="paginationContainer">${store.state.page}</div> 
      <button id="nextBtn" class="Btn"> > </button> 
    </div>
    `;
  }
  setEvent() {
    const { $el } = this;
    const $backBtn = $el.querySelector("#backBtn");
    const $nextBtn = $el.querySelector("#nextBtn");
    const curPage = store.state.page;
    const backPage = curPage - 1;
    const nextPage = curPage + 1;

    let URL = store.state.searchValue
      ? `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&language=ko-KR&query=${store.state.searchValue}&include_adult=false`
      : `https://api.themoviedb.org/3/movie/top_rated?api_key=${MOVIE_API_KEY}&language=ko-KO`;

    $backBtn.addEventListener("click", async function minusStorePage() {
      let data = await fetchGet(URL + `&page=${backPage}`);
      if (data.results.length !== 0) {
        store.setState({ movieList: data.results, page: backPage });
      } else {
        alert("해당하는 영화가 없습니다!");
      }
    });

    $nextBtn.addEventListener("click", async function plusStorePage() {
      let data = await fetchGet(URL + `&page=${nextPage}`);
      if (data.results.length !== 0) {
        store.setState({ movieList: data.results, page: nextPage });
      } else {
        alert("해당하는 영화가 없습니다!");
      }
    });
  }
}
