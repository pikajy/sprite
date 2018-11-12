function createBase(baseNumber) {
  return function(N) {
    // 我们在这里访问 baseNumber，即使它是在这个函数之外声明的。
    // JavaScript 中的闭包允许我们这么做。
    return baseNumber + N;
  }
}

var addSix = createBase(6);
var add7 = createBase(7);




console.log(addSix(10));  // 16
addSix(21);  // 27

add7(21);  // 17
add7(21);  // 28


const greetings = ({name = 55, age = 12} , c = 56) => {
  console.log(age)
  return `hello ${name}`;
}

greetings({})
