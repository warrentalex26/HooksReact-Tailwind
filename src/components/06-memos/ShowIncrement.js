import React from 'react'

export const ShowIncrement = ({increment}) => {
    
    console.log('Me volvi a generar')

    const handledIncrement = (increment) => {
        increment + 1;
    }

    return (
        <div>
             <button onClick={handledIncrement} className='mt-4 focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg'>Incrementar</button>
        </div>
    )
}
