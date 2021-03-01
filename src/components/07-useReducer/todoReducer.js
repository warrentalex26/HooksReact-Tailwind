export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload]
            break;

        // case 'delete':

        //     break;

        default:
            return state;
            break;
    }

}