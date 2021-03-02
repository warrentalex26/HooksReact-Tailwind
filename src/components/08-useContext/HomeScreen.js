import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const HomeScreen = () => {

    const userContext = useContext(UserContext)
    console.log(userContext);

    return (
        <div className='container mx-auto pt-4'>
            <h1 className='text-center mx-auto my-auto'>Home Screen</h1>
            <hr/>
        </div>
    )
}
