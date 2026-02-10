const $todoText = document.querySelector('#todoText');
const $todoList = document.querySelector('#todoList');


$todoText.addEventListener('keypress',(e)=>{
    if(e.code === "Enter" && e.target.value !== ''){
        let $todo = e.target.value;
        let $todoItem = document.createElement('li');
        let $todoId = new Date().getTime();
        
        $todoItem.innerHTML = `
                <input type="checkbox" id="${$todoId}">
                <label for="${$todoId}">${$todo}</label>
        `;
        
        $todoList.appendChild($todoItem);
        $todoText.value = '';
    }
});

$todoList.addEventListener('click',(e)=>{ // Using Event Bubbling technique to trigger child element using parent element
    if(e.target.checked){
        e.target.parentElement.classList.add('checked');
        //e.target.parentElement.style.textDecoration = 'line-through';
    } else {
        e.target.parentElement.classList.remove('checked');
        //e.target.parentElement.style.textDecoration = 'none';
    }
});
