const $todoText = document.querySelector('#todoText');
const $todoList = document.querySelector('#todoList');

$todoText.addEventListener('keyup',(e)=>{
    if(e.code==="Enter" && e.target.value !== ''){
        let todo = e.target.value;
        let $todoItem = document.createElement('li');
        let todoId = new Date().getTime();

        $todoItem.innerHTML = `
        <input type="checkbox" id="${todoId}">
        <label for="${todoId}">${todo}</label>
        `;
        
        $todoList.append($todoItem);
        $todoText.value="";
    }
});

$todoList.addEventListener('click',(e)=>{
    if(e.target.checked){
        e.target.parentElement.classList.add('checked');
    } else {
        e.target.parentElement.classList.remove('checked');
    }
});