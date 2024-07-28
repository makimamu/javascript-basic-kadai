
// btnのidを取得
const btn =document.getElementById('btn');
const text = document.getElementById('text')
// クリックされた時イベントを実行
btn.addEventListener('click',() => {
  text.textContent = 'ボタンをクリックしました';
});
