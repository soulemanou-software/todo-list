import { updateStorage, data, tasks } from './index.js';

// Get data from local storage
const getData = () => {
    data.map((i) => {
      listArray.push(i);
      const listItem = document.createElement('li');
      listItem.innerHTML = `
    <input type="checkbox" class="checkbox"/>
    <span>${i.description}</span >
    <i class="fa-solid fa-ellipsis-vertical edit-btn"></i>
    <i class="fa-solid fa-trash-can delete-btn"></i>
    `;
      tasks.appendChild(listItem);
  
      const editBtn = document.querySelectorAll('.edit-btn');
      editBtn.forEach((i) => {
        i.addEventListener('click', () => {
          editTask(listItem, i.previousElementSibling);
        });
      });
    });
  
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
  
    const removeBtn = document.querySelectorAll('.delete-btn');
    removeBtn.forEach((i) => {
      i.addEventListener('click', () => {
        deleteTask(i.parentElement);
      });
    });
  
    localStorage.setItem('list', JSON.stringify(listArray));
  };
  export default getData;