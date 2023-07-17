/**
 * Basicamente la funcion de esto es lograr realizar, una validacion para estar totalmente seguros de que el typo es correcto.
*/


function mostrarLongitud(object: string | number) {         // <------ Ejemplo basico de uso
    if (typeof object === 'string') {
        console.log(object.length)

        return object.length
    }

    return object.toString().length
}

mostrarLongitud('1')


interface Mario {
    company: 'nintendo',
    nombre: string,
    saltar: () => void
}

interface Sonic {
    company: 'sega',
    nombre: string,
    correr: () => void
}

type Personaje = Mario | Sonic

// Type Guard !

/*
 * Comprobamos si realmente es Sonic por medio de una funcion independiente que se encargue de esto
*/

function checkSonic(personaje: Personaje): personaje is Sonic {
    return (personaje as Sonic).correr !== undefined
}


function jugar(personaje: Personaje) {
    if (checkSonic(personaje)) {
        personaje.correr()

        return
    }
}
