let homeEl= document.getElementById("home-el")
let guestEl =document.getElementById('guest-el')
let homescore = 0
let guestscore = 0

function homeplus1(){
    homescore +=1
    homeEl.textContent = homescore
}

function homeplus2(){
    homescore +=2
    homeEl.textContent = homescore
}

function homeplus3(){
    homescore +=3
    homeEl.textContent = homescore
}

function guestplus1(){
    guestscore +=1
    guestEl.textContent = guestscore
}

function guestplus2(){
    guestscore +=2
    guestEl.textContent = guestscore
}

function guestplus3(){
    guestscore +=3
    guestEl.textContent = guestscore
}

function reset(){
    homescore = 0
    guestscore = 0
    homeEl.textContent = homescore
    guestEl.textContent = guestscore    
    
}