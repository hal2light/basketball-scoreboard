//Score 
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeScoreCount = 0
let guestScoreCount = 0


function addOnePointHome(){
    homeScoreCount += 1
    homeScore.textContent = homeScoreCount

}

function addTwoPointsHome(){
    homeScoreCount += 2 
    homeScore.textContent = homeScoreCount

}

function addThreePointsHome(){
    homeScoreCount += 3 
    homeScore.textContent = homeScoreCount

}

function addOnePointGuest(){
    guestScoreCount += 1
    guestScore.textContent = guestScoreCount

}

function addTwoPointsGuest(){
    guestScoreCount += 2
    guestScore.textContent = guestScoreCount

}

function addThreePointsGuest(){
    guestScoreCount += 3
    guestScore.textContent = guestScoreCount

}
