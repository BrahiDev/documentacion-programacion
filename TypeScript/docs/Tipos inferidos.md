#backend #frontend #developer 

La recomendacion es usar VS Code para programar sobre TS, esto debido a que VS Code esta contruido sobre TS. Esto indica que tenmos mejor compatibilidad.

Los tipos inferidos son los cuales no es necesario que indiquemos el tipo de la variable TS la toma de manera automática.

![[Inferidos 1.png]]
![[Inferidos 2.png]]
![[Inferidos 3.png]]

**No siempre los tipos inferidos funcionan, por ejemplo no funciona si tenemos una Funcion, solo serviria si tenemos un contexto de la funcion.**

![[Inferidos 4.png]]
![[Inferidos 5.png]]
![[Inferidos 6.png]]
![[Inferidos 7.png]]
![[Inferidos 8.png]]

## Callback function con typado

Tambien podemos typar una funcion tipo callback.

![[Inferidos 9.png]]

## Arrow functions

Para tipar este tipo de funciones tenemos dos formas, eligue la que mas te guste !

![[Inferidos 10.png]]


## Inferencia de funciones con contexto

Como comentamos anteriormente las funciones no tienen inferencia de manera predeterminada, solo si tiene un contexto definido con anterioridad.


![[Inferidos 11.png]]
![[Inferidos 12.png]]

En este caso estamos definiendo un array de String, lo cual al pasarle esto a una funcion Anonima como lo es ForEach, Map, Etc. TS entiende y infiere el tipo de estos items.

