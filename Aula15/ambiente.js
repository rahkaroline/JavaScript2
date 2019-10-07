var num = [5, 8, 2, 9, 3]
num.push(1) // acrescenta um valor na ultima posição
num.sort() // coloca os elementos em orgem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vertor é ${num[0]}`)

var pos = num.indexOf(4)
if (pos == -1) {
    console.log("O valor não foi encontrado!")
} else {
    console.log(`O valor 8 esta na posção ${pos}`)
}
