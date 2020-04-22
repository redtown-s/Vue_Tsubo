// リスト2-9-12　フォームコントロールの同期
let app = new Vue({
  el: '#app',
  data: {
    color: '#000000',
    red: 0,
    green: 0,
    blue: 0,
  },
  computed: {
    // 赤緑青を配列で返す算出プロパティ
    colorElement: fnc

  },

  watch: {
    // 赤緑青いずれかの変更を監視する

    // #RRGGBB形式の文字列で更新する
  },

  // カラーパレットの選択変更を監視する


});