var timeVal = 60; 
var score = 0;
var rn = 0;

function makeBubble(){
    var clut = "";
    for(var i = 1; i <= 102; i++){
        var x = Math.floor(Math.random() * 10);
        clut += `<div class="bubble">${x}</div>`;
    }
    document.querySelector(".pbtm").innerHTML = clut;
}

function timer(){
    var timeInt = setInterval(() => {
        if(timeVal > 0){
            timeVal--;
            document.querySelector('#timebox').innerHTML = timeVal;
        }else{
            clearInterval(timeInt);
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over. Your Total Score is ${score}</h1>`;
        }
    }, 1000);
};

function hit(){
    rn = Math.floor(Math.random() * 10);
    document.querySelector('#hitbox').innerHTML = rn;
}

function scoreBox(){
    score += 10;
    document.querySelector('#scorebox').innerHTML = score;
}

document.querySelector('.pbtm').addEventListener('click', function(dets){
    var num = Number(dets.target.innerHTML);
    if(num === rn){
        scoreBox();
        makeBubble();
        hit();
    }
});

timer();
makeBubble();
hit();

