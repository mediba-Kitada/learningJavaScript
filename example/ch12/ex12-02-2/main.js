/* ジェネレータを追加うと呼び出し側との間で双方向のコミュニケーションが可能となる
 * そのためにyield式を利用
 * 式の結果を値として持つことができる
 * yieldの場合、next関数呼び出しの際の引数を値として保持する事ができる
 */

/* ジェネレータを定義するには、*を利用する */
function* interrogate() { /* 質問する */
  const name = yield "お名前は?"; /* name変数には、2回目のnext関数呼び出しの引数が格納される */
  const color = yield "お好きな色は何ですか?"; /* color変数には、3回目のnext関数の引数が格納される */
  return `${name}さんの好きな色は${color}だそうですよ。`; /* 4回目のnext関数呼び出し */
 }

const it = interrogate(); /* イテレータが返る */
console.log(it.next()); /* 最初にの1回は値を渡さない(渡しても無視される) */
console.log(it.next("楓"));
console.log(it.next("緑"));
console.log(it.next());
