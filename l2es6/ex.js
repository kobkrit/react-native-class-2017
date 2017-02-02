
// const number1 = 5;
// const number2 = 10.0;
// console.log(number2 - number1);
// console.log(typeof(number1));
//
// console.log(null == undefined);
// console.log(!!true);
// console.log(!!!true);
// console.log(!!!1);
// console.log(!!undefined);
//
//
//
//
//
// const myObject = {a: 1, b: 2};
// console.log(myObject['a']);
// console.log(myObject['b']);
// console.log(myObject);
//
// const myObject2 = myObject;
// myObject['a'] = 999;
// console.log(myObject['a'], myObject2['a']);
//
//
//
//
//
// const b = 777;
// // b = 888;
//
// var a = 3;
// for (let a=0;a<2;a++){
//   console.log(a);
// }
// {
//   let a=999;
//   console.log(a);
// }
// {
//  console.log(a);
// }
//
//
//
//
// const fn1 = (a) => a*3;
// function fn2(a){
//   return a/5;
// }
// let fn3 = function(a,b){
//   return a+b;
// }
//
// console.log(fn3(fn1(fn1(2)),fn1(fn2(10))));
//
//
//
//
// const recurAdd = (a) => {
//   if (a == 0) return 0;
//   return recurAdd(a-1)+a;
// }
//
// setTimeout(()=>{
//   console.log(recurAdd(10));
// }, 1000);
//
// setTimeout(()=>{
//   console.log(recurAdd(5));
// }, 100);
//
// setTimeout(()=>{
//   console.log(recurAdd(1));
// }, 1);
//
//
//
//
//
// function sumAll(...num){
//   var total = 0;
//   for (var i=0;i<num.length;i++){
//     total+=num[i];
//   }
// }
//
// console.log(sumAll(1,2,3,4,5,6));
// console.log(sumAll(1,2,3,4,5,6));
//
// function power({base = 1, power = 2} = {}){
//   return Math.pow(base,power);
// }
// console.log(power());
// console.log(power({}));
// console.log(power({base: 3, power: 10}));


let number = "123.34";
let numToWord = {
  "1": "one",
  "2": "two"
}
for (var i=0;i<number.length;i++){
  console.log(number[i]);
}
