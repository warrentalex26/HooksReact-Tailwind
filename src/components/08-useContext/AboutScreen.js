import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AboutScreen = () => {

    const { user, setUser } = useContext(UserContext);


    const handleClick = () => {
        setUser({});
    }


    return (
        <div className='container mx-auto pt-4'>
            <h1 className='text-center mx-auto my-auto'> About Screen</h1>
            <hr />
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
            <button onClick={handleClick} className=' inline-block mt-1 focus:outline-none text-white text-sm py-1 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg ml-4'>Log out</button>

        </div>
    )
}
