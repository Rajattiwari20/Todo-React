export const GET_TODO = 'GET_TODO'
export const DELETE_TODO= "DELETE_TODO";
export const COMPLETE_TODO= "COMPLETE_TODO";
export const UPDATE_TODO= "COMPLETE_TODO";
export const ADD_NEW_TODO = "ADD_NEW_TODO"

export function getTodos(todo){
    return{
        type:GET_TODO,
        todo
    }
}

export function deleteTodo(id){
    return{
        type:DELETE_TODO,
        id
    }
}

export function markComplete(id){
    return{
        type:COMPLETE_TODO,
        id
    }
}

export function updateTodo(id, text){
    return{
        type:UPDATE_TODO,
        id,
        text
    }
}

export function addNewTodo(data){
    return{
        type:ADD_NEW_TODO,
        data
    }
}


export function fetchTodos(){
    const url= 'https://jsonplaceholder.typicode.com/todos';
    return function(dispatch){
        fetch(url,{
            method:'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
        .then(response => response.json())
        .then(todos => {
            dispatch(getTodos(todos))
        });
    }
}

export function handelDelete(id){
    const url='https://jsonplaceholder.typicode.com/todos/delete';

    return function(dispatch){
        fetch(url,{
            method:'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        }).then(response => response.json())
        .then(todo => {
            dispatch(deleteTodo(id))
        })
    }
}

export function handelMarkCompleted(id){
    const url='https://jsonplaceholder.typicode.com/todos/delete';

    return function(dispatch){
        fetch(url,{
            method:'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
              body:JSON.stringify({
                id:id,
                completed:true,
        })
        }).then(response => response.json())
        .then(todo => {
            dispatch(markComplete(id))
        })
    }
}

export function handelUpdate(id, text){
    const url='https://jsonplaceholder.typicode.com/todos/delete';

    return function(dispatch){
        fetch(url,{
            method:'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
        }).then(response => response.json())
        .then(todo => {
            dispatch(updateTodo(id, text))
        })
    }
}

export function handelAddTodo(userId, title, id){
    const url='https://jsonplaceholder.typicode.com/todos';

    return function(dispatch){

        fetch(url,{
            method:'POST',
            headers: { "Content-Type" : "application/json"},
            body:JSON.stringify({
                userId: userId,
                title:title,
                completed:false        
            })

        }).then(response => response.json())
        .then(data => {
            console.log("action ==>" , data)
            data.id=id;
            dispatch(addNewTodo(data));
        })
    }
}


