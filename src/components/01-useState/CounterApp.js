import React, {useState} from 'react'

export const CounterApp = () => {
    
  const [state, setState] = useState({
    counter1: 10,
    counter1: 20,
    counter3: 30,
    counter4: 40
  })  

  const {counter1, counter2} = state;

  // console.log(counter1, counter2)

  const handledSubmit = () => {
    setState({
      ...state,
      counter1: counter1 + 1
    });
  }

  return (
        <>
        <div className='container mx-auto'>
          <h1 className='font-normal text-3xl text-grey-darkest leading-loose my-3 w-full'>Counter {counter1}</h1>
          <h1 className='font-normal text-3xl text-grey-darkest leading-loose my-3 w-full'>Counter {counter2}</h1>
          <hr/>
          <button onClick={handledSubmit} className='mt-4 focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg'>Subir +1</button>  
          </div>
        </>
    )
}
