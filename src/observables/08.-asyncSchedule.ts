import { asyncScheduler } from "rxjs"


/**
 * Estos dos metodos tambien se podrian realizar haciendo uso de
 * asyncScheduler
 */
// setTimeout(() => { }, 3000);
// setInterval(() => { }, 3000);


const saludar = () => console.log("Hola Mundo")
const saludar2 = (nombre: string | undefined) => console.log(`Hola ${nombre}`)



/**
 * @params
 * 1.- el primer parametro que recibe es la funcion que nosotros queremos ejecutar
 * 2.- el segundo parametro es la cantidad de tiempo o delay , que nosotros queremos ejecutar 
 */
// asyncScheduler.schedule(saludar, 2000)

/**
 * @params
 * 1.- el primer parametro que recibe es la funcion que nosotros queremos ejecutar
 * 2.- el segundo parametro es la cantidad de tiempo o delay , que nosotros queremos ejecutar 
 * 3.- el tercer argumento en si no es un parametro seria nuestro "state" que nosotros vamos q querer que tenga la funcion 
 * por ejemplo nuestra funcion de saludar2 recibe un argumento , eso es lo que mandariamos como tercer argumento
 */
// asyncScheduler.schedule(saludar2, 2000, "Ryan")

//*Configurar un setInterval o un setTimeout con un asyncScheduler

//El parametro no puede hacer una funcion de flecha

const subs = asyncScheduler.schedule(function (state = 0) {
    console.log("state", state)
    this.schedule(state + 1, 1000)
}, 3000, 0)


//Cancelamos la subscripcion de 2 maneras
//* Manera 1
setTimeout(() => {
    subs.unsubscribe()
}, 6000);


//* Manera 2
asyncScheduler.schedule(() => subs.unsubscribe(), 6000)

