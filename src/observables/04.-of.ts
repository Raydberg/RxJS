import { of } from "rxjs";

const obs$ = of(1, 2, 3, 4, 5, 6)
obs$.subscribe(
    {
        next: valor => console.log(valor),
        error: () => null,
        complete: () => console.log("Terminamos")
    }
)