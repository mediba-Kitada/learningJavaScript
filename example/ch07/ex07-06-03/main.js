// IIEF(immediately invoked function expression)関数
// 即座に実行される関数式
// ES2015ではブロックスコープで代用可能

const message = (() => {
  // IIEFのスコープ内部では安全 
  //   => 外側からはアクセス出来ない
  // 何を返すことも可能
  const secret = '私は秘密です!'
  return `秘密の長さは${secret.length}文字です`
})()

console.log(message)
