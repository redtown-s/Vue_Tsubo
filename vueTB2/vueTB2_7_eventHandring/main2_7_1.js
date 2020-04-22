// リスト2-7-1 削除ボタンを押すたびに在庫が1減る。0になると在庫切れになる
let app = new Vue({
  el: '#app',
  data: {
    stock: 10
  },
  methods: {
    // 削除ボタンのイベントクリックハンドラ
    onDeleteItem: function () {
      this.stock--;
    }
  },
});