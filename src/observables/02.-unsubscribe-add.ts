import { Observable, type Observer } from "rxjs";

const observer: Observer<number> = {
    next: value => console.log("next :", value),
    error: error => console.warn("error:", error),
    complete: () => console.info("completado")
}

const intervalo$ = new Observable<number>(subscriber => {
    let count = 0
    const interval = setInterval(() => {
        count++
        //Emitimos el valor mediante el next
        subscriber.next(count)
        console.log("Observable", count)
    }, 1000);

    setTimeout(() => {
        subscriber.complete()
    }, 2500);

    // Procedimiento que se ejecuta cuando se realiza un unsubcribe()
    return () => {
        clearInterval(interval)
        console.log("Intervabo destruido")
    }
})
const subs1 = intervalo$.subscribe(observer)
const subs2 = intervalo$.subscribe(observer)
const subs3 = intervalo$.subscribe(observer)

subs1.add(subs2);
subs1.add(subs3);

//Cancelamos la susbcription

setTimeout(() => {
    subs1.unsubscribe()
    console.log("Completado timeout")
}, 3000);