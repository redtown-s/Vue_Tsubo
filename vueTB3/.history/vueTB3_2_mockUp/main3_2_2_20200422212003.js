'use strict'
// コンポーネントのルートノード
let nodeApp = document.querySelector('"app');

// チェックボックスのイベントハンドラを登録
let nodeCheckbox = nodeApp.append.querySelecterAll('input[type=""]');
nodeCheckbox[0].addEventLisner('change',onCheckChanged, false); //イベント名change:フォーム要素の選択肢や内容が変更されたとき
nodeCheckbox[0].addEventLisner('change',onCheckChanged, false);



// チェック状態変更イベントハンドラ


// 全ての商品ノードをいったん表示する



// セール対象のチェックがついている場合





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

