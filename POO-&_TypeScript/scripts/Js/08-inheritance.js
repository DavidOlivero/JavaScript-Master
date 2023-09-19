import { Tshirts } from "./05-TshirtsObject.js";
// The inheritance allow that a daugther class have all propeties and methots of your dad
export class Jaket extends Tshirts {
    constructor(color, modele, mark, size, price, hood) {
        super(color, modele, mark, size, price); // This call to the dad constructor
        this.changeHood = (hood) => {
            this.hood = hood;
        };
        this.getHood = () => {
            if (!this.hood) {
                return "No tiene capucha";
            }
            return "Tiene capucha";
        };
        this.hood = hood;
    }
}
