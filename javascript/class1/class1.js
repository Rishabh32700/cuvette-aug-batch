function hello() {
  console.log("Hello !!!");

  return function bye(){
    console.log("nikl jaaaa !");
  }
}

var a = hello()
console.log(a());