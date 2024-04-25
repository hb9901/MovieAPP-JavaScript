import { store } from "../../store/store.js";
import Card from "../common/card/Card.js";
import Component from "../core/Component.js";

export default class MovieView extends Component {
  template() {
    return `
    ${store.state.movieList
      .map(
        ({ id }) => `
        <div class="movieCard-${id}" id="movieCard-${id}"></div>
      `
      )
      .join("")}
        `;
  }
  mounted() {
    const { $el } = this;
    store.state.movieList.forEach(
      ({ backdrop_path, title, overview, vote_average, id }) => {
        const $view = $el.querySelector(`#movieCard-${id}`);
        new Card($view, {
          src: backdrop_path,
          title: title,
          content: overview,
          rating: vote_average,
          id: id,
        });
      }
    );
  }
}
