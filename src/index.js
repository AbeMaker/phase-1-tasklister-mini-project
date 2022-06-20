document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTask = document.getElementById("create-task-form");
  const description = document.getElementById("new-task-description");
  const ul = document.getElementById("tasks");
  newTask.addEventListener("submit", creatNewTask)

  document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()
  })
});
document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (event) => {
      event.preventDefault()
      handleToDo(event.target.newtask.value)
      form.reset()
  })

})
