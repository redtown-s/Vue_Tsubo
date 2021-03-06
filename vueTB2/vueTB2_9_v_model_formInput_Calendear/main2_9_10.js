// リスト2-9-10　カレンダーにバインドする
let app = new Vue({
  el: '#app',
  data: {
    arrival_date: null
  },
  created: function () {
    // 初期値を設定する
    this.arrival_date = this.formatDate(new Date());
  },
  methods: {
    // 日付を YYYY-MM-DDに整形するメソッド
    formatDate: function (dt) {
      let y = dt.getFullYear();
      let m = ('00' + (dt.getMonth() + 1)).slice(-2);
      let d = ('00' + dt.getDate()).slice(-2);
      let result = y + '-' + m + '-' + d;
      return result;
    }
  }
});