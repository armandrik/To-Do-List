const inputvalue = document.getElementById('inputTodo');
const addtodo = document.getElementById("icon");
const ul = document.getElementById('todo-list');
const clearButton = document.getElementsByClassName('clear-button')[0];
let popup = document.querySelector('.popup');
let close = document.querySelector('.close');
clearButton.disabled = true;
clearButton.classList.add("clear-btn-disabl");

function inputValid() {
    return inputvalue.value.length;
}

inputvalue.addEventListener('change', AddMyList);

// this part of code dosent work idk why
// addtodo.addEventListener('click', function() {
//     if (inputValid() == "") {
//         popup.classList.add('active');
//     } else if (inputvalue.value > 0) {
//         AddMyList();
//     }
// });

function AddMyList() {
    if (inputValid() > 0) {
        clearButton.disabled = false;
        clearButton.classList.remove("clear-btn-disabl");
        let li = document.createElement('li');
        let chekbox = document.createElement('input');
        let deleteicon = document.createElement("i");
        chekbox.type = "checkbox";
        chekbox.classList.add("c9");
        chekbox.name = "name";
        chekbox.value = "value";
        chekbox.id = "chekbox";
        li.appendChild(document.createTextNode(inputvalue.value));
        li.appendChild(chekbox);
        li.appendChild(deleteicon);
        deleteicon.className = "fa fa-trash-o";
        ul.appendChild(li);
        inputvalue.value = "";
        deleteicon.addEventListener("click", function() {
            li.classList.add("delete-li");
        })
    }
}
clearButton.addEventListener('click', clearMyList);

function clearMyList() {
    ul.innerHTML = "";
}
close.addEventListener('click', function() {
    popup.classList.remove('active');
})
