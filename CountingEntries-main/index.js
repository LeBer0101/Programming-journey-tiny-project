savetrace = document.getElementById("trace")

a = 0
function increment(){
    a = a + 1
    document.getElementById("nombre").textContent = a

}

function save(){
    countStr = a + " - "
    savetrace.innerText = savetrace.textContent + countStr
    document.getElementById("nombre").textContent = 0
    a = 0


}

function clear(){
    document.getElementById("nombre").textContent = 0
    a = 0
    savetrace.innerText = 0

}