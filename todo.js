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
let filterdTodos 
const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

let ol = document.getElementById("todo-list")
const populateTodos = () => {
    // get elements to put todos in
    // loop thru arrays of todos
    for (let i = 0; i < arrayOfTodos.length; i++) {
        // create element to make a new li
        let listItem = document.createElement("li")
        console.log(listItem)
        let listItemText = document.createTextNode(arrayOfTodos[i].title)


        // create text node to put title property

        // append text to li element
        listItem.appendChild(listItemText)


        //append li element to ol
        ol.appendChild(listItem)
    }

}
const filteredTodos = () => {
    let userIdElement = document.getElementById("userId")
    let userIdValue = userIdElement.value
    console.log('userIdElement:', [userIdElement])
    consoile.log('userIdValue:', userIdValue)
    
    ol.innerHTML = null
    filteredOfTodos.filter((todo) => {
        return todo.userId === userIdValue
    })
    console.log('filteredTodos:', filterTodos)
}
