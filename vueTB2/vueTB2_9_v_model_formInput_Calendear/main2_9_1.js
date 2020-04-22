'use strict'

let app = new Vue({
  el: '#app',
  data: {
    // テキストボックスの初期値は当年
    year: (new Date()).getFullYear()
  }
});