// リスト2-5-1　金額を3桁ずつカンマで区切った書式で出力するフィルターを作成し、グローバルスコープに登録する
Vue.filter('number_format', function (val) {
  return val.toLocaleString();
});

let app = new Vue({
  el: '#app',
  data: {
    price: 1000
  },
  // 2-5-3 フィルターを登録する
  filters: {
    number_format: function (val) {
      return val.toLocaleString();
    }
  }
});
