// function 

// y = hello(x)


// parameterized 


// non parameterized
// func dec
// console.log(hello());
// function hello() {
//   console.log("hello");
// }
// console.log(hello());

// // named func exp
// console.log(hey);
// var i = 0
// var hey = function cuvette() {
//   i++
//   if(i<10){
//     hey()
//     console.log(i);
//   }else{
//     console.log("hello");
//   }
// }
// hey()
// cuvette()
// console.log(hey());


// // Anno funct
// (function() {
//   console.log("hello");
// })



// // func exp
// const hey2 = function() {
//   console.log("hello");
// }

// // arrow 
// const hey3 = () => {
//   console.log("hello");
// }

// // IIFE
// (function() {
//   console.log("hello");
// })()

// // async
// async function name() {
  
// }

// const hey4 = async () => {
//   console.log("hello");
// }


// for(const i =0; i<=10; i++){
//   console.log(i);
// }

(function() {
  console.log("hello");
  return function hello(){
    console.log("kya haal hai????");
  }
})()()()