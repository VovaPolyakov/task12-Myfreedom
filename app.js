let start = document.querySelector('#start');
let game = document.querySelector('#game');
let time = document.querySelector('#time');
let result = document.querySelector('#result');
let timeH1 = document.querySelector('#time-header');
let resultH1 = document.querySelector('#result-header');
let inputTime = document.querySelector('#game-time');

let score = 0;

let isGameActive = false;

start.addEventListener('click', startGame);


inputTime.addEventListener('change', () => {
    time.innerText = inputTime.value
})

function startGame(){
    score = 0;
    timeH1.classList.remove('hide');
    resultH1.classList.add('hide');
    inputTime.removeAttribute('disabled');
    start.classList.add('hide')
    game.style.background = 'white';
    let interval = setInterval(function(){
        let currentTime = time.innerText;
        if(Number(currentTime) <= 0){
            clearInterval(interval);
            endGame();
        }else{
            time.innerText = (Number(currentTime) - 0.1).toFixed(1);
            
        }
    },100)
    renderBox();
    isGameActive = true;
}

function getRandom(min, max) {
    return (Math.floor(Math.random() * (max - min) + min)) 
}


function renderBox(){
    game.innerHTML = '';
    let div = document.createElement('div');
    let randomSize = getRandom(30, 100);
    let maxDelta = 300 - randomSize; 
    div.style.width = `${randomSize}px`;
    div.style.height = `${randomSize}px`;
    div.style.position = `absolute`;
    div.style.background = 'black';
    div.style.top = `${getRandom(0,maxDelta)}px`;
    div.style.left = `${getRandom(0,maxDelta)}px`;
    div.style.cursor ='pointer';
    game.appendChild(div);
    div.className = 'box';
};


game.addEventListener('click', gameBoxClick);

function gameBoxClick(event){
    if(event.target.classList.contains('box')){
        score = score + 1
        renderBox();
    }
}
function endGame(){
    isGameActive = false;
    game.innerHTML = '';
    start.classList.remove('hide')
    game.style.background = '#ccc';
    timeH1.classList.add('hide');
    resultH1.classList.remove('hide');
    result.innerText = score;
    inputTime.setAttribute('disabled');
}
