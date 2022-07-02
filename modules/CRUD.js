class TaskObject {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const addTask = (taskDescription, tasksObject) => {
  if (taskDescription === '' || taskDescription === undefined) {
    return tasksObject;
  }
  const newTask = new TaskObject(taskDescription, false, tasksObject.length + 1);
  tasksObject.push(newTask);
  return tasksObject;
};

const removeTask = (indexToRemove, tasksObject) => {
  if (indexToRemove <= 0 || indexToRemove > tasksObject.length) {
    return tasksObject;
  }
  const zeroBasedIndex = indexToRemove - 1;
  // remove task by index
  tasksObject.splice(zeroBasedIndex, 1);
  // update indexs
  for (let i = zeroBasedIndex; i < tasksObject.length; i += 1) {
    tasksObject[i].index -= 1;
  }
  return tasksObject;
};

const removeAllCompleted = (tasksObject) => {
  tasksObject = tasksObject.filter((task) => task.completed === false);
  for (let i = 0; i < tasksObject.length; i += 1) {
    tasksObject[i].index = i + 1;
  }
  return tasksObject;
};

module.exports = {
  addTask, removeTask, removeAllCompleted, TaskObject,
};