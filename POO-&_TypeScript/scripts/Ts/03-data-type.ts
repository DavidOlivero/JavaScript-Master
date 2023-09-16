// String
let userName: string = 'David Olivero'
console.log(userName)

// Number
let yearsOld: number = 23
console.log(yearsOld)

// Boolean
let isSingle: boolean = true
console.log(isSingle)

// Any
let anyValue: any = 'Auto'
console.log(anyValue)

// Array
let languages: Array<string> = ['Python', 'C', 'JavaScript', 'Java', 'Rust', 'TypeScript']
console.log(languages)

let years: number[] = [23, 45, 10, 18, 17]
console.log(years)

// Diferents ata types
let values: string | number = '34'
console.log(values)

values = 34
console.log(values)

// Custom data types
type alphanumerics = string | number
let companyName: alphanumerics = `Paradize ${Number(123)}`
console.log(companyName)