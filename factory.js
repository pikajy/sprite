var fs = []
var x = 8

function factory(i) {
  return function() {
    x += 1
    console.log(i, x)
  }
}

for (var index = 0; index < 10; index++) {
  fs.push(factory(index))
}

for (var i = 0; i < 10; i++) {
  fs[i]()
}
