'use strict'
// コンポーネントのルートノード
let nodeApp = document.querySelector('#app');

// チェックボックスのイベントハンドラを登録
let nodeCheckbox = nodeApp.querySelectorAll('input[type="checkbox"]');
//イベント名'change'フォーム要素の選択肢や内容が変更されたとき。addEventLisner:chrome ではデフォルトでfalse。falseがtrueになった場合、DOMの優先順位が上がる
nodeCheckbox[0].addEventListener('change', onCheckChanged, false);
nodeCheckbox[1].addEventListener('change', onCheckChanged, false);

// チェック状態変更イベントハンドラ
function onCheckChanged(event) {

  let nodeItems = nodeApp.querySelectorAll('.item'); //商品ノードのリスト
  let nodeCount = nodeApp.querySelectorAll('.count'); //表示件数のノード
  let count = nodeItems.length; //表示件数(左上部検索結果)

  // 全ての商品ノードをいったん表示する
  for (let i = 0; i < nodeItems.length; i++) {
    showNode(nodeItems[i]);
  }

  // セール対象のチェックがついている場合
  if (nodeCheck[0].checked) {
    // 全ての商品ノードを捜査
    for (let i = 0; i < nodeItems.length; i++) {
      // 送料無料の商品ではない場合
      if (nodeCheck[]) {

      }
    }

    // この商品を非表示にする

    // 件数のカウントを減らす


  }






}









// 送料無料チェックがついている場合

// 全ての商品ノードを捜査

// 送料無料の商品ではない場合

// この商品を非表示にする

// 件数のカウントを減らす


// 件数を更新

// セール商品かどうかを判定する関数


// 送料無料かどうかを判定する関数

// ノードを非表示にする関数

// ノードを表示する関数
function showNode(node) {
  node.removeAttribute('style');
}
