//配置解析及存储，给定一个字符串，里面为K,V的配置信息，请构造程序将其解析。
//实例字符串为" abc =b\\n  ;c=\\x61d;d=234;t=\\n;d=\"test;yes\";"。

//思路：使用正则匹配
function regexResolve(string){
  const reg = /[^;]*=[^=]*(?=;)/g;
  const obj = {};
  if (string) {
    const temArr = string.match(reg)
    temArr.forEach(kv => {
      if (kv) {
        const kvArr = kv.trim().split('=').map(e => e.trim())
        obj[kvArr[0]] = kvArr[1]
      }
    })
  }
  return obj
}

const string = ' abc =b\\n  ;c=\\x61d;d=234;t=\\n;d=\"test;yes\";"'
// console.log(resolve(string))
console.log(regexResolve(string))

//试错思路：分号分隔split()，去掉首尾的空白字符trim()，等号分隔，再去掉首尾空白字符，然而值里有分号时此法不可取
function resolve(string){
  const obj = {};
  if (string) {
    const temArr = string.trim().split(';')
    temArr.forEach(kv => {
      if (kv) {
        const kvArr = kv.trim().split('=').map(e => e.trim())
        obj[kvArr[0]] = kvArr[1]
      }
    });
  }
  return obj
}