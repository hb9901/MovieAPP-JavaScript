import { store } from "../../store/store.js";
import Component from "../core/Component.js";
import Card from "../common/card/card.js";
import Pagination from "./pagination/pagination.js";

export default class MovieView extends Component {
  template() {
    return `
    <div id="movieContainer" class="movieContainer">
    ${store.state.movieList
      .map(
        ({ id }) => `
        <div class="movieCard-${id}" id="movieCard-${id}"></div>
      `
      )
      .join("")}
      </div>
      <div id="moviePagination" class="moviePagination"></div>  
      `;
  }
  mounted() {
    const { $el } = this;
    const $pagination = $el.querySelector("#moviePagination");

    store.state.movieList.forEach(
      ({ poster_path, original_title, overview, vote_average, id }) => {
        const $view = $el.querySelector(`#movieCard-${id}`);
        new Card($view, {
          src: poster_path,
          title: original_title,
          content: overview,
          rating: vote_average,
          id: id,
        });
      }
    );
    new Pagination($pagination);
  }
}
