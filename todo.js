// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
    {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}


const populateTodos = () => {
    // get elements to put todos in
    let ol = document.getElementById("todo-list")
    // loop thru arrays of todos
    for (let i = 0; i < arrayOfTodos.length; i++) {
        // create element to make a new li
        let listItem = document.createElement("li")
        console.log(listItem)
        let text = document.createTextNode(arrayOfTodos[i].title)

        console.log(text)
        // create text node to put title property

        // append text to li element
        listItem.appendChild(text)
        console.log(listItem)

        //append li element to ol
        ol.appendChild(listItem)
        console.log(ol)

    }
}