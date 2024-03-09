let gamesq=[];
let usersq=[];
let h2=document.querySelector("h2");
let started = false;
let level = 0;
let btns=["yellow","red","green","blue"];
let maxscore = -1;
document.addEventListener("keypress",function(){
    if(started == false){
    started=true;
    levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },80);
};
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },80);
};
function levelUp(){
    usersq=[];
    level++;
    h2.innerText=`Level ${level}`;
    //random button choose
    let randIdx =Math.floor(Math.random()*3); 
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // setTimeInterval(10);
    gamesq.push(randColor);
    setTimeout(function(){
        gameFlash(randBtn);
    },600);
}
function checkAns(idx){
    // console.log("curr level : ", level);
    // let idx = level-1;
    if(usersq[idx]===gamesq[idx]){  
        if(usersq.length==gamesq.length){
            setTimeout(levelUp,800);
        }
    }
    else{
        if(level>maxscore){
            maxscore = level;
        }
        h2.innerHTML=`Game Over! Your score i s <b>${level}</b>. High score = ${maxscore }<br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn);
    usersq.push(btn.getAttribute("id"));
    checkAns(usersq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;  
    level=0;
    gamesq=[];
    usersq=[];
}