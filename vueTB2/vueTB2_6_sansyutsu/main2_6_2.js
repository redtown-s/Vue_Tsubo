
let app = new Vue({
  el: '#app',
  data: {
    show: true
  },
  methods: { //メソッド
    // 現在日時を返すメソッド
    now1: function () {
      return (new Date()).toLocaleString();
    }
  },
  computed: { //算出プロパティ
    // 現在日時を返す算出プロパティ
    now2: function () {
      return (new Date()).toLocaleString();
    }
  }
});

