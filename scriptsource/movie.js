// 오늘 날짜 확인 - 1: 어제날짜를 화면에 보여주기
const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMonth");
const selDay = document.querySelector("#selDay");

function init() {
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate() - 1;

  txtYear.value = year;
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  selMon.value = month;
  selDay.value = day;
}

init();
