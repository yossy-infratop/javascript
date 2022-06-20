$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active'); // activeクラスがあったら削除, なかったら追加
    $('#sp-menu').fadeToggle(); //要素のフェードイン, フェードアウトを切り替える
    event.preventDefault(); //aタグを無効化
  });
});