const SYM = Symbol()
const o = {
  a: 1,
  b: 2,
  c: 3,
  [SYM]: 4
}
const propArray = Object.keys(o) // for...inと同様にキーがシンボルの場合は、リストされない
console.log(propArray)
console.log('------')
propArray.forEach(prop => console.log(`${prop}: ${o[prop]}`))
