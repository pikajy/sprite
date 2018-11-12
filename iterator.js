const it = {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          done: false,
          value: '55'
        }
      }
    }
  }
}

for (const iterator of it) {
  console.log(iterator)
}
