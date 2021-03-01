import React, {memo} from 'react'

export const H5 = memo(({ value }) => { //Con memo memorizamos el componente y solo se va a disparar si las propertys cambian


    console.log('Me volvi a llamar :(')

    return (
        <div>
            <h5 id="job" className="font-semibold text-blue-600 text-3xl">{value}</h5>
        </div>
    )
})
