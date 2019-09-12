let clickNumber = document.getElementById('clicker__counter');
let clickSpeed = document.getElementById('clicker__time');
let timeStart = Date.now();
document.getElementById('cookie').addEventListener( "click" , function() {
    clickNumber.textContent ++;
    let timeClick = (Date.now() - timeStart) / 1000;
    clickSpeed.textContent = (1 / timeClick).toFixed(3);
    timeStart = Date.now();

    if ( clickNumber.textContent % 2 === 0 ) {
        document.getElementById('cookie').width = 200;
    } else {
        document.getElementById('cookie').width = 300;
    }
});