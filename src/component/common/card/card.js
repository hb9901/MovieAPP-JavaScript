import Component from "../../core/Component.js";

export default class Card extends Component {
  template() {
    const { src, title, content, rating } = this.props;

    return `
        <div id="cardMain" class="cardMain">
            <div id="cardImgWrapper" class="cardImgWrapper">
              <img id="cardImg" class="cardImg" src="https://image.tmdb.org/t/p/w500/${src}" alt="영화 포스터"/>
            </div>
            <div id="cardTitle" class="cardTitle">${title}</div>
            <div id="cardContent" class="cardContent">${content}</div>
            <div id="cardRating" calss="cardRating">Rating:${rating}</div>
        </div>
         `;
  }

  setEvent() {
    const { $el } = this;
    const $card = $el.querySelector("#cardMain");
    $card.addEventListener("click", () => {
      alert(`영화 id: ${this.props.id}`);
    });
  }
}
