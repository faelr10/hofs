// FOREACH
const { passengers,shopCart } = require("../data");
// 1. Adicione a idade (age) para cada pessoa

// passengers.forEach(passengers=>{
//     passengers.age = 2022 - passengers.birthYear
// })

// console.table(passengers)

shopCart.forEach(shopCart=>{

    if(shopCart.quantity >= 2){  
        shopCart.valueDescont = `${shopCart.unitPrice - ((shopCart.unitPrice * 20)/(100))}$` 
    }
    
})

console.table(shopCart)