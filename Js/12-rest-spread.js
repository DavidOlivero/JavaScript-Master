// REST & SPREAD
function fruts(frut1, frut2, ...otrhers_fruts) {
    console.log('Fruta 1: ' + frut1)
    console.log('Fruta 2: ' + frut2)
    console.log(otrhers_fruts) // El parámetro others_fruts es un REST porque acepta un número
    // indeterminado de parámetros que luego los guarda en un array
}

// Los parámetros SPREAD son aquellos que se pueden pasar como array
let defaultFruts = ['Manzana', 'Pera']
fruts(...defaultFruts, 'Maracullá', 'Melón', 'Toronja')