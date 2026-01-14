let count = 0
let awayCount = 0

let Score = document.getElementById("amt-score")
let awayScore = document.getElementById("away-score")

function HScore1(){
    console.log("button clicked")
    let tot1 = 1 + count
    count = tot1
    Score.textContent = tot1
}

function HScore2(){
    console.log("button click2")
    let tot2 = 2 + count
    count = tot2
    Score.textContent = tot2
}

function HScore3(){
    console.log("button click3")
    let tot3 = 3 + awayCount
    awayCount = tot3
    Score.textContent = tot3
}

function AScore1(){
    console.log("button clicked")
    let tot1 = 1 + awayCount
    awayCount = tot1
    awayScore.textContent = tot1
}

function AScore2(){
    console.log("button click2")
    let tot2 = 2 + awayCount
    awayCount = tot2
    awayScore.textContent = tot2
}

function AScore3(){
    console.log("button click3")
    let tot3 = 3 + awayCount
    awayCount = tot3
    awayScore.textContent = tot3
}