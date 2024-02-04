// 1000단위마다 콤마 표시
export const setNumberComma = (value: number) => {
  return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

// 현재 시간에 원하는 시간 추가
export const addHours = (date: Date, hours: number) => {
  date.setHours(date.getHours() + hours);
  return date;
};

// 숫자만 입력
export const setOnlyNumber = (value: string) => {
  return value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
};
