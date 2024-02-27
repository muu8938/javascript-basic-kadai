// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // ボタンを押して2秒後に、「ボタンをクリックしました」と表示
  setTimeout( () => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});
