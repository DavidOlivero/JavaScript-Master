// A decorator is a extension for a class for alarge her functionally
export let stamper = (logo) => {
    return (target) => {
        target.prototype.stamping = () => {
            console.log(`La clase ha sido estampada con el logo de ${logo}`);
        };
    };
};
