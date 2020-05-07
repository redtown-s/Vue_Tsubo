// リスト3-2-4　シンプルな比較関数
// 単純に数値の大小関係を比較するだけなら、比較関数はもっとシンプルに記述できる

let array_price = [1280, 1980, 1580, 980, 1680, 1780];

function desc_order(a, b) {
  return a - b;
}

array_price.sort(desc_order);

console.log(array_price);
// alert(desc_order);