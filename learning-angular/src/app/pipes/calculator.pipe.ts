import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'calculator' })
export class CalculatorPipe implements PipeTransform {
    transform(value: number, secondValue: number) {
        let operations = `
            Suma: ${value + secondValue} \n
            Resta: ${value - secondValue} \n
            Multiplicación: ${value * secondValue} \n
            División: ${value / secondValue}
        `

        return operations
    }
}