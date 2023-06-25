// Functions

function saludar({ name, age }) {             // ❌ Funcion mal formada, TS no infiere en funciones, solo si tiene un contexto.
  console.log(`Hola ${name}, tienes ${age}`)
}

saludar({ name: 1, age: '1' })                // ❌ Esta tomando unos valores incorrectos, se espera un String y Number


// ✅ Primera solucion
function saludar_one({ name, age }: { name: string, age: number }) {      // ✅ Adicionamos los tipados correctos al objeto
  console.log(`Hola ${name}, tienes ${age}`)
}

saludar_one({ name: 'Brahian', age: 1 })                                  // ✅ De esta manera ya sabemos que los valores que enviamos son los correctos

// ✅ Segunda solucion
function saludar_two(person: { name: string, age: number }) {       // ✅ Adicionamos un solo parametro y le decimos que el tipo que recibe es nuestro objeto
  const { name, age } = person                                      // ✅ Con esta solucion estariamos obligados a realizar destructuring de los parametros
  console.log(`Hola ${name}, tienes ${age}`)
}

saludar_two({ name: 'Brahian', age: 1 })                            // ✅ Funciona correctamente los parametros que le enviamos 


const sayHiFromFunction = (fn: (name: string) => void) => {         // ✅ Callback function, podemos typar directamente una funcion que recibimos por parametro y su retorno
  fn('Brahian')
}

const sayHi = (name: string) => {
  console.log(`Hello ${name}`)
}

sayHiFromFunction(sayHi)

// Arrow functions
const sumar = (a: number, b: number): number => {                 // ✅ Primera forma de realizar el tipado
  return a + b
}

const restar: (a: number, b: number) => number = (a, b) => {      // ✅ Segunda forma de realizar el tipado
  return a - b
}

// Never
function throwError(message: string): never {       // Tipo de retorno que indica que no vamos a retornar nada ✅
  throw new Error(message)
}

// Inferencia funciones anonimas segun el contexto
const avengers = ['Spidey', 'Hulk', 'Thor']
avengers.forEach(avenger => {
  console.log('Avenger', avenger.toUpperCase)
})
