const button = document.getElementById("myResult")
const myNumber = document.getElementById("myNumber")
const square = document.getElementById("square")

const resultSquare = document.getElementById("squareNum")

const result = document.getElementById("result")

const squareNumber = (num) => num * num

result.addEventListener("click", function () {
    let num = parseInt(myNumber.value)
    resultSquare.innerText = `Квадрат числа ${num} = ${squareNumber(num)}`
})