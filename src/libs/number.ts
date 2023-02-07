// Format number with separator
export const formatNumber = (number: number, separator: string = ".") => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};
