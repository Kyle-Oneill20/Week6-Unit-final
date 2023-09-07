let playerOne = [9,6,12,9,13,8,7,8,4,3,5,2,7,5,12,3,13,5,9,2,3,5,9,1,10,1];
let playerTwo = [7,4,13,6,11,7,4,11,8,1,2,10,3,8,10,11,13,1,6,4,12,11,6,2,12,10];
p1Points = 0
p2Points = 0
for(let i = 0; i < playerOne.length; i++){
    console.log(`Player 1 plays ${playerOne[i]} and Player 2 plays ${playerTwo[i]}`)
    if(playerOne[i]>playerTwo[i]){
        p1Points += 1
        console.log(`Player 1 gets a point! They now have ${p1Points} points.`) 
    } else if(playerTwo[i]>playerOne[i]){
        p2Points+=1
        console.log(`Player 2 gets a point! They now have ${p2Points} points.`) 
    } else {
        console.log(`Tie, no gets any points. Player 1 has ${p1Points} and Player 2 has ${p2Points}.`)
    }
} if(p1Points>p2Points){
    console.log(`Player 1 wins with a score of ${p1Points}`)
} else if(p2Points>p1Points){
    console.log(`Player 2 wins with a score of ${p2Points}`)
} else {
    console.log(`A tie! Both players have ${p1Points}`)
}