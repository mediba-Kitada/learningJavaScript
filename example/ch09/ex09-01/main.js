// オブジェクトのプロパティをリスト処理
const SYM = Symbol()
const o = {
  a: 1, 
  b: 2, 
  c: 3,
  [SYM]: 4 // シンボルをプロパティに含むためのリテラル表記
}
for (let prop in o) {
  if (!o.hasOwnProperty(prop)) continue // 継承によってプロパティをもつ場合があるので、独自のプロパティを列挙したい場合はhasOwnPropertyによるチェックが必要
  console.log(`${prop}: ${o[prop]}`)
}

const o2 = {
  a: 1,
  b: 2,
  c: 3,
  SYM: 4 // プロパティのキーは、"SYM"となる
}
console.log(o2.SYM);
console.log(o2["SYM"])
console.log(o2[SYM]) // undefined

const o3 ={
  a: 1,
  b: 2,
  c: 3
}
o3[SYM] =4;
console.log(o3.SYM)
console.log(o3["SYM"])
console.log(o3[SYM])
