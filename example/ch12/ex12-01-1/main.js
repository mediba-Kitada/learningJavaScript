const book = [
  "ある所に初老の夫婦がすんでいたとさ",
  "夫は山へ妻は川へ行ったとさ",
]

// Node.jsの場合、values()関数が利用できないので注意
const it = book.values();
console.log(it.next());
console.log(it.next());
console.log(it.next());
