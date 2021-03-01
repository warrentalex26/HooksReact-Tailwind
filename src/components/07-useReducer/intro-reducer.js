
const initialState = [{
    id: 1,
    todo: 'Comprar Pan',
    done: false
}];

const todoReducer = (state = initialState, action) => {

    if (action?.type === 'agregar') {
        return [...state, action.payload]
    }

    return state;
}

let to = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}


let toDo = todoReducer(to, agregarTodoAction)



console.log(toDo)