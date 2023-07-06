
Las aserciones de tipo no son mas que una forma de indicarle a TS que confié en nosotros y interprete nuestra variable de la manera que le indicamos.

**Ten cuidado, nosotros no siempre somos confiables 🤔**

### Contexto

Supongamos que necesitamos obtener de nuestro **DOM** un elemento cualquiera, en este caso tendríamos que vamos a obtener un elemento **CANVAS** de nuestro HTML.

```ts
const canvas = document.getElementById('canvas')
```

Esta seria la forma convencional en la que traemos un elemento, pero aquí tenemos un problema.

**Recordemos que TS funciona en tiempo de compilación no funciona en tiempo de ejecución, por ende no sabe que tiene esta variable y nos comenzara a decir que algo esta mal.**

```ts
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2s') // ❌ TS no sabe que la funcion existe
```

Una manera sencilla de arreglar esto usando las **Aserciones de tipo** seria indicarle a TS que confié en nosotros y que trate nuestra variable de **CANVAS** de una forma que le indiquemos.

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2s') // ✅ TS ya sabe que es un canvas
```

Esto en principio nos funciona, el problema aquí es que TS debe confiar en nosotros y como bien sabes podemos equivocarnos.

Entonces te explico otras formas de solucionar esto, una de ellas es usar condicionales, preguntar si esta variable es diferente de **NULL** y si realmente si es un Canvas Element.

```ts
const canvas = document.getElementById('canvas')

if (canvas != null) {
	// ✅ TS ya sabe que es un canvas
	const ctx = (canvas as HTMLCanvasElement).getContext('2s') 
}
```

Nota en este ejemplo que aun estamos usando **Aserción de tipos**, la unica diferencia es que ahora estoy validando que canvas sea diferente de **NULL**, en caso de no encontrarlo no me marca error en la ejecución.

Aun tenemos otro problema, que pasaría si alguien cambia mi elemento y ya no estoy buscando un **CANVAS** ahora estoy buscando un **SPAN**, al momento de ejecutarlo esto fallaría.

```ts
const canvas = document.getElementById('span')

if (canvas != null) {
	// ❌ Error, getContext es de CANVAS no de SPAN
	const ctx = (canvas as HTMLCanvasElement).getContext('2d')
}
```

Pero claro TS no me avisa que esto esta mal, por que el no sabe que tengo dentro de mi variable, además le indique que confiara en mi y lo tratara como un elemento **CANVAS**, pero evidentemente me equivoque. Ahora cuando ejecute esto JS no va encontrar esta función y nos va a mostrar error.

**Recuerda que la buena practica es evitar definir los tipos en todo momento todo, lo mejor seria dejar que TS pueda inferir lo que mas pueda.**

```ts
const canvas = document.getElementById('span')

if (canvas != null && canvas instanceof HTMLCanvasElement) {
  const ctx = canvas.getContext('2d') // ✅ TS ya sabe que es un canvas
}
```

Para esto usamos **instanceof**, validamos que nuestra variable realmente si sea una instancia de **CANVAS**. Fíjate que esto es JS no estamos usando nada de TS, de esta manera TS realiza inferencia de tipos y ya sabe que cuando entre en ese bloque de código va a tener un elemento de **CANVAS**.

De esta manera ya no tenemos errores en nuestra ejecución y lo mejor usamos las mejores practicas dejando que TS infiera el tipo.

### Fetching

Ahora veremos como podemos usar las **Aserciones de tipo** dentro de un fetch en TS.

Primero, vamos a realizar un consumo de una API de manera normal, como lo hariamos en JS.

```ts
const API_URL = 'https://api.github.com/search/repositories?q=javascript'
const response = await fetch(API_URL)

if (!response.ok) {
  throw new Error('No se pudo obtener la respuesta')
}

const data = await response.json()
```

En este punto ya encontramos algun problema, que pasaría si quisiéramos usar información que tiene nuestra variable **data**.

Esto tendría error, por que como sabes TS no sabe que tiene esta variable, puede ser cualquier cosa, por ende nos permite hacer cualquier cosa con esta data.

```ts
const API_URL = 'https://api.github.com/search/repositories?q=javascript'
const response = await fetch(API_URL)

if (!response.ok) {
  throw new Error('No se pudo obtener la respuesta')
}

const data = await response.json()
data.asdasdas = ''  // ❌ TS no sabe que es un objeto de github
```

Para solucionar esto es necesario que usemos **Aserciones de tipo**, una forma rápida de arreglar esto es decirle a TS que confié en nosotros y definir un tipo para esto.

```ts
const API_URL = 'https://api.github.com/search/repositories?q=javascript'
const response = await fetch(API_URL)

if (!response.ok) {
  throw new Error('No se pudo obtener la respuesta')
}

type APIResponse = {
  items: Object[]
}

const data = await response.json() as APIResponse

data.items  // ✅ TS ya sabe que es un array de objetos
data.asdasdas = ''  // ❌ TS no sabe que es un objeto de github
```

Esta solucion nos funciona perfectamente, pero no es la mejor practica.

**Nos llevaría mucho tiempo definir los tipos todo lo que nos retorne la API, por ende podemos usar un recurso interesante que nos ayuda con el tipado de esto.**

Vamos a llevar la respuesta de nuestra API a este recurso ➡️[QuickType](https://app.quicktype.io/), cuando estemos aquí podremos convertir esta respuesta a los tipos de TS.

Luego de esto usamos este tipado en nuestra variable para indicarle a TS que confié en nuestro criterio.

```ts
const API_URL = 'https://api.github.com/search/repositories?q=javascript'
const response = await fetch(API_URL)

if (!response.ok) {
  throw new Error('No se pudo obtener la respuesta')
}

// ✅ TS ya sabe que es un GithubResponse
const data = await response.json() as GithubResponse

data.items.map(item => {
 // ❌ TS sabe el tipo y me arroja error en lo que no exista
  return {
    name: item.name,
    id: item.id,
    url: item.link,  // ❌ No existe esta propiedad, nos muestra error
  }
})
```

**Ten en cuenta que esta forma con las aserciones de tipo no da la seguridad de que siempre funcione, imagina el caso donde cambien la API que usamos, cuando intentemos acceder a alguna propiedad tendremos error.**

Una forma de solucionar esto también es por medio de nuestro recurso ➡️[QuickType](https://app.quicktype.io/) allí encontraras una opcion llamada **TypeScript Zod**, esto sigue siendo TS pero con la diferencia que nos incluye una librería para validar en tiempo de ejecución estos tipados.

Puedes encontrar mas información en su pagina web oficial ➡️ [TypeScript Zod](https://zod.dev/?id=basic-usage)

**Debes tener en cuenta que cuando usamos esta forma de validación estaríamos agregando mas código a la compilación, por ende puede afectar al rendimiento. Piensa muy bien cuando usar TypeScript Zod y cuando usar las Aserciones de tipos nativas**

