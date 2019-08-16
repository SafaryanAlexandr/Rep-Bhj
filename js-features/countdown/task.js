setInterval(() => {
  if(document.getElementById('timer').textContent > 0){
  document.getElementById('timer').textContent --;
  } else {
    window.alert('Вы победили в конкурсе!');
  }}, 1000);
