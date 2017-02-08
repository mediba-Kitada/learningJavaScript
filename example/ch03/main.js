// 定数だが、オブジェクトを生成可能
const sam1 = {
  name: 'Sam',
  age: 4,
};
console.log(sam1);

const sam2 = {
  name: 'Sam',
  age: 4,
};
console.log(sam2);

// プロパティの内容を比較
console.log(sam1.name===sam2.name);
console.log(sam1.age===sam2.age);
// プロパティの内容は同じでもオブジェクトは別物(ユニークである)
console.log(sam1===sam2);

const sam3 = {
  name: 'Sam',
  classfication: {
    kingdom: 'Animalia',
    phylum: 'Chordata',
    class: 'Mamalia',
    order: 'Carnivoria',
    family: 'Felidae',
    subfamily: 'Felinae',
    genus: 'Felis',
    species: 'F. catus',
  },
};
console.log(sam3);
// 添字のパターン
console.log(sam3.classfication.family);
console.log(sam3["classfication"].family);
console.log(sam3.classfication["family"]);
console.log(sam3["classfication"]["family"]);

const タマ = {
  名前: 'タマ',
  分類: {
    界: '動物界',
    門: '脊索動物門',
    網: '哺乳網',
    目: 'ネコ目',
    科: 'ネコ科',
    亜科: 'ネコ亜科',
    属: 'ネコ属',
    種: 'ネコ',
  },
};
console.log(タマ);

// プロパティとして関数を登録
sam3.speak = function() { return "Meow"; };
タマ.鳴く = function() { return "にゃーご"; };
console.log(sam3.speak());
console.log(タマ.鳴く());

// プロパティの削除
delete sam3.classfication; // classficationツリー全体を削除
delete sam3.speak;
console.log(sam3);
delete タマ.分類;
delete タマ.鳴く;
console.log(タマ);
