// FILTER
const { childrenAge, mailList } = require("../data");

// 1. Crianças entre 2 - 11 anos

//const filterChildren = childrenAge.filter(
    element => element==10 || element==15 
//)

//console.table(filterChildren)

// 2. Emails rocketseat.com.br

const filteredMails = mailList.filter(itens => itens.includes("@"))
console.log(filteredMails)

// const filter = childrenAge.filter(age => age.includes("1"))
// console.log(filter)