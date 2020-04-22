// リスト15 ライフサイクルハックを使った初期化
let ball = new Vue({
  el: '#app',
  data: {
    products: []
  },
  created: function () {
    // 商品リストをサーバーから読み込み、this.productsに代入する
  }
});


// リスト16 変数のスコープ
function sample(){
  let x =10;
}
// 以下はスコープの範囲外
console.log(x); // =>Uncaught ReferenceError: x is not defined