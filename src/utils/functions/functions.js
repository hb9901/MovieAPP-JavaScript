export function checkDataExists(data) {
  let flag = true;
  if (data.length === 0) {
    alert("해당하는 영화가 없습니다!");
    flag = false;
  }
  return flag;
}
