// function makeBubble(){
//     var cluster = "";

// for(var i=1;i<400;++i){
//     var rn = Math.floor(Math.random()*10);
    
//     cluster += `<div class="bubl">${rn}</div>`;
// }

// document.querySelector("#pbot").innerHTML = cluster;
// }
// makeBubble();

function makeBubble1(){
    var redbul = "";
    for(var i=1;i<250;++i){
        var rn = Math.floor(Math.random()*10);
        redbul += `<div class="bubl1">${rn}</div>`;
    }
    document.querySelector("#pbot").innerHTML = redbul;
}


var timer = 60;
function runtimer(){
    setInterval(function(){
        timer;
        document.querySelector("timerval").textContent = timer;
    },1000);
        
}
runtimer();
makeBubble1();