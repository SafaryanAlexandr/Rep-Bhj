function getHole(index) {
    return document.getElementById(index);
}
function restart() {
    dead.textContent = 0;
    lost.textContent = 0;
}
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
for(i = 1; i < 10; i++) {
    let idElement = 'hole' + i;
    getHole(idElement).addEventListener( 'click' , function() {
    if (getHole(idElement).classList.contains( 'hole_has-mole' )) {
       dead.textContent++;
    } else {
        lost.textContent++;
    }
    if(lost.textContent == 5) {
        alert('you are a loser');
        restart();
    }
    if(dead.textContent == 10) {
        alert('you are a winner');
        restart();
    }
    });
}
