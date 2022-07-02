const { addTask, removeTask } = require('./CRUD.js');

describe('addTask function testing', () => {
  test('description swimming index 1', () => {
    expect(addTask('', [{ description: 'swimming', completed: false, index: 1 }])).toEqual([{ description: 'swimming', completed: false, index: 1 }]);
  });

  test('description swimming index 1', () => {
    expect(addTask(undefined, [{ description: 'swimming', completed: false, index: 1 }])).toEqual([{ description: 'swimming', completed: false, index: 1 }]);
  });

  test('description swimming index 1 description watch movies index 2', () => {
    expect(addTask('watch movies', [{ description: 'swimming', completed: false, index: 1 }])).toEqual([{ description: 'swimming', completed: false, index: 1 }, { description: 'watch movies', completed: false, index: 2 }]);
  });

  test('description swimming index 1, description cooking index 2', () => {
    expect(addTask('cooking', [{ description: 'swimming', completed: false, index: 1 }])).toEqual([{ description: 'swimming', completed: false, index: 1 }, { description: 'cooking', completed: false, index: 2 }]);
  });
});

describe('removeTask function testing', () => {
  test('description cooking index 1', () => {
    expect(removeTask(1, [{ description: 'swimming', completed: false, index: 1 }, { description: 'cooking', completed: false, index: 2 }])).toEqual([{ description: 'cooking', completed: false, index: 1 }]);
  });

  test('[]', () => {
    expect(removeTask(1, [{ description: 'swimming', completed: false, index: 1 }])).toEqual([]);
  });

  test('description swimming index 1', () => {
    expect(removeTask(0, [{ description: 'swimming', completed: false, index: 1 }])).toEqual([{ description: 'swimming', completed: false, index: 1 }]);
  });

  test('description swimming index 1', () => {
    expect(removeTask(-1, [{ description: 'swimming', completed: false, index: 1 }])).toEqual([{ description: 'swimming', completed: false, index: 1 }]);
  });

  test('description swimming index 1', () => {
    expect(removeTask(3, [{ description: 'swimming', completed: false, index: 1 }])).toEqual([{ description: 'swimming', completed: false, index: 1 }]);
  });
});
