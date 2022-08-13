import { updateStorage, tasks } from './index.js';
import Task from './Task.js';

// add task to the UI functionality
const listArray = [];

const addTask = (taskValue) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
  <input type="checkbox" class="checkbox"/>
  <span>${taskValue}</span >
  <i class="fa-solid fa-ellipsis-vertical edit-btn"></i>
  <i class="fa-solid fa-trash-can delete-btn"></i>
  `;
  tasks.appendChild(listItem);

  // checkbox functionality
  const checkbox = document.querySelectorAll('.checkbox');
  checkbox.forEach((i) => {
    i.addEventListener('click', () => {
      i.parentElement.classList.toggle('checkContainer');
      i.nextElementSibling.classList.toggle('checkTask');
      i.parentElement.lastElementChild.classList.toggle('active');
      i.parentElement.lastElementChild.previousElementSibling.classList.toggle('disable');
      updateStorage();
    });
  });

  // Add data to local storage
  const storedData = new Task(taskValue, false, checkbox.length - 1);
  listArray.push(storedData);
  localStorage.setItem('list', JSON.stringify(listArray));

  // Edit event listener
  const editBtn = document.querySelectorAll('.edit-btn');
  editBtn.forEach((i) => {
    i.addEventListener('click', () => {
      editTask(listItem, i.previousElementSibling);
      // updateStorage();
    });
  });

  //  Delete event listener
  const removeBtn = document.querySelectorAll('.delete-btn');
  removeBtn.forEach((i) => {
    i.addEventListener('click', () => {
      deleteTask(i.parentElement);
    });
  });
};
export default addTask;