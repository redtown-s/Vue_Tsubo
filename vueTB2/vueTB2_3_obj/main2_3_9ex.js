////////////////////////////////////////////////////////////////////
// リスト9 Movableクラスからインスタンスを生成する
// ブラウザの画面のランダムな位置に100個のボールを描画する
// ボールは<div>●</div>で表現し、CSSでオブジェクトのプロパティと結びつける

// 「動くモノ」クラスの定義
let Movable = function (x, y) {
  this.pos = {
    x: x,
    y: y
  };
  this.move = function (x, y) {
    this.pos.x += x;
    this.pos.y += y;
  };
}
// ボールオブジェクトを格納する空の配列を用意する
let ball = [];
// 100個分の繰り返し
for (let i = 0; i <= 100; i++) {
  // ボールオブジェクトのインスタンスを生成する
  ball[i] = new Movable(
    Math.floor(Math.random() * window.innerWidth),
    Math.floor(Math.random() * window.innerHeight)
  );
}
// ボールをブラウザに描画する
// Document インターフェイスはブラウザーに読み込まれたウェブページを表し、 DOM ツリーであるウェブページのコンテンツへのエントリーポイントとして働きます。
// DOM ツリーは <body> や <table> など、多数の要素を持ちます。これはページの URL を取得したり文書で新たな要素を作成するなど、文書全体に関わる機能を提供します。

for (let j = 0; j <= 100; j++) {
  for (let j = 0; j <= 100; j++) {
    document.write('<div class="ball" style="top:' + ball[j].pos.y + 'px; left:' + ball[j].pos.x + 'px; left:' + ball[j].pos.x + 'px; ">●</div>');
  }
}