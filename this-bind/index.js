'use strict'

function foo(a, b) {
  console.log(a, b)
  console.log(this) // global
}
// console.log(global)
foo()

console.log(1)

const o = {
  f: foo
}

o.f()

console.log(2)

const o1 = {
  o: o,
  a: 'a'
}

o1.o.f()

console.log(3)

// 强绑定
const o2 = {
  ff: foo.bind(o1)
}

o2.ff()

// 间接绑定
o.f.call({y: 'y'}, 1, 2)
o.f.apply({y: 'y'}, [1, 2])

console.log('...........')

// new 绑定
console.log(typeof new String('333'))
console.log(typeof String('333'))

function cxx(a) {
  this.a = a
  this.b = 'b'
  return 'xxxxx'
}

const o3 = new cxx(4)
console.log(o3)
console.log(cxx(4))

// 等价于
const o4 = {}
console.log(cxx.call(o4, 5))
console.log(o4)
