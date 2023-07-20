var numA
var numB = 0
function addNumber(num) {
    var numA = numA + num
    document.getElementById("resposta").innerHTML += num
    document.getElementById("teste").innerHTML += numA
}

function addOperation() {
    document.getElementById("teste").innerHTML = document.getElementById("resposta").value
}

function calculate() {

}

function clear() {

}