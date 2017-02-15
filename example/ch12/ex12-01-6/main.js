// イテレータプロトコルに対応するため、シンボルメソッドを実装するパターン
class Log {
  constructor() {
    this.messages = [];
  }

  add(message) {
    const now = Date.now();
    console.log(`ログ追加: ${message}(${now})`);
    this.messages.push({message,timestamp: now})
  }
  [Symbol.iterator]() {
    // 反復可能なオブジェクトから配列のメソッド[Symbol.iterator]()を呼び出すことによってイテレータを返却
    // Node.jsの場合、values()関数が利用できないので注意
    return this.messages[Symbol.iterator]();
  }
}

const log = new Log();
log.add("海の監視初日。勤務開始");

setTimeout(function() {log.add("クジラを見た");}, 3*1000); // 3秒後
setTimeout(function() {log.add("1隻の船を見た");}, 7*1000); // 7秒後
setTimeout(function() {log.add("監視終了");}, 9*1000); // 9秒後

setTimeout(function() {
  console.log(`-本日の業務報告- (${new Date()})`);
  for(let entry of log) {
    const date = new Date(entry.timestamp);
    console.log(`${entry.message} (${date})`);
  }
}, 10*1000);
