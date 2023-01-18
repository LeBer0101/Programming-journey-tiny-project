InitialHome = 0
InitialOut = 0


document.getElementById("score1").textContent = InitialHome
document.getElementById("score2").textContent = InitialOut

function addh1(){
InitialHome = InitialHome + 1
document.getElementById("score1").textContent = InitialHome

}
function addh2(){
InitialHome = InitialHome + 2
document.getElementById("score1").textContent = InitialHome
}
function addh3(){
InitialHome = InitialHome + 3
document.getElementById("score1").textContent = InitialHome
}

function addo1(){
InitialOut = InitialOut + 1
document.getElementById("score2").textContent = InitialOut

}
function addo2(){
InitialOut = InitialOut + 2
document.getElementById("score2").textContent = InitialOut
}
function addo3(){
InitialOut = InitialOut + 3
document.getElementById("score2").textContent = InitialOut
}

function reset(){
InitialHome = 0
InitialOut = 0
document.getElementById("score1").textContent = InitialHome
document.getElementById("score2").textContent = InitialOut

}