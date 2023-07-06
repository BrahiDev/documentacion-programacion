#backend #frontend #developer 

### Problemas con las Tuplas

Unos de los problemas que encontramos al usar Tuplas es que si agregamos un Push a una variable que usa una Tupla esto nos permite hacerlo, aunque definamos la Tupla nos permite hacerlos sin ningún problema ⬇️

```ts
// Problema con las Tuplas
type RGB = [number, number, number]
const rgb: RGB = [255, 0, 0]

rgb.push(4)   // ❌ Nos permite agregar un numero mas a la Tupla !
```

**La solucion recomendada para este problema es agregar un Read-only, de esta manera evitamos que nos agreguen algo nuevo despues de que es inicializada la variable**

```ts
// Problema con las Tuplas
type RGB = readonly [number, number, number] // ✅ Agregamos un ReadOnly
const rgb: RGB = [255, 0, 0]

rgb.push(4)   // ✅ Ya no nos permite agregar un nuevo elemento
```
