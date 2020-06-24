export const numberWithSeperator = (number, seperator) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, seperator);

export const numberWithK = number =>
  number % 1000 !== number ? `${number / 1000}K` : number;
