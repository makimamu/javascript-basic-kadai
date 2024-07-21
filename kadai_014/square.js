// 引数numを２乗・その値を戻り値として返す関数を定義する
function squareAndPrint(value){
  // 引数の値を２乗
  const result = value * value;
  // ２乗の結果をコンソール出力
  console.log(result);
  // 計算結果を戻り値として返す
  return result;
}

// 関数を呼び出し、出力結果の確認
squareAndPrint(10);