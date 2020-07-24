const timer = document.getElementById('timer');
const id = setInterval(time, 1000);
function time() {
  timer.textContent = timer.textContent - 1;
  if (timer.textContent == 0){
  clearInterval(id);	document.location.assign('https://developer.mozilla.org/ru/docs/Web/API/Window/location');
  setTimeout(() => alert('Вы победили в конкурсе!'), 100); 
  }
}

