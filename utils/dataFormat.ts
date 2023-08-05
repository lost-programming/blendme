// 1000단위마다 콤마 표시
export const setNumberComma = (value: number) => {
  return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};