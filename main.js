let block = document.getElementById("block"),
    hole = document.getElementById("hole"),
    character = document.getElementById("character"),
    jumping = 0,
    counter = 0;


hole.addEventListener('animationiteration', () => {
    let random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});
setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping === 0){
        character.style.top = (characterTop+3)+"px";
    }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")),
        holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top")),
        cTop = -(500-characterTop);
    if((characterTop>470)||((blockLeft<42)&&(blockLeft>-20)&&((cTop<holeTop)||(cTop>holeTop+110)))){

        if(JSON.parse(localStorage.getItem('counter') < counter-1)){
            localStorage.setItem('counter',counter-1)
        }
    
        alert("Game over. Score: "+(counter-1)+" Record "+ localStorage.getItem('counter'));
        character.style.top = 100 + "px";
        counter=0;
    }
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0,
        jumpInterval = setInterval(function(){
            let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            if((characterTop>6)&&(jumpCount<15)){
                character.style.top = (characterTop-5)+"px";
            }
            if(jumpCount>20){
                clearInterval(jumpInterval);
                jumping=0;
                jumpCount=0;
            }
            jumpCount++;
        },10);
}