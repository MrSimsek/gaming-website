export const numberWithSeperator = (number, seperator) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, seperator);
