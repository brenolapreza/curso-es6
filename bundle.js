"use strict";

// ##### map ##### 
var arr = [1, 2, 3, 4, 5, 6];
/*
const percArr = arr.map(function(item){
    return item + 2
})

console.log(percArr)
*/
// ##### reduce ##### 

/*
const redArr = arr.reduce(function(total, next){
    return total + next
})
//0 + 1 = 1
//1 + 2 = 3
//3 + 3 = 6
//6 + 4 = 10
//10 + 5 = 15
//15 + 6 = 21

console.log(redArr);
*/
// ##### filter ##### 

/*
const filtro = arr.filter(function(item){
    return item % 2 === 0;
})
console.log(filtro)
*/
// ##### find ##### 

var procurar = arr.find(function (item) {
  return item === 9;
});
console.log(procurar);
