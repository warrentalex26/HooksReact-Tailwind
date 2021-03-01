export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload];

        case 'delete':
            console.log(state)
            return state.filter(todo => todo.id !== action.payload) //id

        case 'toggle':
            return state.map(todo => {

                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }else{
                    return todo;
                }

            })

        default:
            return state;
            break;
    }

}