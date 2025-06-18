const button = document.getElementById('changeTextButton');
const text = document.getElementById('text');

button.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});
