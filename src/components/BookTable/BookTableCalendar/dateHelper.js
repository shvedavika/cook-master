export function getCurrentDate() {
  const today = new Date();
  const m = today.getMonth() + 1;
  const d = today.getDate();
  const year = today.getFullYear();
  const month = m > 9 ? m : `0${m}`;
  const date = d > 9 ? d : `0${d}`;

  return `${year}-${month}-${date}`;
}

export function getCurrentTime() {
  const hours = [10, 12, 14, 16, 18, 20];
  const today = new Date();
  const h = today.getHours();
  const closest = hours.find((hour) => hour > h);
  if (closest) {
    return `${closest}:00-${closest+2}:00`;
  }
  return null;
}
