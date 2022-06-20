$('#tab-contents .tab[id != "tab1"]').hide(); //id="tab-contents"の要素のうち、 class="tab"であり、id="tab1"ではない要素が非表示

$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide(); //d="tab-contents"内のいずれかのタブがクリックされたときに、そのタブ内の全コンテンツをいったん非表示
  $("#tab-menu .active").removeClass("active"); 
  $(this).addClass("active");
  $($(this).attr("href")).show(); // attr(): HTML要素の属性を取得したり設定できるメソッド
  event.preventDefault();
});