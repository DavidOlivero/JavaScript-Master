// Get console parametters
const params = process.argv.slice(2)

const number1 = params[0]
const number2 = params[1]

const operations = `
    La suma de los números es: ${number1 + number2}.
    La resta de los números es: ${number1 - number2}.
    La multiplicación de los números es: ${number1 * number2}.
    La división de los números es: ${number1 / number2}.
`


console.log(operations)