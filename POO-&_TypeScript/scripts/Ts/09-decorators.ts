// A decorator is a extension for a class for alarge her functionally
export let stamper = (logo: string): Function => {
    return (target: Function) => {
        target.prototype.stamping = (): void => {
            console.log(`La clase ha sido estampada con el logo de ${logo}`)
        }
    }
}