// オブジェクトのプロパティをリスト処理
const SYM = Symbol()
const o = {
  a: 1, 
  b: 2, 
  c: 3,
  [SYM]: 4 // シンボルをプロパティに含むためのリテラル表記
}
for (let prop in o) {
  if (!o.hasOwnProperty(prop)) continue
  console.log(`${prop}: ${o[prop]}`)
}
