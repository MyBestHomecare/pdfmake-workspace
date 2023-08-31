const padDigits = (number, pad = 2) => {
  return `0000000000000000${number}`.slice(-pad);
};

const generateTimestamp = () => {
  const date = new Date();
  const YYY = padDigits(date.getFullYear(), 4);
  const MM = padDigits(date.getMonth() + 1);
  const DD = padDigits(date.getDate());
  const hh = padDigits(date.getHours());
  const mm = padDigits(date.getMinutes());
  const ss = padDigits(date.getSeconds());
  const ms = padDigits(date.getMilliseconds(), 3);
  return `${YYY}.${MM}.${DD}@${hh}.${mm}.${ss}.${ms}`;
};

const generateFileName = (label) => `${generateTimestamp()}---${label.toUpperCase()}`;

module.exports = generateFileName;
