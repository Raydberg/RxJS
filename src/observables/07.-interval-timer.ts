import { interval, timer, type Observer } from "rxjs";

const observer: Observer<any> = {
    next: val => console.log("next", val),
    error: err => console.error("Error", err),
    complete: () => console.log("Completado")
}



// Esto es sincrono
// const interval$ = interval(1000)
/**
 * Le decimos que incie mi interval luego de que pase los 2000 segundos y se ejecute cada 1000 segundos
 * 
*/
// const timer$ = timer(2000, 1000)
const hoyEn5 = new Date()
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5)
const timer$ = timer(hoyEn5)
console.log("Inicio")
timer$.subscribe(observer)
console.log("Fin")
