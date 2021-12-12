import convertToRoman from "../convertToRoman";

describe('testing convertToRoman util', () => {
  test('converting simple case', () => {
    expect(convertToRoman(4)).toBe('IV');
  });

  test('converting complex case', () => {
    expect(convertToRoman(9734)).toBe('MMMMMMMMMDCCXXXIV');
  });

  test('converting wrong result', () => {
    expect(convertToRoman(101)).not.toBe('CII');
  });

  test('converting with empty param', () => {
    expect(convertToRoman()).toBe('');
  });

  test('converting 0 case', () => {
    expect(convertToRoman(0)).toBe('');
  });

  test('converting with boolean param', () => {
    expect(convertToRoman(true)).toBe('');
  });

  test('converting with string param', () => {
    expect(convertToRoman('string')).toBe('');
  });

  test('converting with object param', () => {
    expect(convertToRoman({number: 123})).toBe('');
  });

  test('converting negative case', () => {
    expect(convertToRoman(-1)).toBe('');
  });

  test('converting decimal case', () => {
    expect(convertToRoman(3.14159265359)).toBe('');
  });
});