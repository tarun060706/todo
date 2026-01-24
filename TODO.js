//  Load todos from LocalStorage (IMPORTANT)
let TodoList = JSON.parse(localStorage.getItem("todos")) || [];
displayItems();

function addTodo() {
    let inputElement = document.querySelector("#Todo-input");
    let dataElement = document.querySelector("#Todo-Date");

    let TodoItems = inputElement.value;
    let TodoDate = dataElement.value;

    if (TodoItems === "" || TodoDate === "") {
        alert("Please enter todo and date");
        return;
    }

    //  Date format change
    let [year, month, day] = TodoDate.split("-");
    let formattedDate = `${day}-${month}-${year}`;

    TodoList.push({ items: TodoItems, duedate: formattedDate });

    // Save to LocalStorage
    localStorage.setItem("todos", JSON.stringify(TodoList));

    inputElement.value = '';
    dataElement.value = '';
    displayItems();
}

function displayItems() {
    let ContainerElement = document.querySelector(".Todo-Container");
    let newHtml = "";

    for (let i = 0; i < TodoList.length; i++) {
        let { items, duedate } = TodoList[i];

        newHtml += `
            <span>${items}</span>
            <span id="date">${duedate}</span>
            <button class="btn-delete"
                onclick="deleteTodo(${i})">
                Delete
            </button>
        `;
    }

    ContainerElement.innerHTML = newHtml;
}

// 🔹 Delete with LocalStorage update
function deleteTodo(index) {
    TodoList.splice(index, 1);

    // Save updated list
    localStorage.setItem("todos", JSON.stringify(TodoList));

    displayItems();
}