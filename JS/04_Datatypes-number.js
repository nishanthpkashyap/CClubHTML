let x = 5
console.log(typeof x)

x = 0.5
console.log(x)

x = 0xf
console.log(x)

x = -5/0
console.log(x)

x = 5/0
console.log(x)

x = 1.5e2
console.log(x)

x = 150_00_00_00 // '_' can be used instead of ',' like we do to seperate many zeroes
console.log(x)

console.log(Number.MAX_VALUE)

x = 10005666644433n
console.log(x)

console.log(x + 2n)