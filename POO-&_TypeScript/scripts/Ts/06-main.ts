import { Tshirts } from "./05-TshirtsObject.js";
import { Jaket } from "./08-inheritance.js";

let elegantNike = new Tshirts("Azul", "Manga larga", "Nike", "L", 20000)
let propertiesElegantNike: string = elegantNike.getProperties()
elegantNike.stamping()

console.log(propertiesElegantNike)

let jacketAdidas = new Jaket("Negro", "Manga larga", "Adidas", "M", 70000, false)

let propertiesJacketAdidas: string = jacketAdidas.getProperties()
let haveHoodJacketAdidas: string = jacketAdidas.getHood()

console.log(propertiesJacketAdidas, haveHoodJacketAdidas)