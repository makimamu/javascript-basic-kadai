
// btn（ボタン要素）のidを取得(getElement)
const btn =document.getElementById('btn');
// text（テキスト要素）のidを取得(getElement)
const text = document.getElementById('text')
// クリックされた時イベントを'実行'する関数(addEventListener)
btn.addEventListener('click',() => {
  text.textContent = 'ボタンをクリックしました';
});
