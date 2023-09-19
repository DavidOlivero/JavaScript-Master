import { mandatorieMethots } from "./07-interfaces.js";
import { stamper } from "./09-decorators.js";

// A class is a object wich can have properties and methots

// Class
@stamper('David Dev')
export class Tshirts implements mandatorieMethots {
    private color: string
    private modele: string
    private mark: string
    private size: string
    private price: number

    // Constructor
    constructor(color: string, modele: string, mark: string, size: string, price: number) {
        this.color = color
        this.modele = modele
        this.mark = mark
        this.size = size
        this.price = price
    }
    
    // Methots
    public getProperties = (): string => {
        return `La camiseta es una ${this.mark} de color ${this.color}, ${this.modele}, es de talla ${this.size} y cuesta ${this.price}`
    }
    
    // public setProperties = (color: string, modele: string, mark: string, size: string, price: number) => {
    //     this.color = color
    //     this.modele = modele
    //     this.mark = mark
    //     this.size = size
    //     this.price = price
    // }
}