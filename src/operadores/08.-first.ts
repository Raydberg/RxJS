import { first, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, 'click')

click$
    .pipe(
        tap<PointerEvent>(console.log),
        // first() -> igual que take(1)
        first<PointerEvent>(event => event.clientY >= 150)
    )
    .subscribe({
        next: val => console.log("next", val),
        complete: () => console.log("complete")
    })
