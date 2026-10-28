// main.js

let grid = document.querySelectorAll(".grid-container"); 
let divs = document.querySelectorAll(".grid-container div");

function randomize() {

console.log(divs.length, "randomize!")

// affects the whole grid
grid[0].style.transform = `rotate(${Math.random() * 360}deg)`; 

// just the grid divs
divs.forEach(function (div){
    let scale = randomNumber(.5, 1);
    let translateX = randomNumber(0, 10);
    let translateY = randomNumber(0, 10); 
    let rotate = randomNumber(0, 180); 

    // 50% of the time ...
    if (Math.random() > .5) {
        scale = 1; //dont affect the scale 
        translateX = randomNumber(0, 80); 
        translateY = randomNumber(0, 80); 

    }

    div.style.transform = `scale(${scale}) translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;

}); 

}

document.addEventListener("click", randomize);

function randomNumber(min, max){

    return Math.floor(Math.random() * (max - min + 1 )) + min;  

}
