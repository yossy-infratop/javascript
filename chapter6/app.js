// $(セレクタ).イベント名(function(){イベント発生時の処理});
//マウスオーバー:マウスカーソルが置かれたとき
// マウスアウト: マウスカーソルが離れたとき
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// マウスクリック: $(セレクタ).on('click', function(){処理});
$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});