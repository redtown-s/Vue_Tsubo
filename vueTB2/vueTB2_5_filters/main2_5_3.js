let app = new Vue({
  el: '#app',
  data: {
    price: 1000
  },
  // 2-5-3 リスト1と同じフィルターをコンポーネントの中に登録する
  filters: {
    number_format: function (val) {
      return val.toLocaleString();
    }
  }
});
