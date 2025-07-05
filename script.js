const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todolist = document.getElementById('todolist');

let editTodo = null;

//function to add to do
const addTodo = () => {
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0){
        alert("You must write something in your to do");
        return false;
    }

    if(addBtn.value === 'Edit'){
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = 'Add';
        inputBox.value = '';
    }

    else{
    //creting p tag and li tag
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerHTML = inputText;
    li.appendChild(p);

    
    //creating edit button
    const editBtn = document.createElement('button');
    editBtn.innerText = "Edit";
    editBtn.classList.add('btn','edit');
    li.appendChild(editBtn);
    
    //creating deleate Button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add('btn','delete');
    li.appendChild(deleteBtn);

    todolist.appendChild(li);
    inputBox.value = "";
    }
} 


//function to update to do(edit/delete);
const updateTodo = (e) => {
    // console.log(e.target);
    if(e.target.innerHTML === 'Remove'){
        todolist.removeChild(e.target.parentElement);
    }
    if(e.target.innerHTML === 'Edit'){
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = 'Edit';
        editTodo = e;
    }

}
addBtn.addEventListener('click', addTodo);
todolist.addEventListener('click',updateTodo);