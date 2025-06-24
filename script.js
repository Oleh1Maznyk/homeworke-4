const pElement = document.getElementById("p-element")
const button = document.getElementById("calkulate")
const startText = pElement.innerText


const myNumber = document.getElementById("Number")
const resultSquare = document.getElementById("square")
const resultCube = document.getElementById("cube")
const result = document.getElementById("result")

const square = (num) => num * num

result.addEventListener("click", function () {
    let myNum = parseInt(myNumber.velue)
    resultSquare.innerText = `${myNum} до кубу = ${square(num)}`
})