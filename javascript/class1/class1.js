
// // const arr = [1, "Aeelo", true, "50","10","1","20","30","41", [1,2,3,4], {name:"rishabh"}] // array literals
// // console.log(arr);

// // // constructor
// // const arr2 = new Array()
// // console.log(arr2);

// // // using a method
// // const arr3 = Array.of()
// // console.log(arr3);

// // // for(let i = 0 ; i<arr.length; i++){
// // //   console.log(arr[i]);
// // // }

// // // for(const value of arr){
// // //   console.log(value);
// // // }


// // // ARRAY METHODS FOR ADDING AND REMOVING ELEMENTS

// // // arr.push(11,22,33,44,55) // add elements in last
// // // console.log(arr);

// // // arr.pop() // used to pop 1 ele from the last
// // // console.log(arr);
// // // arr.pop()
// // // console.log(arr);
// // // arr.pop()
// // // console.log(arr);
// // // arr.pop()
// // // console.log(arr);
// // // arr.pop()
// // // console.log(arr);
// // // arr.pop()
// // // console.log(arr);

// // // arr.unshift(10,20,30,40) // add ele in the start
// // // console.log(arr);

// // // arr.shift() // removes ele from the start

// // // console.log(arr);

// // // const newArr = arr.slice(2)
// // // console.log(arr);
// // // console.log(newArr);
// // // console.log(arr);

// // // const newArr2 = arr.splice(2, 0, "tata", "tata2", "tata3", "tata4")
// // // console.log(arr);
// // // console.log(newArr2);
// // // console.log(arr);

// // // concat


// // // ARRAY METHODS OR SEARCHING

// // console.log(arr.includes("1"))
// // console.log(arr.indexOf("1"))
// // console.log(arr.lastIndexOf("1"))
// // // console.log(arr.findIndex("1"))

// // // SORTING and REORDERING

// // console.log(arr.sort())
// // console.log(arr.reverse())




// // // let i = 0
// // // while(i<arr.length){
// // //   console.log(arr[i]);
// // //   i++
// // // }


// // // compilor
// // // interprator


// // // for
// // // while
// // // do while
// // // for each
// // // for of

// // console.log(5+5);
// // console.log("5"+"5");
// // console.log("5"-5);
// // console.log("5"+5);
// // console.log(5-"5");
// // console.log("a"-5);
// // console.log(5-"a");

// // console.log(Boolean("hello")); // hello non-empty string and non-empty strings are truthy value
// // console.log(Boolean(0)); // 0 is a falsy value
// // console.log(Boolean(1)); // non zero hence truthy value
// // console.log(Boolean([])); // empty array and aarys are objects in JS and all the objects are truthy
// // console.log(Boolean(true)); // 
// // console.log(Boolean(false)); //
// // console.log(Boolean(null)); // no value and no value is nothing means falsy value
// // console.log(Boolean(undefined)); // a variable which is declared but has no value means falsy
// // console.log(Boolean(NaN)); // not a number occurs when there is any inva;id mathematical operation means there ia a flsy value

// // "0" vs ""
// // "false"  vs false
// // []
// // {}
// // function () {}
// // 42
// // -43 vs -0 
// // inf or -inf 

// // 0 falsy
// // 0n flasy
// // null falsy
// // undef falsy
// // NaN falsy


// // if(null == NaN){
// //     console.log("hello 1");
// // }
// // if(null == undefined){
// //     console.log("hello 2");
// // }
// // if(NaN == undefined){
// //     console.log("hello 3");
// // }

// // if(kuch bhi == kuch bhi){
// // }

// // if(NaN == NaN){
// //     console.log("hello 4");
// // }


// // console.log([] == {});
// // console.log([] == ![]);
// // console.log([] == 0);
// // console.log([0] == 0);
// // console.log([1] == 0);

// // console.log([1] == 1);
// // [] = object
// // 1 number 
// // [1] = "1"
// // "1" == 1

// // console.log([] == true);

// // console.log([1,2] == "1,2");
// // console.log([1,2] == "1, 2");
// // console.log([1, 2] == "1,2");
// // console.log([1, 2] === "1,2");

// // console.log([NaN] == "NaN");
// // [NaN] = "NaN"

// // console.log([[[[[[]]]]]] == "");

// // console.log([null] == []);
// // console.log([null] == "");
// // console.log([23] === "");
// // console.log([undefined] == "");
// // console.log([undefined] == [null]);



// // if([]){
// //     console.log("truthy!");
    
// // }

// // [] = object
// // true = boolean

// // true = 1 
// // [] = "" = 0 

// const obj = {
//     name:"rishabh",
//     age: 24,
//     skills : ["HTML", "css", 2, 4],
//     married : false,
//     obj2 : {
//         key :"value",
//         key2:"value 2"
//     },
//     sharma: "cast",
//     hello: function() {
        
//     }
// }
// const obj2 = new Object()
// console.log(obj2);
// obj2.name="rishi"
// obj2.age = 24
// obj2.hello = function(){}
// console.log(obj2);


// const name = "sharma"
// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj[name]);


// // console.log(obj["sharma"]);

let arr = [1,2,3,4,5]

const obj = {
    name:"rishabh",
    age : 24
}

function hello() {
    
}

// console.log(arr.__proto__);
// console.log(arr.__proto__[0]);
console.log(arr.__proto__);
console.log("leng of arr", arr.__proto__.length);
console.log(arr.__proto__.push("tata"));
const arr2 = arr.__proto__.push("bye bye")
console.log("len of arr",arr.__proto__.length);
// console.log(arr.__proto__.push);
// console.log(arr.__proto__.push());
// console.log(arr.push("tata"));
// console.log(arr);
// console.log(obj);


// console.log(arr);
// console.log(obj);


