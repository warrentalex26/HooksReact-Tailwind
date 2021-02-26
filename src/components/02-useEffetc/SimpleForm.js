import React, {useEffect, useState} from 'react'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState

    useEffect( () => { 
        console.log('hey')
    }, []) //Arreglo vacio para que solo cargue una vez el componente

    useEffect( () => { 
        console.log('Formulario cambio')

    }, [formState]) //Escuche el formState si este cambia

    useEffect( () => { 
        console.log('Email Cambio')

    }, [email]) //Escuche el email si este cambia

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <div className='container mx-auto pt-4'>
          <h1 className='font-sans text-3xl'> useEffect</h1>
          <hr/>
          <div>
            <form>
            <label className="block text-gray-700 text-sm font-semibold mb-2 mt-4" htmlFor="name">Nombre</label>
        <input
          className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline h-10"
          id="name"
          name='name'
          type="text"
          autoComplete='off'
          value = {name}
          onChange={handleInputChange}
          placeholder="Your email address"/>
          
          <label className="block text-gray-700 text-sm font-semibold mb-2 mt-4" htmlFor="email">Email</label>
        <input
          className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline h-10"
          id="email"
          type="text"
          autoComplete='off'
          name='email'
          value = {email}
          onChange={handleInputChange}
          placeholder="Your email address"/>

            </form>
          </div>
        </div>
    )
}
