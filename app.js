let gameSeq = [];
let userSeq = [];

let btn = ["yellow","red","purple","green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started= true;
        levelup();
    }

});

function levelup(){
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btn[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    btnFlash(randBtn);

}

function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);

}