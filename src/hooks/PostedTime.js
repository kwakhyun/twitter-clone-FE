import moment from "moment";
import "moment/locale/ko";

export function PostedTime(date) {
  let today = moment();
  let twit = moment(date);
  let time = (today - twit) / 1000 / 60; // 분

  if (time < 60) {
    return parseInt(time) + "분 전";
  }
  time = time / 60; // 시간
  if (time < 24) {
    return parseInt(time) + "시간 전";
  }
  time = time / 24;
  if (time < 7) {
    return parseInt(time) + "일 전";
  }
  return twit.format("YYYY-MM-DD");
}
