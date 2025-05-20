import { fromEvent, map, range } from "rxjs";


range(1, 5)
    .pipe(
        //<entrada,salida>
        map<number, number>(resp => resp * 10)
    )
    .subscribe(console.log)

//Sin map

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup")

keyup$.subscribe(({ code }) => console.info(code))


//Con map

keyup$.pipe(map(({ code }) => code)).subscribe(console.log)
