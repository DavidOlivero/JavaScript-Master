import { Tshirts } from "./05-TshirtsObject.js";

// The inheritance allow that a daugther class have all propeties and methots of your dad
export class Jaket extends Tshirts {
    private hood: boolean

    constructor(color: string, modele: string, mark: string, size: string, price: number, hood: boolean) {
        super(color, modele, mark, size, price) // This call to the dad constructor
        this.hood = hood
    }

    changeHood = (hood: boolean) => {
        this.hood = hood
    }

    getHood = (): string => {
        if (!this.hood) {
            return "No tiene capucha"
        }

        return "Tiene capucha"
    }
}