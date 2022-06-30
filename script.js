const hero = document.getElementById("hero");
const enemy = document.getElementById("enemy");
const score = document.getElementById("score");
const game_name = document.getElementById("game-name");

document.addEventListener("keydown", function(event) {

    if ((event.code == 'KeyW' || event.code == 'ArrowUp') && Position(hero,'top') > -26) 
        hero.style.top = `${Position(hero,'top')-4}px`;
    if ((event.code == 'KeyS' || event.code == 'ArrowDown') && Position(hero,'top') < 298) 
        hero.style.top = `${Position(hero,'top')+4}px`;
    if ((event.code == 'KeyD' || event.code == 'ArrowRight') && Position(hero,'left') < 752) 
        hero.style.left = `${Position(hero,'left')+4}px`;
    if ((event.code == 'KeyA' || event.code == 'ArrowLeft') && Position(hero,'left') > 8) 
        hero.style.left = `${Position(hero,'left')-4}px`;  
    if ( event.code == 'KeyR') {
        score.textContent = 0;
        newPosEnemy();
        hero.style.left = '372px';
        hero.style.top = '114px';
        hero.style.backgroundImage = 'url(8D.png)';
    }
})

function newPosEnemy() {
    enemy.style.top = `${Math.floor(Math.random()*264+1)}px`;
    enemy.style.left = `${Math.floor(Math.random()*760+1)}px`;
}
const Position = (obj, vector) => parseInt(window.getComputedStyle(obj).getPropertyValue(vector));

function isEated() {
    if ((   Position(hero,'top')-10 >= Position(enemy,'top') && 
            Position(hero,'top')-38 <= Position(enemy,'top')) &&
        (   Position(hero,'left') >= Position(enemy,'left')-20 &&
            Position(hero,'left') <= Position(enemy,'left')+4 
        )) {
        if (+score.textContent < 99) {
            +score.textContent++;
            score.animate(
                [{color: 'orange'},
                 {color: 'black'}], 
                {duration: 1500})
        }
        else score.textContent = 0;  
        newPosEnemy();
    }
}
let checker = setInterval(() => {
    isEated();
});

const btnR = document.getElementById("R_btn");
btnR.onclick = () => {
    hero.style.width = '40px';
    hero.style.height = '40px';
    hero.style.backgroundImage = 'url(dan.png)';
    hero.style.backgroundSize = '40px 40px';
}
// element.classList.add("name"); element.classList.remove("name");
// game_name.onclick = () => {}


