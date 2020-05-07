'use strict'
// リスト3-4-5　フィルターを定義する
// 数値を通貨書式「#,###,###」に変換するフィルター
// 注意：filterは、そのフィルターを利用するコンポーネントよりも先に定義すること
Vue.filter('number_format', function (val) {
  return val.toLocaleString();
});


// リスト3-3-1　Vue.jsを読み込む
// 商品一覧コンポーネント
let app = new Vue({
  el: '#app',
  data: {
    // 商品リスト以外のデータには初期値を設定しておく 
    // 表示中の商品数
    count: 0,
    // セール対象のチェック状態(true:チェック有、f:無し)
    showSaleItem: false,
    // 送料無料のチェック状態(true:チェック有、f:無し)
    showDelvFree: false,
    // 「並び替え」の選択値(1:標準, 2:価格が安い順)
    sortOrder: 1,

    // 商品リスト
    products: [
      { name: 'Michael<br>スマホケース', price: 1580, image: 'images/01.jpg', delv: 0, isSale: true },
      { name: 'Raphael<br>スマホケース', price: 1580, image: 'images/02.jpg', delv: 0, isSale: true },
      { name: 'Gabriel<br>スマホケース', price: 1580, image: 'images/03.jpg', delv: 240, isSale: true },
      { name: 'Uriel<br>スマホケース', price: 980, image: 'images/04.jpg', delv: 0, isSale: true },
      { name: 'Ariel<br>スマホケース', price: 980, image: 'images/05.jpg', delv: 0, isSale: false },
      { name: 'Azrael<br>スマホケース', price: 1580, image: 'images/06.jpg', delv: 0, isSale: false }
    ]
  }
});
