// CSSのスタイルをjQueryで変更：CSSメソッド
// 1つのCSSの記述：パラメータ：'プロパティ', '値'
// 複数：'プロパティ': '値', ...
// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// 上から下へスライド
// $(function(){
//   $('.box1').slideDown();
// });

// 下から上へスライド
// $(function(){
//   $('.box1').slideUp();
// });

// 非表示の要素を表示させる
// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });

// 非表示にする
// $(function(){
//   $('.box1').hide();
// });

// 引数の中に関数を入れることで、外側の関数の処理の後に内側が実行される
$(function (){
  $('.box1').slideDown(function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});