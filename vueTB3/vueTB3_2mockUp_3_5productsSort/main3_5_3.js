'use strict'
// リスト3-5-3　チェックボックスを監視するウォッチャ
// 数値を通貨書式「#,###,###」に変換するフィルター
// 注意：filterは、そのフィルターを利用するコンポーネントよりも先に定義すること
Vue.filter('number_format', function (val) {
  return val.toLocaleString();
});


// Vue.jsを読み込む
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
  },  //←オプションを区切る。,忘れずに

  watch: {
    // 「セール対象」チェックボックスの状態を監視するウォッチャ
    showSaleItem: function (newVal, oldVal) { //newVal,oldValにはtrueかfalse（チェック前の状態）が入る
      // ここでproductsの配列を書き換える
      console.log('showSaleItemウォッチャが呼び出されました');
      console.log('showSaleItemウォッチャ:' + newVal + '←newの値,oldの値→' + oldVal );
    },
    // 「送料無料」チェックボックスの状態を監視するウォッチャ
    showDelvFree: function (newVal, oldVal) {
      // ここでproductsの配列を書き換える
      console.log('showDelvFreeウォッチャが呼び出されました');
      console.log('sshowDelvFreeウォッチャ:' + newVal + '←newの値,oldの値' + oldVal );
    }
  }
});
