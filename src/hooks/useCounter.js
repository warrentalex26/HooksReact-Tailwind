import {useState} from 'react'


export const useCounter = (initialState = 10) => {

    const [state, setstate] = useState(initialState) //10

    const increment = (factor = 1) => {
        return setstate(state + factor);
    }

    const decrement = (factor = 1) => {
        return setstate(state - factor);
    }

    const reset = () => {
        return setstate(initialState)
    }

    return {
        state,
        increment,
        decrement,
        reset
    }


}
