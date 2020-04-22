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
    colorElement: function () {
      return [this.red, this.green, this.blue];
    }
  },
  watch: {
    // 赤緑青いずれかの変更を監視する
    colorElement: function (newRGB, oldRGB) {
      // #RRGGBB形式の文字列で更新する
      let r = ('00' + newRGB[0].toString(16).toUpperCase()).slice(-2);
      let g = ('00' + newRGB[1].toString(16).toUpperCase()).slice(-2);
      let b = ('00' + newRGB[2].toString(16).toUpperCase()).slice(-2);
      
      
    }

  },

  // カラーパレットの選択変更を監視する


});