import addTask from './addtaskfunction.js';
import editTask from './editfunction.js';
import deleteTask from './delatefunction.js';
import getData from './getdatafunction.js';

const listContainer = document.querySelector('.list-container');
const inputField = document.querySelector('input');
const tasks = document.querySelector('.tasks');
const button = document.querySelector('button');
const data = JSON.parse(localStorage.getItem('list'));

addTask();

// add task event listener
inputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && inputField.value) {
    e.preventDefault();
    addTask(inputField.value);
    inputField.value = null;
  }
});

editTask();

deleteTask();

getData();

window.addEventListener('load', getData());

const updateStorage = () => {
  const localData = JSON.parse(localStorage.getItem('list'));
  const task = document.querySelectorAll('span');
  for (let i = 0; i < task.length; i += 1) {
    if (task[i].classList.contains('checkTask')) {
      localData[i].completed = true;
    } else {
      localData[i].completed = false;
    }
  }
  localStorage.setItem('list', JSON.stringify(localData));
};

const clearAll = () => {
  const localData = JSON.parse(localStorage.getItem('list'));
  const listItem = document.querySelectorAll('listItem');
  listItem.forEach((i) => {
    if (i.classList.contains('checkContainer')) {
      deleteTask(i);
    }
  });
  let count = 0;
  const data = Array.from(localData).filter((i) => i.completed === false);
  data.map((i) => i.index = count += 1);
  localStorage.setItem('list', JSON.stringify(data));
  window.location.reload();
};

button.addEventListener('click', clearAll);
export { updateStorage, listContainer, data, tasks };