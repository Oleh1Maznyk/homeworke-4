const myNumber = document.getElementById("myNumber")

const result = document.getElementById("result")

const resultSqare = document.getElementById("sqareNum")
const resultCube = document.getElementById("cubeNum")
const resultDiv = document.getElementById("divNum")

const sqareNumber = (num) => num ** 2
const cubeNumber = (num) => num ** 3
const divNumber = (num) => num % 5

button.addEventListener("click", function () {
    const myColors = ["red", "blue", "green", "yellow", "purple"]
    document.body.style.backgroundColor = myColors;
})

result.addEventListener("click", function () {
    let num = parseInt(myNumber.value)
    resultSqare.innerText = `Квадрат числа ${num} = ${sqareNumber(num)}`
    resultCube.innerText = `Куб числа ${num} = ${cubeNumber(num)}`
    resultDiv.innerText = `Залишок від ділення на 5: ${divNumber(num)}`
})
