import { fromEvent, interval, skip, takeUntil } from "rxjs"

const boton = document.createElement("button")

boton.innerHTML = "Detener Timer"
document.querySelector("body")?.append(boton)

const counter$ = interval(1000)
const clickBtn$ = fromEvent(boton, "click").pipe(
    // Cuantas emiciones de este evento 
    // me las quiero saltar
    skip(1)
)


counter$
    .pipe(
        takeUntil(clickBtn$)
    )
    .subscribe({
        next: val => console.log("next", val),
        complete: () => console.log("Completado")
    })