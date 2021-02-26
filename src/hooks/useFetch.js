import {useState, useEffect} from 'react'

export const useFetch = (url) => { //Recibe la Url
    
    const [state, setstate] = useState({ //Ponemos un objeto en el estado que son los valores inciales
        data: null, //La data que se trae por el momento es nulo
        loading: true, //La carga es verdadera
        error: null //Por si hay un error en la carga
    })

    useEffect(() => { //Usamos un efecto que va a cambiar cuando la url cambie
        fetch(url)// Peticion a la url
        .then(resp => resp.json()) //Convertimos la data del url a JSON
        .then(data => {// Pasamos la data
            setstate({ //Usamos el setstate para actualizar el estado
                loading: false, //Es falso porque la data ya se cargo
                error: null, //Estamos suponiendo que la data vino sin error, pero es conveniente manejar ese error
                data //Estamos actualizando la data del estado original con la data del fetch
            })
        })
    }, [url]) //cuando la url cambie actualizara el useEffect
    return state //Retornamos o regresamos el valor del state
}