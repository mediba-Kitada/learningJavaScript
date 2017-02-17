// Promiseの基本パターン プロミスのチェイニング
function countdown(seconds) {
  return new Promise((onFulfilled, onRejected) => {
    const timeoutIds = [];
    for(let i=seconds; i >=0; i--) {
      timeoutIds.push(setTimeout(
        () => {
          if(i===13) {
            timeoutIds.forEach(clearTimeout); /* すべてクリア */
            onRejected(new Error(`${i}という数は不吉過ぎます`));
          }
          else if(i>0) {
            console.log(i + `...`);
          }
          else {
            console.log("GO!");
            onFulfilled();
          }
        }, /* 無名関数の終わり */
        (seconds-i)*1000)
      )}
  }
  );
}

function launch() {
  return new Promise((onFulfilled, onRejected) => {
    console.log("発射!");
    setTimeout(() => {
      onFulfilled("周回軌道に乗った!");
    }, 2*1000);
  });
}

countdown(5)
  // countdown関数がonFulfilledの際にlaunch関数を実行
  .then(launch)
  // launch関数がonFulfilledの際に実行したい処理
  .then((msg) => {
    console.log(msg);
  })
  // いずれかのPromiseオブジェクト(プロミスチェイン)がonRejectedの際に実行したい処理
  .catch((err) => {
    console.log("管制塔、管制塔。トラブル発生..." + err);
  })

