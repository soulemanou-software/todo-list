/**
 * @jest-environment jsdom
 */

const { updateStatus, editDescription } = require('./interactivity.js');

describe('updateStatus function testing', () => {
  document.body.innerHTML = `<input type="checkbox" name="">
                           <input class="task task1" type="text" placeholder="task1">
                           <input class="task task1 strike" type="text" placeholder="task1">`;
  const check = document.querySelector('[type="checkbox"]');
  const input = document.querySelector('.task.task1');
  const inputResult = document.querySelector('.task.task1.strike');
  const task = {
    description: 'task1',
    completed: false,
    index: 1,
  };

  check.checked = true;
  updateStatus(check, task, input);

  test('test 1', () => {
    expect(input).toStrictEqual(inputResult);
  });
});

describe('editDescription function testing', () => {
  document.body.innerHTML = '<input class="task task1" type="text" placeholder="task1">';
  const input = document.querySelector('.task.task1');
  const task = {
    description: 'xx',
    completed: false,
    index: 1,
  };

  input.value = 'task1';
  editDescription(input, task);

  test('test 1', () => {
    expect(task).toEqual({
      description: 'task1',
      completed: false,
      index: 1,
    });
  });
});