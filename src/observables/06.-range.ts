import {  range } from "rxjs";

// const src$ = of(1, 2, 3, 4, 5)
/**
 * Esto no significa que va a ir del 1 al 5 , lo que quiere decir 
 * es que va a estar emitiendo 5 valores siguientes
 */
// const src$ = range(1, 5)
const src$ = range(-5, 10)

console.log("Inicio")
src$.subscribe(console.log)
console.log("Fin")
