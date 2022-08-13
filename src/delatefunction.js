import { tasks } from './index,js'
// Delete task from list
const deleteTask = (task) => {
    tasks.removeChild(task);
    let count = -1;
    const storedData = JSON.parse(localStorage.getItem('list'));
    const data = Array.from(storedData).filter((i) => i.completed === false);
    data.map((i) => i.index = count += 1);
    localStorage.setItem('list', JSON.stringify(data));
  };
  export default deleteTask;