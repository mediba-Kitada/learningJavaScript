let f /* 未定義のグローバルな変数 */
{
  let o = { note: '安全', note2: '大丈夫' }
  f = () => {
    console.log(`無名関数の中: ${o.note}`) // 無名関数の中: 安全
    return o
  }
}

let oRef = f()
console.log(oRef) // { note: '安全', note2: '大丈夫' }
oRef.note = 'まったく安全ではない' // スコープにないはずのオブジェクトoのプロパティnoteの値を変更出来てしまう
console.log(oRef)
