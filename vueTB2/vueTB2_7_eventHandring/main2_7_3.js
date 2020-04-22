let app = new Vue({
  el: '#app',
  data: {
    // ウィンドウサイズ
    // 水平スクロールバー（表示されている場合）を含む、ブラウザウィンドウの ビューポート (viewport) の高さ、幅を返します。
    // window.innerHeight プロパティは、読み込み専用です。また、デフォルトの値はありません。window.innerHeight プロパティは、ピクセル数を表す整数を保持します。

    width: window.innerWidth,
    height: window.innerHeight
  },
  // イベントハンドラを登録  
  created: function () {
    addEventListener('resize', this.resizeHandler);
  },
  // イベントハンドラを解除
  beforeDestroy: function () {
    removeEventListener('resize', this.resizeHandler)
  },
  methods: {
    // イベントハンドラ
    // Vueでは$eventの変数名でイベントオブジェクトを受けとる
    resizeHandler: function ($event) {
      // 現在のウィンドウサイズでプロパティを更新
      this.width = $event.target.innerWidth;
      this.height = $event.target.innerHeight;
    }
  }
});
