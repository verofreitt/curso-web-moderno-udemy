const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //massa quebrou o carro
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar ou remover elementos

//adicionar
pilotos.aplice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

//remover 
pilotos.splice(3, 1) //massa quebrou 
console.log(pilotos)

const algusPilotos = pilotos.slice(2) // novo array
console.log(algusPilotos)

const algusPilotos2 = pilotos.slice(1, 4) 
console.log(algusPilotos2)