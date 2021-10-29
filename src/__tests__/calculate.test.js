import calculate from '../logic/calculate';

describe('Test for logic calculator', () => {
  let obj;

  beforeEach(() => {
    obj = {
      total: '0',
      next: null,
      operation: null,
    };
  });

  test('testing the "1" input', () => {
    Object.assign(obj, calculate(obj, '1'));
    expect(obj).toEqual({ total: null, next: '1', operation: null });
  });

  test('testing the "2" input', () => {
    Object.assign(obj, calculate(obj, '2'));
    expect(obj).toEqual({ total: null, next: '2', operation: null });
  });

  test('testing the "3" input', () => {
    Object.assign(obj, calculate(obj, '3'));
    expect(obj).toEqual({ total: null, next: '3', operation: null });
  });

  test('testing the "+" input', () => {
    Object.assign(obj, calculate(obj, '+'));
    expect(obj).toEqual({ total: '0', next: null, operation: '+' });
  });

  test('testing the "4" input', () => {
    Object.assign(obj, calculate(obj, '4'));
    expect(obj).toEqual({ total: null, next: '4', operation: null });
  });

  test('testing the "5" input', () => {
    Object.assign(obj, calculate(obj, '5'));
    expect(obj).toEqual({ total: null, next: '5', operation: null });
  });

  test('testing the "6" input', () => {
    Object.assign(obj, calculate(obj, '6'));
    expect(obj).toEqual({ total: null, next: '6', operation: null });
  });

  test('testing the "−" input', () => {
    Object.assign(obj, calculate(obj, '−'));
    expect(obj).toEqual({ total: '0', next: null, operation: '−' });
  });

  test('testing the "7" input', () => {
    Object.assign(obj, calculate(obj, '7'));
    expect(obj).toEqual({ total: null, next: '7', operation: null });
  });

  test('testing the "8" input', () => {
    Object.assign(obj, calculate(obj, '8'));
    expect(obj).toEqual({ total: null, next: '8', operation: null });
  });

  test('testing the "9" input', () => {
    Object.assign(obj, calculate(obj, '9'));
    expect(obj).toEqual({ total: null, next: '9', operation: null });
  });

  test('testing the "AC" input', () => {
    Object.assign(obj, calculate(obj, 'AC'));
    expect(obj).toEqual({ total: null, next: null, operation: null });
  });

  test('testing the "×" input', () => {
    expect(obj).toEqual({ total: '0', next: null, operation: null });
  });

  test('testing the "+/-" input', () => {
    Object.assign(obj, calculate(obj, '1'));
    Object.assign(obj, calculate(obj, '+/-'));
    expect(obj).toEqual({ total: null, next: '-1', operation: null });
  });

  test('testing the "%" input', () => {
    Object.assign(obj, calculate(obj, '%'));
    expect(obj).toEqual({ total: '0', next: null, operation: '%' });
  });

  test('testing the "÷" input', () => {
    Object.assign(obj, calculate(obj, '÷'));
    expect(obj).toEqual({ total: '0', next: null, operation: '÷' });
  });

  test('testing the "0" input', () => {
    Object.assign(obj, calculate(obj, '0'));
    expect(obj).toEqual({ total: null, next: '0', operation: null });
  });

  test('testing the "." input', () => {
    Object.assign(obj, calculate(obj, '.'));
    expect(obj).toEqual({ total: '0.', next: null, operation: null });
  });

  test('testing the "=" input', () => {
    Object.assign(obj, calculate(obj, '='));
    expect(obj).toEqual({ total: '0', next: null, operation: null });
  });
});
