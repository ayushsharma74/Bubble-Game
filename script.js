// Variables
var pcenter = document.querySelector("#pcenter");
var timerbox = document.querySelector(".timerbox");
var hit = document.querySelector('.hit');
var score = 0;
var time = 60;
var randomNumber = 0;

// gameRunner Functions
function gameOver(){
    pcenter.innerHTML = "";
    pcenter.innerHTML = `<div class="go">Game Over</div>`
    hit.textContent = 0;
}
function generateRandomHit(){
    randomNumber = Math.floor(Math.random()*10);
    document.querySelector(".hit").textContent = randomNumber;
}

function decreaseScore(){
    if(score > 0){
        score -= 10;
        document.querySelector(".score").innerHTML = score;
    }
}
function increaseScore(){
    score += 10;
    document.querySelector(".score").innerHTML = score;
}
function makeBubble() {
    var pcenter = document.querySelector("#pcenter");
    var clutter = "";
    for (let index = 1; index < 120; index++) {
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`
    }
    pcenter.innerHTML = clutter;
}

function runTimer(){
    var interval = setInterval(function(){
        if(time > 0){
            time--;
            timerbox.textContent = time;
        }
        else{
            clearInterval(interval);
            // Game End Here
            gameOver();
        }
    },1000)
}

// Game Start Here
makeBubble();
runTimer();
generateRandomHit();

pcenter.addEventListener("click",function(details){
    var btn = details.target.textContent;
    if(btn == randomNumber){
        increaseScore();
        makeBubble();
        generateRandomHit();
    }
    else if(btn != randomNumber){
        decreaseScore();
        makeBubble();
        generateRandomHit();
    }
})
