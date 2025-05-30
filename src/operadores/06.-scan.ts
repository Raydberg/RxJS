import { from, map, reduce, scan } from "rxjs"

const numeros = [1, 2, 3, 4, 5]

const totalAcumulador = (acc: number, cur: number) => acc + cur
// Reduce

from(numeros).pipe(
    reduce(totalAcumulador, 0)
).subscribe(console.log)


// Scan -> Podria ser la base para el patron redux
from(numeros).pipe(
    scan(totalAcumulador, 0)
).subscribe(console.log)

// Redux
interface Usuario {
    id?: string,
    autenticado?: boolean,
    token?: string,
    edad?: number
}
const user: Usuario[] = [
    { id: "ryan", autenticado: false, token: undefined },
    { id: "ryan", autenticado: true, token: "abc" },
    { id: "ryan", autenticado: true, token: "abc123" },
]


const state$ = from(user)
    .pipe(
        scan<Usuario, Usuario>((acc, cur) => {
            return {
                ...acc, ...cur
            }
        }, { edad: 33 })
    )


const id$ = state$.pipe(
    map(state => state.id)
).subscribe(console.log)




