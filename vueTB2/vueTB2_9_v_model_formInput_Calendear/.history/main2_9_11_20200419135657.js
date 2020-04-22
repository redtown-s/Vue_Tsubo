// リスト2-9-11　カレンダーの選択範囲を制限する
let app = new Vue({
  el: '#app',
  data: {
    arrival_date: null,
    min_date: null
  },
  created: function () {
    // 翌日の日付を初期値とする
    let dt = new Date(); //new Date()の結果：Sun Apr 19 2020 13:53:51 GMT+0900 (日本標準時) {}
    dt.setDate(dt.getDate() + 1);

    this.arrival_date = this.formatDate(dt;
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