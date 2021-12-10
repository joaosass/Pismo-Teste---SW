interface RomanProps {
  [key: string]: number;
}

const convertToRoman = (value: number) => {
  if (!value) {
    return '';
  }

  const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  } as RomanProps;

  let romanNumber = '';

  for (let i of Object.keys(roman)) {
    let q = Math.floor(value / roman[i]);
    value -= q * roman[i];
    romanNumber += i.repeat(q);
  }

  return romanNumber;
}

export default convertToRoman;