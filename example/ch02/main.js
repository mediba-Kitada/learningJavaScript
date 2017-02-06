$(document).ready(function(){
  'use strict';
  console.log('main.jsを読み込み中...');

  paper.install(window); // paperの準備
  paper.setup(document.getElementById('mainCanvas')); // mainCanvasをキャンバスに


  // Hello, World!
  let c = Shape.Circle(200,200,80); // 円
  c.fillColor = 'black'; // 中を黒く塗る

  let text = new PointText(200,200); // 新しいテキストを領域中央に
  text.justification = 'center'; // センタリング
  text.fillColor = 'white'; // 色
  text.fontSize = 20; // フォントサイズ
  text.content = 'Hello, World'; // 文字列

  // クリックイベントのハンドル
  let tool = new Tool();
  tool.onMouseDown = function(event) {
    let c = Shape.Circle(event.point, 20);
    c.fillColor = 'green';
  };
});
