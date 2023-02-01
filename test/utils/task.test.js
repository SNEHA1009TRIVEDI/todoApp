// findIndexById.test.js
const findIndexById = require('../../src/utils/arrayUtils').findIndexById;

describe('findIndexById', () => {
  beforeEach(() => {
    global.db = [      { id: 1, task: 'Task 1' },      { id: 2, task: 'Task 2' },      { id: 3, task: 'Task 3' }    ];
  });

  test('returns the correct index for a given id', () => {
    expect(findIndexById(2)).toBe(1);
  });

  test('returns -1 if id is not found', () => {
    expect(findIndexById(4)).toBe(-1);
  });
});
