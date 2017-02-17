"use strict";
const fs = require("fs");

function readFile(fileName) {
  return new Promise(
    (onFulfilled, onRejected)=> {
      fs.readFile(fileName, "utf-8", (err, data)=> {
        if (err) {
          onRejected(err);
        }
        onFulfilled(data);
      });
    }
  );
}

function writeFile(fileName,data) {
  return new Promise(
    (onFulfilled,onRejected)=> {
      fs.writeFile(fileName,data, err=>{
        if (err) {
          onRejected(err);
        }
        onFulfilled("OK");
      });
    }
  );
}

/* Promise allメソッドで各Promiseを並列処理するパターン
* 3つのファイルを読み込み同時に行う */
Promise.all([readFile("a.txt"),readFile("b.txt"),readFile("c.txt")])
.then((results)=> {
  /* 実行結果(results)も配列になる */
  const allData = results[0] + results[1] + results[2];
  return writeFile("d.txt", allData);
})
.then((msg)=> {
  console.log("ファイルの合体に成功しました。");
})
.catch(err => {
  console.error("エラーが起こりました:" + err);
});
/*
 * 各Promiseオブジェクトを逐次的に実行していくパターン
let allData = "";
readFile("a.txt")
.then((fileData)=> {
  allData += fileData;
  return readFile("b.txt");
})
.then((fileData)=> {
  allData += fileData;
  return readFile("c.txt");
})
.then((fileData)=> {
  allData += fileData;
  return writeFile("d.txt",allData);
})
.then((msg)=> {
  console.log("ファイルの合体に成功しました。");
})
.catch(err => {
  console.error("エラーが起こりました:" + err);
});
*/
