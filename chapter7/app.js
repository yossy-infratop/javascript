// this: クリックされた要素
// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });


// HTML要素直下のすべての子要素を取得するときに使用
$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});