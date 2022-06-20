$(function() {
  $('#back a').on('click',function(event){
    $('body, html').animate({ // アニメーション
      scrollTop:0
    }, 800); // アニメーションの動作時間(ミリ秒)
    event.preventDefault(); // aタグの機能を無効にするメソッド
  });
});