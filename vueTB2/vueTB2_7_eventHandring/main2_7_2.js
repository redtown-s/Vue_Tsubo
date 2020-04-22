//  リスト2-7-2 Vue未使用
// 頻繁にアクセスする要素を事前に取得
let app = document.querySelector('#app');
let btn = app.querySelector('.btn');
let num = app.querySelector('.num');

// 在庫数の初期化
let stock = 10;

// ボタンにイベントハンドラを割り当てる
btn.addEventListener('click', onDeleteItem);

// 削除のボタンのイベントクリックハンドラ
function onDeleteItem() {
  stock--;
  updateStock(); //表示を更新する
}

// 在庫数の表示を更新するメソッド
function updateStock() {
  if (stock >= 1) {
    num.textContent = '残り' + stock + '個';
  } else {
    app.removeChild(btn); //ボタンを削除する
    num.textContent = '在庫切れ';
  }
}

// 在庫数の初期値を表示する
updateStock();