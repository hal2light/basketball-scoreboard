//Score 
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeScoreCount = 0
let guestScoreCount = 0

//Button Functions
function addHomePoints(point){
    homeScoreCount += point
    homeScore.textContent = homeScoreCount
    diplayWinner()

}
function addGuestPoints(point){
    guestScoreCount += point
    guestScore.textContent = guestScoreCount
    diplayWinner()

}
//Who is winning ?

function diplayWinner(){
    if (homeScoreCount > guestScoreCount){
        homeScore.style.border = '3px solid green'
        guestScore.style.border = "3px solid red"
    }
    else if(guestScoreCount > homeScoreCount){
        homeScore.style.border = '3px solid red'
        guestScore.style.border = "3px solid green"
    }
    else{
        homeScore.style.border = '3px solid grey'
        guestScore.style.border = "3px solid grey"

    }  
}