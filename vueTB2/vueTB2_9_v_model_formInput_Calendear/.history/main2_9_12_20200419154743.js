// リスト2-9-12　フォームコントロールの同期
let app = new Vue({
  el: '#app',
  data: {
    color:'#000000',
    red: 00,
    green: 00,
    blue: null,
  },
  created: function () {
    // 翌日の日付を初期値とする
    let dt = new Date(); //new Date()の結果：Sun Apr 19 2020 13:53:51 GMT+0900 (日本標準時) {}
    dt.setDate(dt.getDate() + 1);
    this.arrival_date = this.formatDate(dt);
    // 翌日の日付を最小値とする
    this.min_date = this.arrival_date;
  },
  methods: {
    // 日付を YYYY-MM-DDに整形するメソッド
    formatDate: function (dt) { //メソッド名のformatDateの命名は自由
      let y = dt.getFullYear();
      let m = ('00' + (dt.getMonth() + 1)).slice(-2);
      let d = ('00' + dt.getDate()).slice(-2);
      let result = y + '-' + m + '-' + d;
      return result;
    }
  }
});