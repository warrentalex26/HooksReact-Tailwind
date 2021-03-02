import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'


export const MainApp = () => {

    const user = {
        id: 1234,
        name: 'Alexander',
        email: 'warrentalex26@hotmail.com'
    }

    return (
        <div className='container mx-auto pt-4'>
            <UserContext.Provider value={user}>
                <AppRouter />
            </UserContext.Provider>
        </div>
    )
}
