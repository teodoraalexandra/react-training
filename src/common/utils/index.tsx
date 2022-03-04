import processData from './processData';

const truncate = (text: string, count: number):string => (text.length > count ? `${text.substring(0, count - 3)}...` : text);

const getYearFromUnixTimestamp = (unixTimestamp:number):string => {
  const milliseconds = unixTimestamp * 1000;
  const dateObject = new Date(milliseconds);
  const year = dateObject.getFullYear();

  // Year as string
  return `${year}`;
};

export {
  processData,
  truncate,
  getYearFromUnixTimestamp
};
