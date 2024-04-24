export default function fetchGet(url) {
  let APIData = fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("에러 발생");
    })
    .catch((error) => {
      throw new Error(error);
    });
  return APIData;
}
