
let position_of_player = [
        [],[],[]
    ];
let currentValue = 'X'
let firstPlayerPosition = []
let secondPlayerPosition = []
let Anyplayer = document.getElementById("player")
let winner = false
let turn = 0
    window.addEventListener("click", (e) => {
        // console.log(e)
        /* e.path[0].localName == "button" are u pressing a button and(e.target.innerText)is the button empty,
        so if it is empty perform this play() function */     
        if (e.path[0].localName == "button" && e.target.innerText == '' ){
            /* console.log(e.path[0].id)
            console.log(e.target.value, e.target.id) */
            play(e)
        }
    })
/* i created the function so that it can stand alone
i put e so to have then the event listener in the function */

    function play(e){
        //if the current player is X then the next one should be zero
        let row = 0
        let column = 0
        
        
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
        position_of_player[row][column] = currentValue
        e.target.innerText = currentValue

        console.log( {position_of_player} )
        Anyplayer.innerText =currentValue
    }

    function CheckWinner(){
        for (let index = 0; index < position_of_player.length; index++) {
            /* This code below is checking the position of the player on the row(row0, row1, row2),
             for the row position is changing that is why we have index first, then the row position i.e [index][0] */
            if (position_of_player[index][0] === position_of_player[index][1]
                && position_of_player[index][1] === position_of_player[index][2] ){}
            //dealing with the column position vs row position
            if (position_of_player[0][index] === position_of_player[1][index]
                    && position_of_player[1][index] === position_of_player[2][index] ) {
                    }
           
            
        }
        
    }
   /*  <div class="row">
            <p>The Current player is <strong>X</strong></p>
        </div> */
    
