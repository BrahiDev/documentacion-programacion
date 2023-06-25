#backend #frontend #developer 

La recomendacion es usar VS Code para programar sobre TS, esto debido a que VS Code esta contruido sobre TS. Esto indica que tenmos mejor compatibilidad.

Los tipos inferidos son los cuales no es necesario que indiquemos el tipo de la variable TS la toma de manera automática.

![Inferidos 1.png](../images/Inferidos%201.png)
![Inferidos 2.png](../images/Inferidos%202.png)
![Inferidos 3.png](../images/Inferidos%203.png)

**No siempre los tipos inferidos funcionan, por ejemplo no funciona si tenemos una Funcion, solo serviria si tenemos un contexto de la funcion.**

![Inferidos 4.png](../images/Inferidos%204.png)
![Inferidos 5.png](../images/Inferidos%205.png)
![Inferidos 6.png](../images/Inferidos%206.png)
![Inferidos 7.png](../images/Inferidos%207.png)
![Inferidos 8.png](../images/Inferidos%208.png)

## Callback function con typado

Tambien podemos typar una funcion tipo callback.

![Inferidos 9.png](../images/Inferidos%209.png)

## Arrow functions

Para tipar este tipo de funciones tenemos dos formas, eligue la que mas te guste !

![Inferidos 10.png](../images/Inferidos%2010.png)


## Inferencia de funciones con contexto

Como comentamos anteriormente las funciones no tienen inferencia de manera predeterminada, solo si tiene un contexto definido con anterioridad.


![Inferidos 11.png](../images/Inferidos%2011.png)
![Inferidos 12.png](../images/Inferidos%2012.png)

En este caso estamos definiendo un array de String, lo cual al pasarle esto a una funcion Anonima como lo es ForEach, Map, Etc. TS entiende y infiere el tipo de estos items.

