// edit functionality
const editTask = (listItem, task) => {
    const editInput = document.createElement('input');
    const storedData = JSON.parse(localStorage.getItem('list'));
    editInput.type = 'text';
    editInput.className = 'editInput';
    editInput.value = task.textContent;
    listItem.replaceChild(editInput, task);
    editInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && editInput.value) {
        const result = storedData.filter((text) => text.description === task.textContent);
        const emptyArray = [];
        for (let i = 0; i < storedData.length; i += 1) {
          if (storedData[i].index === result[0].index) {
            storedData[i].description = editInput.value;
          }
          emptyArray.push(storedData[i]);
          localStorage.setItem('list', JSON.stringify(emptyArray));
        }
        listItem.replaceChild(task, editInput);
        task.textContent = editInput.value;
      }
    });
  };
  export default editTask;