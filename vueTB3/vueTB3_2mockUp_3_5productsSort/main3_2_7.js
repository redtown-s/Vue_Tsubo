// リスト3-2-7　（応用）商品一覧の並び替え
// コンポーネントのルートノード
let nodeApp = document.querySelector('#app');

/////////////////// チェックボックスのイベントハンドラを登録 ///////////////////
let nodeCheckbox = nodeApp.querySelectorAll('input[type="checkbox"]');
nodeCheckbox[0].addEventListener('change', onCheckChanged, false);
nodeCheckbox[1].addEventListener('change', onCheckChanged, false);

// セレクトボックスのイベントハンドラを登録
let nodeSelect = nodeApp.querySelector('.sorting');
nodeSelect.addEventListener('change', onOrderChanged, false);

// 初期表示時の商品ノードリスト（保存用）
let nodeItemsOrg = nodeApp.querySelectorAll('.item');
// チェック状態イベントハンドラ
function onCheckChanged(event) {
  let nodeItems = nodeApp.querySelectorAll('.item'); //商品ノードのリスト
  let nodeCount = nodeApp.querySelector('.count'); //表示件数のノード
  let count = nodeItems.length; //表示件数

  // 全ての商品ノードをいったん表示する
  for (let i = 0; i < nodeItems.length; i++) {
    showNode(nodeItems[i]);
  }

  // セール対象のチェックがついている場合
  if (nodeCheckbox[0].checked) {
    // 全ての商品ノードを捜査
    for (let i = 0; i < nodeItems.length; i++) {
      // セール対象の商品ではない場合
      if (!isSaleItem(nodeItems[i])) {
        // この商品を非表示にする
        hideNode(nodeItems[i]);
        // 件数のカウント減らす
        count--;
      }
    }
  }
  // 送料無料のチェックがついている場合
  if (nodeCheckbox[1].checked) {
    // 全ての商品ノードを捜査
    for (let i = 0; i < nodeItems.length; i++) {
      // 送料無料の商品ではない場合
      if (!isDelvFreeItem(nodeItems[i])) {
        // この商品を非表示にする
        hideNode(nodeItems[i]);
        // 件数のカウントを減らす
        count--;
      }
    }
  }
  // 件数を更新
  nodeCount.textContent = count + '件';
}

/////////////////// 並び順変更のイベントハンドラ ///////////////////
function onOrderChanged(event) {

  let nodeList = nodeApp.querySelector('.list'); // 商品一覧ノード
  let nodeItems = nodeApp.querySelectorAll('.item'); // 商品ノードのリスト

  // 商品ノードのリストを新しい配列に詰め替える(退避しておく)
  // 商品ノードリスト（初期表示用ではないノードリスト）
  let products = [];
  for (let i = 0; i < nodeItems.length; i++) {
    products.push(nodeItems[i]);
  }

  // DOMから全ての商品ノードを削除する
  while (nodeList.firstChild) {
    nodeList.removeChild(nodeList.firstChild);
  }
  //e.target はclass=sortingの<option value="1">標準かvalue="2"の要素を参照します
  if (event.target.value == '1') { // 「標準」が選択されている場合
    // 初期表示時の商品ノードを復元する
    for (let i = 0; i < products.length; i++) {
      nodeList.appendChild(nodeItemsOrg[i]);
    }
  }
  // 「価格が安い順」が選択されている場合
  else if (event.target.value == '2') {
    // 配列を並び替え
    products.sort(function (a, b) {
      // 商品価格のノードからカンマを除去した数値を読み取る
      let prevPrice = parseInt(a.querySelector('.price span').textContent.replace(',', ''));
      let currentPrice = parseInt(b.querySelector('.price span').textContent.replace(',', ''));
      return prevPrice - currentPrice;
    });
    // 並び替え後の商品ノードをDOMに追加する
    for (let i = 0; i < products.length; i++) {
      nodeList.appendChild(products[i]);
    }
  }
}

// セール商品かどうかを判定する関数
function isSaleItem(nodeItem) {
  let node = nodeItem.querySelector('.status'); //Document の querySelector() メソッドは、指定されたセレクターまたはセレクターのグループに一致する、文書内の最初の Element を返します。
  return (node && node.textContent == 'SALE');
}

// 送料無料かどうかを判定する関数
function isDelvFreeItem(nodeItem) {
  let node = nodeItem.querySelector('.shipping-fee');
  return (node && node.textContent == '送料無料');
}

// ノードを非表示にする関数
function hideNode(node) {
  node.setAttribute('style', 'display:none;');
}

// ノードを表示する関数
function showNode(node) {
  node.removeAttribute('style');
}