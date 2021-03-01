import React, { useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = () => {
        setCounter(counter + 1)
    }


    return (
        <div className='-m-2 text-center mt-6'>
            <h1 className='font-sans text-3xl'>UseCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement value={increment}/>

        </div>
    )
}
