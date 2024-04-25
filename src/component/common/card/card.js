// import { cardStore } from "../../../store/cardStore.js";
import Component from "../../core/Component.js";

export default class Card extends Component {
  template() {
    const { src, title, content, rating, id } = this.props;

    return `
        <div id="cardMain" class="cardMain">
            <img id="cardImg" class="cardImg" src="https://image.tmdb.org/t/p/w500/${src}"/>
            <div id="cardTitle" class="cardTitle">${title}</div>
            <div id="cardContent" class="cardContent">${content}</div>
            <div id="cardRating" calss="cardRating">Rating:${rating}</div>
        </div>
         `;
  }
}
