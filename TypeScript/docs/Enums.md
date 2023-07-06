## Que es un Enum ?

En términos generales un Enum es un objeto de valores, es muy util para realizar validaciones de tipo de error dentro de bloques como los **IF, SWITCH** o en casos especiales algun otro bloque.

```ts
enum ERROR_TYPES {      // ✅ Definimos nuestro Enum
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN
}
```

### Cuando usar **Enum**

Debemos tener claro cuando usamos esto no siempre es util y no deberíamos usarlo en algunas situaciones.

✅ **Debemos usarlos cuando tenemos una colección de datos que sea Finita**
✅ **Debemos usarlos cuando podamos controlar los datos**
❌ **No debemos usarlos cuando la colección de datos sea Infinita**
❌ **No debemos usarlos cuando no podamos controlar los datos**




## Compilación de los Enum

La compilación a TS funciona de manera interesante, si vamos a nuestro Playground y ponemos el siguiente código veremos lo siguiente ⬇️

```js
"use strict";
var ERROR_TYPES;
(function (ERROR_TYPES) {
ERROR_TYPES[ERROR_TYPES["NOT_FOUND"] = 0] = "NOT_FOUND";
ERROR_TYPES[ERROR_TYPES["UNAUTHORIZED"] = 1] = "UNAUTHORIZED";
ERROR_TYPES[ERROR_TYPES["FORBIDDEN"] = 2] = "FORBIDDEN";
})(ERROR_TYPES || (ERROR_TYPES = {}));
```

Notemos que al momento de compilar para JS, nos asigna un valor a cada uno de nuestros valores dentro del enum. Esto en algunos casos puede ser un problema, para evitar que esto pase lo que podemos realizar es agregar a una const nuestro enum.

```ts
const enum ERROR_TYPES {      // Definimos nuestro Enum
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN
}

// Usamos nuestro Enum, muy similar a como lo usamos en JS
function mostrarMensaje(tipoError: ERROR_TYPES) {
  if (tipoError === ERROR_TYPES.NOT_FOUND) {
    return "No se encontro el recurso"
  } else if (tipoError === ERROR_TYPES.UNAUTHORIZED) {
    return "No se encontro el recurso"
  } else if (tipoError === ERROR_TYPES.FORBIDDEN) {
    return "No se encontro el recurso"
  } else {
    return ""
  }
}
```

El resultado de esto en la compilación de JS seria la siguiente ⬇️

```js
"use strict"
// Usamos nuestro Enum, muy similar a como lo usamos en JSfunction
mostrarMensaje(tipoError) {
	if (tipoError === 0 /* ERROR_TYPES.NOT_FOUND */) {
		return "No se encontro el recurso";    
	}else if (tipoError === 1 /* ERROR_TYPES.UNAUTHORIZED */) {
		return "No se encontro el recurso";
	}else if (tipoError === 2 /* ERROR_TYPES.FORBIDDEN */) {
		return "No se encontro el recurso";
	}else {
		return "";
	}
}
```

Notemos que en este caso, ya no se agrega el valor a un array, pero TS sabe que cada uno de nuestros valores equivale a un numero iniciando desde el **0**, esto también puede ser un problema.

Afortunadamente podemos solucionar esto asignándole un valor único.

```ts
enum ERROR_TYPES {      // Definimos nuestro Enum
  NOT_FOUND = 'notFound',
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden'
}
```

De esta manera podemos indicarle un valor único a cada uno.

### Cuando usar CONST vs ENUM

Como comentamos anteriormente, cuando usamos **CONST** ahorramos algo de código al momento de compilar, caso contrario pasa cuando usamos el **ENUM**. Ahora la pregunta es cuando usar uno o el otro, esto depende de lo que estemos codificando.

La recomendación seria siempre que se pueda usar **CONST** ya que esto genera menos código. Pero si estamos haciendo algo que va para alguna librería o algo que se va a consumir de manera externa, puede funcionar mejor hacerlo con el **ENUM**.

