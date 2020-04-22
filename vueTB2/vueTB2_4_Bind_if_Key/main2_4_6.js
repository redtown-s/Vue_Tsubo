// リスト2-4-6　リストデータをバインドする
let app = new Vue({
  el: '#app',
  data: {
    products: [
      { code: 'A01', name: 'プロダクトA' }, //配列要素[0]
      { code: 'B01', name: 'プロダクトB' }, //配列要素[1]
      { code: 'C01', name: 'プロダクトC' } //配列要素[2]
    ]
  }
});
