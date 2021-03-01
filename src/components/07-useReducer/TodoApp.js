import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';


const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    const [todos] = useReducer(todoReducer, initialState);
    console.log(todos)
    



    return (
        <div className='-m-2 text-center mt-6'>
            <h1 className='font-sans text-3xl'>TodoAPP</h1>
            <hr />

            <div className="mt-9 flex justify-center items-center">

                <div className="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
                    <div id="header" className="flex items-center mb-4">
                        <div id="header-text" className="leading-5 sm">
                            <ul className="italic font-semibold text-blue-600">
                                <li>HOla</li>
                                <li>Mundo</li>
                                <li>Hola de nuevo</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
