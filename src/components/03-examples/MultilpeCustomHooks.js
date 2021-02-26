import React from 'react'
import { useFetch } from '../../hooks/useFetch'

export const MultilpeCustomHooks = () => {

    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`)//El useFetch necesita una URL
    console.log(state)


    return (
        <div className='container mx-auto pt-4'>
            <h1 className='font-sans text-3xl'>CustomHooks</h1>
        </div>
    )
}
