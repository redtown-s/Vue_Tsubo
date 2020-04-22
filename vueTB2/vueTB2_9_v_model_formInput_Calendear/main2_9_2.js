// リスト2-9-2　入力文字をDOMへリアルタイムに反映する
let app = new Vue({
  el: '#app',
  data: {
    // テキストボックスの初期値は当年
    year: (new Date()).getFullYear()
  },

  methods: {
    // 「年」のinputハンドラ
    yearInputHandler: function ($event) {
      // 直接データを更新する
      this.year = $event.target.value;
    }
  }
});