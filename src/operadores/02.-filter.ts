import { filter, from, fromEvent, map, Observable, of, range } from "rxjs";

range(20, 30).pipe(
    filter((val, i) => {
        console.log("Index", i)
        return val % 2 === 1
    })
)//.subscribe(console.log)


interface Personaje {
    tipo: string;
    nombre: string
}

const personajes: Personaje[] = [
    {
        tipo: "heroe",
        nombre: "Batman"
    },
    {
        tipo: "heroe",
        nombre: "Robin"
    },
    {
        tipo: "villano",
        nombre: "Batman"
    },
]



from(personajes).pipe(filter(p => p.tipo == "heroe")).subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
    map(event => event.code),
    filter(code => code === "Enter")
)
keyup$.subscribe(console.log)