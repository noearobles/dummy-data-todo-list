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

let ol = document.getElementById("todo-list")



// this will fetch the array from the json//
const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => (arrayOfTodos = json))
}


// this will log the array//
const logTodos = () => {
    console.log(arrayOfTodos)
}


// this clear the list //
const clearList = () => {

    ol.remove();
    let liContainer = document.getElementById("listContainer")
    liContainer.innerHTML = "<ol id='todo-list'></ol>"
    ol = document.getElementById("todo-list")

}



// this will populate the list//
const populateTodos = () => {

    clearList();

    for (let i = 0; i < arrayOfTodos.length; i++) {
        let newListItem = document.createElement("LI")
        newListItem.innerText = arrayOfTodos[i].title
        ol.appendChild(newListItem)
    }
}

// this will filter the toDos//
const filterTodos = () => {


    let userIdElement = document.getElementById("userId")
    console.log("UserIdElement:", userIdElement)


    let userIdValue = userIdElement.value;
    console.log("userIdValue:", userIdValue)


    let filterTodos = arrayOfTodos.filter((todo) => {
        console.log(todo.userId == userIdValue)
        return todo.userId == userIdValue
    })

    console.log("filterTodos:", filterTodos)

    for (let i = 0; i < filterTodos.length; i++) {
        let newListItem = document.createElement("LI")
        newListItem.innerText = filterTodos[i].title
        ol.appendChild(newListItem)
    }
}

// this is for the completed button//
const completed = () => {

    clearList();

    let complete = arrayOfTodos.filter((todo) => {
        console.log(todo.completed == true)
        return todo.completed == true
    })

    console.log("complete:", complete)

    for (let i = 0; i < complete.length; i++) {
        let newListItem = document.createElement("LI")
        newListItem.innerText = complete[i].title
        ol.appendChild(newListItem)
    }
}



//   this is for the incomplete button//
const incompleted = () => {

    clearList()

    let incomplete = arrayOfTodos.filter((todo) => {
        console.log(todo.completed == false)
        return todo.completed == false
    })


    console.log("Incomplete:", incomplete)



    for (let i = 0; i < incomplete.length; i++) {
        let newListItem = document.createElement("LI")
        newListItem.innerText = incomplete[i].title
        ol.appendChild(newListItem)
    }
}
