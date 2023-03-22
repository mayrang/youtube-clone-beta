import dayjs from "dayjs";

export const showTime = (time) => {
  const now = dayjs();
  if (now.diff(time, "minute") < 60) {
    return `${now.diff(time, "minute")}분 전`;
  }
  if (now.diff(time, "hour") < 24) {
    return `${now.diff(time, "hour")}시간 전`;
  }
  if (now.diff(time, "day") < 7) {
    return `${now.diff(time, "day")}일 전`;
  }
  if (now.diff(time, "week") < 4) {
    return `${now.diff(time, "week")}주 전`;
  }
  if (now.diff(time, "month") < 12) {
    return `${now.diff(time, "month")}개월 전`;
  }
  return `${now.diff(time, "year")}년 전`;
};
