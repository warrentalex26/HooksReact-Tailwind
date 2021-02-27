import React, {useState} from 'react'
import { MultilpeCustomHooks } from '../03-examples/MultilpeCustomHooks'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <div className='-m-2 text-center mt-6'>
            <h1 className='font-sans text-3xl'>Real Example Ref</h1>
            <hr />
            {show && <MultilpeCustomHooks/>}

            <button onClick={handleShow} className='mt-4 focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg block mx-auto'>Mostrar/Ocultar</button>


        </div>
        
    )
}
