import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {


    const {setUser} = useContext(UserContext)

    return (
        <div className='container mx-auto pt-4'>
            <h1 className='text-center mx-auto my-auto'>Login Screen</h1>
            <hr/>
            <button onClick={ () => setUser({id:1234,name:'Alexander'})} className=' inline-block mt-1 focus:outline-none text-white text-sm py-1 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg ml-4'>Login</button>

        </div>
    )
}
