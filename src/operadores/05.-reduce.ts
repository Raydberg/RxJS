import { interval, reduce, take, tap } from "rxjs"

const numbers = [1, 2, 3, 4, 5]

//Sin rxjs
const totalReducer = (acc: number, c: number) => {
    return acc + c
}

const total = numbers.reduce(totalReducer, 0)
// Con rxjs
interval(1000)
    .pipe(
        take(3),
        tap(console.log),
        reduce(totalReducer,1)
    )
    .subscribe({
        next: val => console.log(val),
        complete: () => console.log("Completado")
    })
