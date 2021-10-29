import operate from '../logic/operate';

describe('Testing operate logic', () => {
  const numberOne = 3;
  const numberTwo = 2;

  test(' add logic', () => {
    expect(operate(numberOne, numberTwo, '+')).toBe('5');
  });

  test(' subtract logic', () => {
    expect(operate(numberOne, numberTwo, '-')).toBe('1');
  });

  test(' multiply logic', () => {
    expect(operate(numberOne, numberTwo, 'x')).toBe('6');
  });

  test(' divide logic', () => {
    expect(operate(numberOne, numberTwo, '÷')).toBe('1.5');
  });

  test(' divide logic', () => {
    expect(operate(numberOne, 0, '÷')).toBe("Can't divide by 0.");
  });

  test(' modulo logic', () => {
    expect(operate(numberTwo, numberOne, '%')).toBe('2');
  });

  test(' fail logic', () => {
    const operation = '#';
    expect(() => operate(numberOne, numberTwo, operation)).toThrow(
      `Unknown operation '${operation}'`,
    );
  });
});
