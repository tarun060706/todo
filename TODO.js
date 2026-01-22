let TodoList = [];
displayItems();

function addTodo() {
    let inputElement = document.querySelector("#Todo-input")
    let dataElement = document.querySelector("#Todo-Date")
    let TodoItems = inputElement.value;
    let TodoDate = dataElement.value;
    //TodoList.push({items : TodoItems, duedate: TodoDate});
    // inputElement.value = '';
    // dataElement.value = '';
    //displayItems() 

    //date format change

    let [year, month, day] = TodoDate.split("-");
    let formattedDate = `${day}-${month}-${year}`;

    TodoList.push({ items: TodoItems, duedate: formattedDate });

    inputElement.value = '';
    dataElement.value = '';
    displayItems();
}

function displayItems() {
    let ContainerElement = document.querySelector(".Todo-Container")
    let newHtml = "";
    // displayElement.innerText = "";
    for(let i = 0; i < TodoList.length; i++) {
        // let items = TodoList[i].items;
        // let duedate = TodoList[i].duedate;

        let {items ,duedate} = TodoList[i];
    newHtml += `
        <span>${items}</span>
        <span id="date">${duedate}</span>
        <button class="btn-delete" onclick ="TodoList.splice(${i}, 1); displayItems();">Delete</button>
    `;
    //   displayElement.innerText =  displayElement.innerText + "\n" + TodoList[i];
    }
    ContainerElement.innerHTML = newHtml;
}
