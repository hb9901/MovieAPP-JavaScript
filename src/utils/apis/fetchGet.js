import { OPTIONS } from "../../../constants/constants.js";

export default function fetchGet(url) {
  let APIData = fetch(url, OPTIONS)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      alert("해당하는 데이터가 없습니다!");
      throw new Error("에러 발생");
    })
    .catch((error) => {
      throw new Error(error);
    });
  return APIData;
}
