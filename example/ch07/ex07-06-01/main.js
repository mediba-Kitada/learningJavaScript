// クロージャ
// 関数の周囲にスコープを閉じ込むもの
let globalFunc

// ブロックとその親であるグローバルスコープがクロージャを形成
{
let blockVar = 'a'
  globalFunc = () => {
    console.log(blockVar)
  }
}

/**
 * blockVarがスコープ外であるにも関わらず、blockVarへアクセス可能
 *   => 関数がblockVarを保持しておくことが出来る
 */
globalFunc() // a
