// FIND
const { passengers } = require("../data");

// 1. Encontre o passageiro de nome: "Enzo"

const findname = passengers.find(passengers => passengers.birthYear === 2004)

console.log(findname)