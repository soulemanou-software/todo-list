const updateStatus = (check, task, input) => {
  if (check.checked) {
    task.completed = true;
    input.classList.add('strike');
  } else {
    task.completed = false;
    input.classList.remove('strike');
  }
  // return { task, input };
  return input;
};

const editDescription = (element, task) => {
  element.setAttribute('placeholder', element.value);
  task.description = element.value;
  return task;
};

module.exports = { updateStatus, editDescription };