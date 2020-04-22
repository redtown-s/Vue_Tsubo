// リスト2-9-12　フォームコントロールの同期
let app = new Vue({
  el: '#app',
  data: {
    color:'#000000',
    red: 00,
    green: 00,
    blue: 00,
  },
  created: function () {
    // 翌日の日付を初期値とする
    let dt = new Date(); //new Date()の結果：Sun Apr 19 2020 13:53:51 GMT+0900 (日本標準時) {}
    dt.setDate(dt.getDate() + 1);
    this.arrival_date = this.formatDate(dt);
    // 翌日の日付を最小値とする
    this.min_date = this.arrival_date;
  },

});