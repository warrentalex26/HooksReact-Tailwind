import React, {useState} from 'react'
import { useCounter } from '../../hooks/useCounter'
import { H5 } from './H5';

export const Memorize = () => {

    const { state, increment } = useCounter(10);
    const [show, setShow] = useState(true)

    const handledSubmit = () => {
        increment()
    }

    const handledChange = () => {
        setShow(!show);
    }


    return (
        <div className='-m-2 text-center mt-6'>
            <h1 className='font-sans text-3xl'>Real Example Ref</h1>
            <hr />

            <div className="mt-9 flex justify-center items-center">

                <div className="max-w-sm bg-white  border-gray-700 p-3 rounded-md tracking-wide shadow-lg">
                    <div id="header" className="flex items-center mb-4">
                        <div id="header-text" className="leading-5 sm">
                            <H5 value={state}/>
                        </div>
                    </div>
                </div>
            </div>


            
            <button onClick={handledSubmit} className='mt-4 focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg'>Subir +1</button>
            <button onClick={handledChange} className='block mr-auto border-2 border-blue-500 ml-auto mt-5 focus:outline-none text-blue-500 text-sm py-2.5 px-5 rounded-md hover:shadow-lg'>Show / Hide - {JSON.stringify(show)}</button>

        </div>
    )
}
