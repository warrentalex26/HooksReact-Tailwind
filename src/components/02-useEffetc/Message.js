import React, {useEffect, useState} from 'react'

export const Message = () => {

    const [coors, setCoors] = useState({
        x: 0,
        y: 0
    })

    const {x,y} = coors;


    useEffect(() => {

        const mouseMoves = (mouseMove) => {
            const coors = {
                x: mouseMove.x,
                y: mouseMove.y
            }

            setCoors(coors)
            console.log(coors)
        }
        
        window.addEventListener('mousemove', mouseMoves)

        return () => {
            window.removeEventListener('mousemove', mouseMoves)
        }
    }, [])


    return (
        <div>
            <h3>Eres Genial</h3>
            <p>x: {x}</p>
            <p>y: {y}</p>
        </div>
    )
}
