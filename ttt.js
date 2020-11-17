
let position_of_player = [
        [],[],[]
    ];
let currentValue = 'X'
let firstPlayerPosition = []
let secondPlayerPosition = []
let turnTrackerContrainerElement = document.getElementById("turnTracker")
// let anyPlayer = document.getElementById("player")
let winner = false
let turn = 0


window.addEventListener("click", (e) => {
    // console.log(e)
    /* e.path[0].localName == "button" are u pressing a button and(e.target.innerText)is the button empty,
    so if it is empty perform this play() function */     
    if (e.path[0].localName == "button" && e.target.innerText == '' ){
        /* console.log(e.path[0].id)
        console.log(e.target.value, e.target.id) */

        let column = e.target.value
        let row = e.target.parentElement.parentElement.id
        
        play(e, row, column)
    }
})
/* i created the function so that it can stand alone
i put e so to have then the event listener in the function */

function play(e, row, column){
    //if the current player is X then the next one should be zero
   
    
    
    if ( currentValue === 'X' ) {
        //then the next one should be zero
        
        currentValue = 'O'
        firstPlayerPosition.push(e.target.value)
        
        console.log("FIRST PLAYER " + currentValue, firstPlayerPosition)
    }
    else {
        
        currentValue = 'X'
        secondPlayerPosition.push(e.target.value)
        console.log("SECOND PLAYER "  + currentValue, secondPlayerPosition)
    }
    turn++
    console.log( {turn} )
    position_of_player[row][column] = currentValue
    e.target.innerText = currentValue

    console.log( {position_of_player} )
    trackTurn(turn, currentValue);
    checkWinner()
    checkDraw(winner, turn)
    console.log({winner})

}

function trackTurn(turn, player){
    
    let turnTrackerChild = document.createElement("li")
    // let turnTrackerChildBreak = document.createElement("br")
    let turnTrackerChildContent = `Last player of turn ${turn}  is ${player}`
    
    turnTrackerChild.textContent = turnTrackerChildContent
    turnTrackerContrainerElement.appendChild(turnTrackerChild)
    // turnTrackerContrainerElement.appendChild(turnTrackerChildBreak)
}

function checkWinner(){
    for (let index = 0; index < position_of_player.length; index++) {
        /* This code below is checking the position of the player on the row(row0, row1, row2),
            for the row position is changing that is why we have index first, then the row position i.e [index][0] */

            console.log("zero zero :" + position_of_player[0][0])
            // horizontal
            if ( position_of_player[index][0] !== undefined && position_of_player[index][0] === position_of_player[index][1]
            && position_of_player[index][1] === position_of_player[index][2] ){
                winner = true
                alert( `winner!!! horizontal, row ${index}` )
            }
        //dealing with the column position vs row position

        // vertical
        if ( position_of_player[0][index] !== undefined && position_of_player[0][index] === position_of_player[1][index]
                && position_of_player[1][index] === position_of_player[2][index] ) {
                    winner = true
                    alert( `winner!!! vertical, column ${index}` )
                    }

        if (position_of_player[0][0] !== undefined && position_of_player[0][0] === position_of_player[1][1] 
            && position_of_player[1][1] === position_of_player[2][2]  ) {
                winner = true
                alert( `winner!!! diagonal, 1` )
            
        }

        if (position_of_player[0][2] !== undefined && position_of_player[0][2] === position_of_player[1][1] 
            && position_of_player[1][1] === position_of_player[2][0]) {
                winner = true
                alert( `winner!!! diagonal, 2`)
        }
        
    }
    
}

function checkDraw(winner, turn) {
    if (winner === false && turn === 9) {
        alert(`DRAW!!! No Winner`)
        
    }
    
}
   /*  <div class="row">
            <p>The Current player is <strong>X</strong></p>
        </div> */
    
