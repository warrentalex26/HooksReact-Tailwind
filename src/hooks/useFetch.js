import {useState, useEffect, useRef} from 'react'

export const useFetch = (url) => { //Recibe la Url
    
    const isMounted = useRef(true); //Mantener la referencia

    const [state, setstate] = useState({ //Ponemos un objeto en el estado que son los valores inciales
        data: null, //La data que se trae por el momento es nulo
        loading: true, //La carga es verdadera
        error: null //Por si hay un error en la carga
    })

    useEffect(() => {
        return () => {
            isMounted.current = false //La referencia es falsa cuando el componente es desmontado
        }        
    }, [])

    useEffect(() => { //Usamos un efecto que va a cambiar cuando la url cambie

        setstate({ //ACTUALIZAMOS EL STATE PARA CUANDO ACTUALIZAN LAS QUOTES, QUE SALGA EL LOADING
            data: null, //La data que se trae por el momento es nulo
            loading: true, //La carga es verdadera
            error: null //Por si hay un error en la carga
        })

        fetch(url)// Peticion a la url
        .then(resp => resp.json()) //Convertimos la data del url a JSON
        .then(data => {// Pasamos la data
                if (isMounted.current) { //Verificamos si el componente sigue montado
                    setstate({ //Usamos el setstate para actualizar el estado
                        loading: false, //Es falso porque la data ya se cargo
                        error: null, //Estamos suponiendo que la data vino sin error, pero es conveniente manejar ese error
                        data //Estamos actualizando la data del estado original con la data del fetch
                    })
                }                        
        })
    }, [url]) //cuando la url cambie actualizara el useEffect
    return state //Retornamos o regresamos el valor del state
}