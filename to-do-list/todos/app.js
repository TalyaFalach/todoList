//<i class="fa-solid fa-trash-can"></i>
const userInput = document.getElementById('userInput')
const addTodoBtn = document.getElementById('addTodoBtn');
const ul = document.getElementById('ul');
const trashIcon = document.getElementById('delete')
const list = document.querySelector('.todos')
addTodoBtn.addEventListener('click', addTodo)


function addTodo() {

    ul.innerHTML += `<li class="text-light d-flex mt-1 justify-content-between align-items-center ">
    <span>${userInput.value}</span>
    <i class="fa-solid fa-trash-can delete"></i>
</li>`
    userInput.value = ''
}


//delete todos
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }
})