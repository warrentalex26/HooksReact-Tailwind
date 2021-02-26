import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHooks = () => {

    const {state, increment, decrement, reset} = useCounter()

    return (
        <div className='container mx-auto pt-4'>
            <h1>Counter with Hook {state}</h1>
            <hr />
            <button onClick={ () => increment(2)} className='mt-4 focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg mr-5'>+1</button>
            <button onClick={reset} className='mt-4 focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg mr-5'>Reset</button>
            <button onClick={ () => decrement(2)} className='mt-4 focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg'>-1</button>
        </div>
    )
}
