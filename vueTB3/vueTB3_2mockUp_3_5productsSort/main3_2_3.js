// リスト3-2-3　sort()関数の使用例

// 金額の配列
let array_price = [1280, 1980, 1580, 980, 1680, 1780];

// 値が小さい順に並び変える比較関数
function desc_order(a, b) { //aとbに配列のすべての数値を代入していき、自動的に比較してくれる
  document.write(a + "　←a  b→　" + b);
  document.write("　　　　");

  if (a < b) { return -1; } //aを持つ要素はbを持つ要素より手前
  if (a == b) { return 1; } //aを持つ要素はbを持つ要素より後ろ
  return 0; //順番は同じ
}

// 安い順にソート
array_price.sort(desc_order);

// 並び変えた結果を表示
console.log(array_price); // =>[980, 1280,～1980の安い順に並ぶ]
// document.write(array_price);HTMLに表示できる


