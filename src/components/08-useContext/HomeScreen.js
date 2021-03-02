import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const HomeScreen = () => {

    const {user} = useContext(UserContext)
    console.log(user);

    return (
        <div className='container mx-auto pt-4'>
            <h1 className='text-center mx-auto my-auto'>Home Screen</h1>
            <hr/>

            <pre className='text-center mx-auto my-auto'>
                {JSON.stringify(user, null, 3)}
            </pre>

        </div>
    )
}
