// リスト2-9-9　セレクトボックスの選択肢にバインドする
let app = new Vue({
  el: '#app',
  data: {
    answer: []
  },
  computed: {
    // 選択された分類を返す算出プロパティ
    selectedanswer: function () {
      // 1件以上選択されている場合、選択された値を連結した文字列を返す
      return this.category.length >= 1 ? this.category.join() : '';
    }
  }
});