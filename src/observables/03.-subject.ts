import { Observable, Subject, type Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("next :", value),
    error: error => console.warn("error:", error),
    complete: () => console.info("completado")
}

const intervalo$ = new Observable<number>(subs => {
    const intervalId = setInterval(() => subs.next(Math.random()), 2000);
    return () => {
        clearInterval(intervalId)
        console.log("Intervalo destruido")
    }

})

/**
 * Si necesitamos crear susbcripciones pero los 
 * valores emitidos sean los mismos para todas las subscripciones
 */


// El subject es un tipo especial de Observable
/**
 * 1.- Casteo Multiple -> Muchas subscripciones van a estar sujetas a un solo subject o observable y va a distribuir la informacion a todos los lugares donde
 * esten subscritos 
 * 2.- Tambien es un Observer -> Mandarlo dentro de los parametros de un subscribe
 * 3.- Next , Error y Complete
 */
const subject$ = new Subject()
const intervalSubject = intervalo$.subscribe(subject$)
const subs1 = subject$.subscribe(observer)
const subs2 = subject$.subscribe(observer)

/**
 *  Cuando la data es producida por el observable en si mismo , es considerado
 * un "Cold Observable", pero cuando la data es producida fuera del observable es llamado "Hot Observable"
 * 
 */
setTimeout(() => {
    subject$.next(10)
    subject$.complete()
    intervalSubject.unsubscribe()
}, 3500);