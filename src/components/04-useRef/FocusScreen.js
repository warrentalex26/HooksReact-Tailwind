import React, {useRef} from 'react'

export const FocusScreen = () => {

    const inputref = useRef()

    const handleClick = () => {
        inputref.current.select();
        console.log(inputref)
    }


    return (
        <div className='-m-2 text-center mt-6'>
            <h1 className='font-sans text-3xl'>Focus Screen</h1>
            <hr />

            <label className="block text-gray-700 text-sm font-semibold mb-2 mt-4" htmlFor="email">Email</label>
                    <input
                        ref={inputref}
                        className="text-sm text-center appearance-none rounded w-96 py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline h-10"
                        id="email"
                        type="text"
                        autoComplete='off'
                        name='email'
                        
                        placeholder="Su nombre" />

<button onClick={handleClick} className='mt-4 focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg block mx-auto'>focus</button>

        </div>
    )
}
