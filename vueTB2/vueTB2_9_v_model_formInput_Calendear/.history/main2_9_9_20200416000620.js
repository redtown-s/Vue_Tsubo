// リスト2-9-9　セレクトボックスの選択肢にバインドする
let app = new Vue({
  el: '#app',
  data: {
    answer:'' {
      options: [
        {code: 'ans1', label: '初めて'},
        {code: 'ans2', label: '週一回'},
        {code: 'ans3', label: '半年に一回'}
      ]
    }

  }
});