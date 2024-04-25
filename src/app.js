import Component from "./component/core/Component.js";
import Header from "./component/header/header.js";
import MovieView from "./component/movieView/MovieView.js";
import { store } from "./store/store.js";
import fetchGet from "./utils/apis/fetchGet.js";
import { TOR_RATED_URL } from "../constants/constants.js";

export default class App extends Component {
  template() {
    return `
     <header id="movieHeader"></header>
     <main id="movieMain"></main>
    `;
  }

  async mounted() {
    const data = await fetchGet(TOR_RATED_URL);
    store.setState({ movieList: data.results });
    const { $el } = this;
    const $header = $el.querySelector("#movieHeader");
    const $main = $el.querySelector("#movieMain");
    new Header($header);
    new MovieView($main);
  }
}
