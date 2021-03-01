import React, {useMemo, useState} from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'

export const MemoHook = () => {

    const { state, increment } = useCounter(1000);
    const [show, setShow] = useState(true)

    

    const memoProcesoPesado = useMemo(() => procesoPesado(state), [state])

    const handledSubmit = () => {
        increment()
    }

    const handledChange = () => {
        setShow(!show);
    }


    return (
        <div className='-m-2 text-center mt-6'>
            <h1 className='font-sans text-3xl'>Memo Hook</h1>
            <hr />

            <p>{memoProcesoPesado}</p>

            <div className="mt-9 flex justify-center items-center">

                <div className="max-w-sm bg-white  border-gray-700 p-3 rounded-md tracking-wide shadow-lg">
                    <div id="header" className="flex items-center mb-4">
                        <div id="header-text" className="leading-5 sm">
                            <h3 className="font-semibold text-blue-600 text-3xl">{state}</h3>
                        </div>
                    </div>
                </div>
            </div>


            
            <button onClick={handledSubmit} className='mt-4 focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg'>Subir +1</button>
            <button onClick={handledChange} className='block mr-auto border-2 border-blue-500 ml-auto mt-5 focus:outline-none text-blue-500 text-sm py-2.5 px-5 rounded-md hover:shadow-lg'>Show / Hide - {JSON.stringify(show)}</button>

        </div>
    )
}
