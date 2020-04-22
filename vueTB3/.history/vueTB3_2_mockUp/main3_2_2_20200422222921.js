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
  let count = nodeItems.length; //表示件数(商品ノードのlengthは6)

  // 全ての商品ノードをいったん表示する
  for (let i = 0; i < nodeItems.length; i++) {
    showNode(nodeItems[i]);
  }

  // セール対象のチェックがついている場合
  if (nodeCheck[0].checked) { //if(**.checked)は、チェックボックスがチェックされていればtrueを返し、チェックされていなければfalseを返す
    // チェックがついているとき、全ての商品ノードを捜査
    for (let i = 0; i < nodeItems.length; i++) {
      // セール対象の商品ではない場合。isSaleItem関数の結果がfalseでreturnされた場合、!でtrueに置き換わりif文が実行される
      if (!isSaleItem(nodeItems[i])) {
        // この商品を非表示にする
        hideNode(nodeItems[i]);
        // 商品ノードのlength件数のカウントを減らす
        count--;
      }
    }
  }




  // 送料無料チェックがついている場合

  // 全ての商品ノードを捜査

  // 送料無料の商品ではない場合

  // この商品を非表示にする

  // 件数のカウントを減らす


  // 件数を更新

  // セール商品かどうかを判定する関数。全ての商品ノードnodeItems[i]を引数に貰う。
  function isSaleItem(nodeItem) {
    let node = nodeItem.querySelector('.status');
    return (node && node.textContent == 'SALE'); //textContent は Node のプロパティで、ノードおよびその子孫のテキストの内容を表します。ノードが document または Doctype 以外のノードタイプの場合、textContent は、コメントと処理命令ノードを除く、すべての子ノードの textContent 属性値を連結したものを返します。 (ノードが子を持たない場合、これは空文字列になります。)
  }


  // 送料無料かどうかを判定する関数

  // ノードを非表示にする関数

  // ノードを表示する関数
  function showNode(node) {
    node.removeAttribute('style');
  }


}