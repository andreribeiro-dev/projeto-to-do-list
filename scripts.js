const input = document.querySelector(".input-task")
const button = document.querySelector(".button-add-task")
const listTasks = document.querySelector('.list-tasks')


let myToDoList = []

function addNewTask() {
    myToDoList.push({
        task: input.value,
        checked: false
    })

    input.value = ''

    showTasks()
}

function showTasks() {

    let newLi = ``

    myToDoList.forEach((item, position) => {
        newLi = newLi + `

        <li class="task ${item.checked && "done"}">
            <img src="img/checked.png" alt="check-task" onclick="checkTask(${position})">
            <p>${item.task}</p>
            <img src="./img/trash.png" alt="task-for-trash" onclick ="deleteTask(${position})">
        </li>

        `
    })


    listTasks.innerHTML = newLi

    localStorage.setItem('list', JSON.stringify(myToDoList))

}

function checkTask(position) {
    myToDoList[position].checked = !myToDoList[position].checked

    showTasks()
}

function deleteTask(position) {
    myToDoList.splice(position, 1)

    showTasks()
}

function reloadTasks() {
    const tasksLocalStorage = localStorage.getItem('list')

    if (tasksLocalStorage){
    myToDoList = JSON.parse(tasksLocalStorage)
    }   
    
    showTasks()

}

reloadTasks()
button.addEventListener("click", addNewTask)