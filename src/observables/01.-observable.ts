import { Observable, type Observer } from "rxjs";

// Definimos un observer
const observer: Observer<string> = {
    next: value => console.log("Siguiente [next] :", value),
    error: error => console.warn("Error [obs] ", error),
    complete: () => console.info("Completado [obs]")
}

const obs$ = new Observable<string>(subs => {
    subs.next("Hola")
    subs.next("Mundo")
    // Ya no se sigue emitiendo mas valores en la salida
    subs.complete()
    subs.next("Mundo")
}
);


// Para que un observable se ejecute debe tener una subscripcion
// Podemos hacerlo de varias maneras
//* Forma numero 1
obs$.subscribe({
    next: valor => console.log('next:', valor),
    error: err => console.warn('error:', err),
    complete: () => console.info('Completado')
});
// obs$.subscribe(resp => console.log(resp))


//* Forma  numero 2

obs$.subscribe(observer)