import Component from "../core/Component.js";

import MovieView from "./movieView/movieView.js";
import Pagination from "./pagination/pagination.js";

export default class MovieMain extends Component {
  template() {
    return `
     <div id="movieView"></div>
     <div id="pagination"></div>
    `;
  }

  mounted() {
    const { $el } = this;
    const $movieView = $el.querySelector("#movieView");
    const $pagination = $el.querySelector("#pagination");
    new MovieView($movieView);
    new Pagination($pagination);
  }
}
