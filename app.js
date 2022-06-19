// let ** で変数を宣言 整数, 負数, 小数点, 文字列ok
let str1 = "Hello "
let str2 = "World!!"
// 四則演算 +, -, *, /. 文字列の足し算も可
// alert(str1 + str2);

// 条件分岐 C言語
let orenge = 100;
let apple = 100;
// if(orenge < apple){
//     alert('みかんの値段がりんごより安い');
// }else if(orenge == apple){
//     alert('みかんとリンゴが同じ値段');
// }else{
//     alert('みかんの値段がりんごより高い')
// }

// 繰り返し 前判定
let max = 100;
let num = 1;
let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');
//  // 繰り返し あと判定
// do{
//     最低1回は行われる処理
//   }while(条件式);


// for文
let i;
num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です');