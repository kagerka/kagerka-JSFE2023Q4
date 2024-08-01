export const getDate = (): string => {
  const date = new Date();
  const monthes = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const day = date.getDate();
  const month = monthes[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  const ten = 10;
  const minutes = date.getMinutes() < ten ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds = date.getSeconds() < ten ? `0${date.getSeconds()}` : date.getSeconds();
  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
};
