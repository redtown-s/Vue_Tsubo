// リスト2-8-2 算出プロパティへの置き換え
let app = new Vue({
  el: '#app',
  data: {
    message: '',
    stock: 10
  },
  methods: {
    // 削除ボタンのクリックイベントハンドラ
    onDeleteItem: function () {
      this.stock--;
    }
  },
  computed: {
    // 加工したメッセージを返すプロパティ ※status状態
    statusMessage: function () {
      if (this.stock == 0) {
        return '売り切れ';
      }
      return '';
    }
  }
});