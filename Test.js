describe('Game of War',()=>{
    it('should make player 1 the winner',()=>{
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
    })
})