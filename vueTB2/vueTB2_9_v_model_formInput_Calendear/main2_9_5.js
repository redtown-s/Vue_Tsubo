// リスト2-9-5　グループ化したチェックボックスにバインドする
let app = new Vue({
  el: '#app',
  data: {
    answer: []
  },
  computed: {
    // チェック内容を連結した文字列を返す算出プロパティ
    selection: function () { //selection部分の命名は自由
      return this.answer.join();
    }
  }
});