// var: 再宣言ok. let, const: 再宣言ng
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

// var, let: 再代入ok. const: 再代入ng
// var nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// var: 関数(ローカル)スコープとグローバルスコープの変数を定義できる
// var str = "webcamp" //グローバルスコープ
// function foo() {
//   console.log(str)
//   var y = "hello" //関数スコープ
// }
// foo()
// console.log(y) // yが未定義のエラー

// let, const: ブロック(ローカル, ()や{})スコープの変数を定義できる
// function foo() {
//     let x = "webcamp"
//     {
//       let y = "hello webcamp"
//     }
//     console.log(x)
//     console.log(y) //yが未定義のエラー
//   }
//   foo()

// 巻き上げ
var str = "webcamp"

function foo() { 
  //var str 
  console.log(str)
  var str = "dmm webcamp" // str = "dmm webcamp" の記述と同じ動作. 関数スコープのstrが参照される
  console.log(str)
}

foo()

// varはほとんど使われない. 繰り返しなどでlet, それ以外はconst