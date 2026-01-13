const adding1 = 1
const adding2 = 2
const adding3 = 3

let count = 0

let Score = document.getElementById("amt-score")

function Score1(){
    console.log("button clicked")
    let tot1 = adding1 + count
    count = tot1
    Score.textContent = tot1
}

function Score2(){
    console.log("button click2")
    let tot2 = adding2 + count
    count = tot2
    Score.textContent = tot2
}

function Score3(){
    console.log("button click3")
    let tot3 = adding3 + count
    count = tot3
    Score.textContent = tot3
}

