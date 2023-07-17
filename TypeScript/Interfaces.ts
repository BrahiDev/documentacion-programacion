// Interfaces

/*
    Son muy similares a los Types, pero con algunas diferencias muy puntuales
*/

// Definicion correcta de una interface

interface Heroe {
    id: string,
    name: string,
    age: number,
    saludar: () => void
}

// Uso correcto de una interface, es muy similar al uso de Types

const hero: Heroe = {
    id: '1',
    name: 'Ironman',
    age: 45,
    saludar: () => {
        console.log('Hola');
    }
}


// Interfaces dentro de interfaces

interface Product {
    id: string,
    title: string,
    price: number,
    stock: number
}

// Incluyo dentro de la Interface el Producto

interface Cart {
    totalPrice: number,
    totalItems: number,
    products: (Product | Shoe)[],
}

// Uso cotidiano de la Interface creada

const cart: Cart ={
    totalPrice: 0,
    totalItems: 0,
    products: [
        {
            id: '1',
            title: 'Ironman',
            price: 45,
            stock: 2
        }
    ]
}


// Uso del extend con Interfaces, esto no se puede hacer de forma tan sencilla o clara con los Types

interface Shoe extends Product {
    size: number
}

// Existen dos formas de definir funciones en las Interfaces, una es mas corta que la otra

interface CartOptions {
    add: (product: Product) => void,
    remove: (id: number) => void
    clear: () => void
}

interface CartOptions2 {
    add(product: Product): void,
    remove(id: number): void,
    clear(): void
}


/**
 * Principal diferencia de las Interfaces con los Types, podemos tener una Interface del mismo nombre, uniendola entre si !
*/

interface FirstInterface {
    id: string
    name: string
}

// Esto seria correcto manejando interfaces

interface FirstInterface {
    lastname: string
}

// Cuando usamos este interface tendriamos que seria la union de las dos definiciones que le dimos, con el mismo nombre

const firsInterface: FirstInterface = {
    id: '1',
    name: 'Ironman',
    lastname: 'XXXX'
}

/**
 *  Esto no pasa con los Types, no nos permite usar el mismo nombre de los Types que definimos
*/


// Esto marcaria un error, no lo podemos hacer usando Types.

// type SecondType = {
//     id: string
//     name: string
// }

// type SecondType = {
//     lastname: string
// }

