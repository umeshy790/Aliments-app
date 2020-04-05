const months = new Map();

months
  .set(0, 'January')
  .set(1, 'February')
  .set(2, 'March')
  .set(3, 'April')
  .set(4, 'May')
  .set(5, 'June')
  .set(6, 'July')
  .set(7, 'August')
  .set(8, 'September')
  .set(9, 'October')
  .set(10, 'November')
  .set(11, 'December');

export function timeOfArticle(time) {
  const date = new Date(time).getTime();
  const duration = new Date().getTime() - date;

  let seconds = Math.floor(duration / 1000);
  let minutes = Math.floor(duration / (1000 * 60));
  let hours = Math.floor(duration / (1000 * 60 * 60));
  let days = Math.floor(duration / (1000 * 60 * 60 * 24));

  if (seconds < 60) {
    return seconds === 1 ? seconds + ' sec ' : seconds + ' secs ago';
  } else if (minutes < 60) {
    return minutes === 1 ? minutes + ' min ' : minutes + ' mins ago';
  } else if (hours < 24) {
    return hours === 1 ? hours + ' hr ' : hours + ' hrs ago';
  } else {
    if (days > 1) {
      return monthDateString(time);
    }
    return days === 1 ? days + ' day ' : days + ' days ';
  }
}

export function monthDateString(time) {
  const date = new Date(time);
  return `${months.get(
    date.getMonth(),
  )} ${date.getDate()}, ${date.getFullYear()}`;
}
