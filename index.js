let scoreHome = document.getElementById("home");
let countHome = 0;

function add1() {
    countHome += 1;
    scoreHome.textContent = countHome;
}

function add2() {
    countHome += 2;
    scoreHome.textContent = countHome;
}

function add3() {
    countHome += 3;
    scoreHome.textContent = countHome;
}

let scoreGuest = document.getElementById("guest");
let countGuest = 0;

function add1Guest() {
    countGuest += 1;
    scoreGuest.textContent = countGuest;
}

function add2Guest() {
    countGuest += 2;
    scoreGuest.textContent = countGuest;
}

function add3Guest() {
    countGuest += 3;
    scoreGuest.textContent = countGuest;
}

let reset = document.getElementsByClassName("new-game-btn");

function resetGame() {
    scoreHome.textContent = 0;
    scoreGuest.textContent = 0;
    countHome = 0;
    countGuest = 0;
}