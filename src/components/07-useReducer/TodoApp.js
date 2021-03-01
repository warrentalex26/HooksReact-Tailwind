import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';


const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);
    
    console.log(todos)

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: 'Nueva Tarea',
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        console.log(action)

    }




    return (
        <div className='-m-2 text-center mt-6'>
            <h1 className='font-sans text-3xl'>TodoAPP - {todos.length}</h1>
            <hr />

            <div className="mt-9 flex justify-center items-center">

                <div className="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
                    <div id="header" className="flex items-center mb-4">
                        <div id="header-text" className="leading-5 sm">
                            <ul className="italic font-semibold text-left text-blue-600">
                                {
                                    todos.map((todo, i) =>
                                        // line-through
                                        <li className='p-4 ' key={todo.id}>{i + 1}. {todo.desc}
                                            <button className=' inline-block mt-4 focus:outline-none text-white text-sm py-1 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg ml-4'>Borrar</button>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <h2 className='mt-6 mb-6 font-sans text-3xl italic'>Agregar Todo App</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <label className="block text-gray-700 text-sm font-semibold mb-2 mt-4" htmlFor="name">Descripción</label>
                <input
                    className="text-sm appearance-none rounded w-72 py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline h-10"
                    id="name"
                    name='description'
                    type="text"
                    autoComplete='off'
                    placeholder="Descripción" />
                <button className='inline-block mt-4 focus:outline-none text-white text-sm py-1 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg ml-4' type='submit'>Agregar</button>

            </form>
        </div>
    )
}
