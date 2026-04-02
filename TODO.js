//  Load todos from LocalStorage (IMPORTANT)
let TodoList = JSON.parse(localStorage.getItem("todos")) || [];
displayItems();

function addTodo() {
    let inputElement = document.querySelector("#Todo-input");
    let dataElement = document.querySelector("#Todo-Date");
    let timeElement = document.querySelector("#Todo-Time");

    let TodoItems = inputElement.value;
    let TodoDate = dataElement.value;
    let TodoTime = timeElement.value;

    if (TodoItems === "" || TodoDate === "" || TodoTime === "") {
        alert("Please enter todo and date");
        return;
    }

    //  Date format change
    let [year, month, day] = TodoDate.split("-");
    let formattedDate = `${day}-${month}-${year}`;

    TodoList.push({ items: TodoItems, duedate: formattedDate, time: TodoTime });

    // Save to LocalStorage
    localStorage.setItem("todos", JSON.stringify(TodoList));

    inputElement.value = '';
    dataElement.value = '';
    timeElement.value = '';
    displayItems();
}

function displayItems() {
    let ContainerElement = document.querySelector(".Todo-Container");
    let newHtml = "";

    for (let i = 0; i < TodoList.length; i++) {
        let { items, duedate, time } = TodoList[i];

        newHtml += `
            <span>${items}</span>
            <span id="date">${duedate}</span>
            <span id="time">${time}</span>
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