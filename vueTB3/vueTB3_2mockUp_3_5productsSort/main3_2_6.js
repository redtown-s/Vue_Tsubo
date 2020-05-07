// リスト3-2-6　オブジェクトの並び替え

// 配列要素が単純な数値ではなくオブジェクトの場合、比較関数のa,bにはオブジェクトが渡される。そのため、商品番号や商品価格などといった1つの商品に関するデータはオブジェクトにまとめ、オブジェクトを配列にすると、価格順にオブジェクトを並び変えることができる

// 商品オブジェクトの配列
let products = [
  { ID: 1, price: 1280 },
  { ID: 2, price: 1980 },
  { ID: 3, price: 1580 },
  { ID: 4, price: 980 },
  { ID: 5, price: 1680 },
  { ID: 6, price: 1780 }
];

// 安い順にソート
products.sort(function (a, b) {
  return a.price - b.price;
})

// 並び変えた結果を確認
console.log(products);

// F12のconsole.log結果
// 0: {ID: 4, price: 980}
// 1: {ID: 1, price: 1280}
// 2: {ID: 3, price: 1580}
// 3: {ID: 5, price: 1680}
// 4: {ID: 6, price: 1780}
// 5: {ID: 2, price: 1980}
// length: 6

alert(products[0].price); // =>980
alert(products[0].ID); // =>4