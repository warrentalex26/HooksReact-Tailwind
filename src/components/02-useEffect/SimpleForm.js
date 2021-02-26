import React, { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formState

    useEffect(() => {
        console.log('hey')
    }, []) //Arreglo vacio para que solo cargue una vez el componente es cargado

    useEffect(() => {
        console.log('Formulario cambio')

    }, [formState]) //Escuche el formState si este cambia

    useEffect(() => {
        console.log('Email Cambio')

    }, [email]) //Escuche el email si este cambia

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState, //Desestructuramos el objeto por si acaso hay propiedas que no estan cambiando
            [target.name]: target.value
        });
    }

    return (
        <div className='container mx-auto pt-4'>
            <h1 className='font-sans text-3xl'> useEffect</h1>
            <hr />
            <div>
                <form>
                    <label className="block text-gray-700 text-sm font-semibold mb-2 mt-4" htmlFor="name">Nombre</label>
                    <input
                        className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline h-10"
                        id="name"
                        name='name'
                        type="text"
                        autoComplete='off'
                        value={name}
                        onChange={handleInputChange}
                        placeholder="Nombre" />

                    <label className="block text-gray-700 text-sm font-semibold mb-2 mt-4" htmlFor="email">Email</label>
                    <input
                        className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline h-10"
                        id="email"
                        type="text"
                        autoComplete='off'
                        name='email'
                        value={email}
                        onChange={handleInputChange}
                        placeholder="Correo" />
                    
                    <label className="block text-gray-700 text-sm font-semibold mb-2 mt-4" htmlFor="email">Contraseña</label>
                    <input
                        className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline h-10"
                        id="password"
                        type="password"
                        autoComplete='off'
                        name='password'
                        value={password}
                        onChange={handleInputChange}
                        placeholder="Contraseña" />

                </form>
            </div>
            {/* SI EL name es igual a 123 entonces el mensaje se mostrara */}
            {(name === '123') && <Message/>}

        </div>
    )
}
