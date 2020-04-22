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
      // 赤緑青
      let r = ('00' + newRGB[0].toString(16).toUpperCase()).slice(-2);
      let g = ('00' + newRGB[1].toString(16).toUpperCase()).slice(-2);
      let b = ('00' + newRGB[2].toString(16).toUpperCase()).slice(-2);
      // #RRGGBB 形式の文字列で更新する
      this.color = '#' + r + g + b;
    },
    // カラーパレットの選択変更を監視する
    color: function (newColor, oldColor) {
      this.red = parseInt(newColor.substr(1, 2), 16); // 0始まりの1:1文字目から2文字抽出。16進数にして返す
      this.green = parseInt(newColor.substr(3, 2), 16);// 0始まりの3:3文字目から2文字抽出。
      this.blue = parseInt(newColor.substr(5, 2), 16);
    }
  }
});