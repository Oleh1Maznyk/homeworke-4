const myNumber = document.getElementById("myNum")

const resultSqare = document.getElementById("squareNum")
const resultCube = document.getElementById("cubeNum")
const resultDivFive = document.getElementById("divFive")

const result = document.getElementById("result")

const sqareNumber = (num) => num ** 2
const cubeNumber = (num) => num ** 3
const divFive = (num) => num % 5

result.addEventListener("click", function () {
    let num = parseInt(myNumber.value)
    resultSqare.innerText = `Квадрат: ${sqareNumber(num)}`
    resultCube.innerText = `Куб: ${cubeNumber(num)}`
    resultDivFive.innerText = `Залишок від ділення на 5: ${divFive(num)}`
})