import ErrorRepository from '../Errors';

test.each([
  ['with code 2', 2, 'Неверный тип игрока'],
  ['with code 8', 8, 'Unknown error'],
])('correct translate %s', (_, code, expected) => {
  const obj = new ErrorRepository();
  const result = obj.translate(code);
  expect(result).toBe(expected);
});
