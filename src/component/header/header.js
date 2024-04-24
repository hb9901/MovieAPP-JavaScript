import Component from "../core/Component.js";

export default class Header extends Component {
  template() {
    return `
        <h2 class="headerTitle">내배캠 최고 평점 영화</h2>
      `;
  }

  setEvent() {}
}
