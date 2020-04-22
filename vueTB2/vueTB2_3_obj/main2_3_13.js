let ball = new Vue({
  el: '#ball',
  data: {
    pos: {
      x: 0, y: 0
    },
    radius: 20
  }
});

// ボールをx方向へ100px,y方向へ100px動かす
ball.move(100, 100);

// ボールの半径を40pxに変更する
ball.radius = 40;

