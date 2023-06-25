// type Hero = {           // ✅ Definimos nuestro Type con Pascal Case
//   name: string
//   age: number
// }

// const hero: Hero = {      // ✅ Le indicamos a nuestro objeto su tipo
//   name: 'Ironman',
//   age: 1500
// }

// const createHero = (hero: Hero): Hero => {   // ✅ Indicamos el timpo de parametro que recibe y su devolucion
//   const { name, age } = hero
//   return { name, age }
// }

// createHero({ name: 'Wanda', age: 1500 })    // ✅ Usamos nuestra funcion teniendo en cuenta el tipado indicado


// Optional properties

// type Hero = {         // ✅ Definimos nuestro optional propertie con el caracter especial
//   id?: number,
//   name: string
//   age: number
//   isActive?: boolean
// }

// const hero: Hero = {
//   name: 'Ironman',
//   age: 1500
// }

// const createHero = (hero: Hero): Hero => {
//   const { name, age } = hero
//   return {
//     name,
//     age,
//     isActive: true
//   }
// }

// const wanda = Object.freeze(createHero({ name: 'Wanda', age: 1500 }))
// console.log('Wanda', wanda.isActive) // ----> True


// Template union types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`   // ✅ Type with template union types
// type Hero = {
//   id?: HeroId,
//   name: string
//   age: number
//   isActive?: boolean
// }

// const hero: Hero = {
//   name: 'Ironman',
//   age: 1500
// }

// const createHero = (hero: Hero): Hero => {
//   const { name, age } = hero
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true
//   }
// }

// const wanda = createHero({ name: 'Wanda', age: 1500 })
// console.log('Wanda', wanda.isActive) // ----> True

// type HexColor = `#${string}`
// const color: HexColor = '#ffff'


// Union Types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'   // ✅ Union type with strings
// type Hero = {
//   id?: HeroId,
//   name: string
//   age: number
//   isActive?: boolean,
//   powerScale?: HeroPowerScale
// }

// const hero: Hero = {
//   name: 'Ironman',
//   age: 1500
// }

// const createHero = (hero: Hero): Hero => {
//   const { name, age } = hero
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true
//   }
// }

// const wanda = createHero({ name: 'Wanda', age: 1500 })
// wanda.powerScale = 'multiversal'

// type HexColor = `#${string}`
// const color: HexColor = '#ffff'

// Intersection Types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

// // Basic type hero
// type HeroBasicInfo = {    // ✅ Separamos la info basica
//   name: string,
//   age: number
// }

// // Hero properties
// type HeroProperties = {   // ✅ Creamos un tipo de propiedades
//   id?: HeroId,
//   isActive?: boolean,
//   powerScale?: HeroPowerScale
// }

// // Hero type
// type Hero = HeroBasicInfo & HeroProperties  // ✅ Realizamos la intersecion

// const hero: Hero = {
//   name: 'Ironman',
//   age: 1500
// }

// const createHero = (hero: HeroBasicInfo): Hero => {
//   const { name, age } = hero
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true
//   }
// }

// const wanda = createHero({ name: 'Wanda', age: 1500 })
// wanda.powerScale = 'multiversal'

// type HexColor = `#${string}`
// const color: HexColor = '#ffff'

// Type indexing

// type HeroProperties = {
//   isActive: boolean,
//   address: {
//     planet: string,
//     city: string
//   }
// }

// const addressHero: HeroProperties['address'] = {
//   planet: 'Earth',
//   city: 'New York'
// }

// Type from value

// const address = {       // ✅ Definimos un objeto convencional
//   planet: 'Earth',
//   city: 'New York'
// }

// type Address = typeof address  // ✅ Creamos un tipo del objeto anterior

// const addressHero: Address = {    // ✅ Ahora nuestro objeto es de tipo Address
//   planet: 'Earth',
//   city: 'New York'
// }

// Type from function return

// function createAddress() {
//   return {
//     planet: 'Earth',
//     city: 'New York'
//   }
// }

// type Address = ReturnType<typeof createAddress>  // ✅ Creamos un tipo del objeto anterior

// Arrays

// const languages: (string | number)[] = []  // ✅ Manera correta de definir un array con varios tipos

// languages.push('JavaScript')
// languages.push(1)

// type HeroBasicInfo = {
//   name: string,
//   age: number
// }

// const heroes: HeroBasicInfo[] = []
// heroes.push({ name: 'Ironman', age: 1500 })
// heroes.push({ name: 'Spiderman', age: 1000 })
// heroes.push({ name: 'Thor', age: 3000 })
