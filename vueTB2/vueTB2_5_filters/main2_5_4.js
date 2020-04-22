let app = new Vue({
  el: '#app',
  data: {
    price: 1000
  },
  // 2-5-4 フィルターを組み合わせて使用する
  filters: {
    // 金額を3桁カンマ編集するフィルター
    number_format: function (val) {
      return val.toLocaleString();
    },
    unit: function (val) {
      return val + '円';
    }
  }
});
