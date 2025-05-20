import { fromEvent, map, takeWhile } from "rxjs";


const click$ = fromEvent<PointerEvent>(document, "click")

click$
    .pipe(
        map(({ x, y }) => ({ x, y })),
        // No emite el ultimo valor que hace que el takeWhile rompe la condicion
        // takeWhile(({ y }) => y < 150)
        // Si queremos que se emita el valor que rompe la condicion
        // mandemos el segundo parametro que seria el inclusive 
        takeWhile(({ y }) => y < 150, true)
    )
    .subscribe({
        next: val => console.log("next", val),
        complete: () => console.log("Completado")
    })