import React, { useState, useLayoutEffect, useRef } from 'react'
import { useFetch } from '../../hooks/useFetch'

export const LayoutEffect = () => {


    const [state, setstate] = useState(1) //Actualizar el estado para los Quotes

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`)//El useFetch necesita una URL


    const { author, quote } = !!data && data[0]; // "!!data" si data es true osea que hay valor entonces retornara data[0]

    const pTag = useRef()

    useLayoutEffect(() => { //Nos va a servir calcular elementos una vez se carga el HTML
        console.log(pTag.current.getBoundingClientRect())
  
    }, [quote])


    const handledSubmit = () => {
        setstate(state + 1); //Aumentar en 1 el estado
    }


    return (
        <div className='container mx-auto pt-4'>
            <h1 className='font-sans text-3xl'>Layout Effect</h1>
            <hr />
                        <div className="mt-9 flex justify-center items-center">

                            <div className="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
                                {/* <div id="header" className="flex items-center mb-4">
                                    <div id="header-text" className="leading-5 sm">
                                        <h5 id="job" className="font-semibold text-blue-600">{author}</h5>
                                    </div>
                                </div> */}
                                <div id="quote">
                                    <q ref={pTag} className="italic text-gray-600">{quote}</q>
                                </div>
                            </div>

                        </div>
            <div className="mt-9 flex justify-center items-center">
                <button onClick={handledSubmit} className='mt-4 focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg'>Siguiente Quote</button>
            </div>


        </div>
    )
}
