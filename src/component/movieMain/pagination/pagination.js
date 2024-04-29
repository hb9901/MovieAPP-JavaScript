import { store } from "../../../store/store.js";
import Component from "../../core/Component.js";
import { SEARCH_URL, TOP_RATED_URL } from "../../../../constants/constants.js";
import fetchGet from "../../../utils/apis/fetchGet.js";
import { checkDataExists } from "../../../utils/functions/functions.js";

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

    let URL = store.state.searchValue ? `${SEARCH_URL}&query=${store.state.searchValue}` : TOP_RATED_URL;

    $backBtn.addEventListener("click", async function minusStorePage() {
      let data = await fetchGet(URL + `&page=${backPage}`);
      if (checkDataExists(data.results)) {
        store.setState({ movieList: data.results, page: backPage });
        window.scrollTo(0, 0);
      }
    });

    $nextBtn.addEventListener("click", async function plusStorePage() {
      let data = await fetchGet(URL + `&page=${nextPage}`);
      if (checkDataExists(data.results)) {
        store.setState({ movieList: data.results, page: nextPage });
        window.scrollTo(0, 0);
      }
    });
  }
}
