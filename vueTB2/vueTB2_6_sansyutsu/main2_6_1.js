
let app = new Vue({
  el: '#app',
  data: {
    year: (new Date()).getFullYear()
  },
  computed: {
// リスト2-6-1　今年がうるう年かどうかを判定する算出プロパティ
    isUrudoshi: function () {
      // うるう年=「4で割れて100で割り切れない」または「400で割り切れる」場合
      if ((this.year % 4 == 0) && (this.year % 100 != 0) || (this.year % 400 == 0)) {
        return true;
      } else { //うるう年ではない
        return false;
      }
    }
  }
});

