let playing = 0;
let started = 0;

let players = {
    playerOne: '',
    playerTwo: ''
}

players.playerOne = prompt('Player 1: Please enter your name');
while (players.playerOne == null || players.playerOne == '') {
    players.playerOne = prompt('Player 1: Enter a name');
}

players.playerTwo = prompt('Player 2: Please enter your name');
while (players.playerTwo == null || players.playerTwo == '') {
    players.playerTwo = prompt('Player 2: Enter a name');
}

$('#p1_name, #turn').text(players.playerOne);
$('#p2_name').text(players.playerTwo);

let shapeClass = {
    playerOne: 'bx-x',
    playerTwo: 'bx-circle'
}

let playerPlaceholders = {
    playerOne: 'x',
    playerTwo: 'o'
}

let turn = 1;

var board = {
    "a1": '',
    "a2": '',
    "a3": '',
    
    "b1": '',
    "b2": '',
    "b3": '',
    
    "c1": '',
    "c2": '',
    "c3": '',
}

const switchTurn = (who) => {
    if(who == 2){
        $('#turn').text(players.playerOne);
        turn = 1;
    }else{
        $('#turn').text(players.playerTwo);
        turn = 2;
    }
}

$('.board-area').click(function(){
    if(playing == 1){
        let location = $(this).attr('data-board-location');
        
        let played = $(this).attr('data-played-spot');
        if(played != '1'){
            $(this).attr('data-played-spot', '1');
            if(turn == 1){
                $(this).addClass(shapeClass.playerOne);
                board[location] = playerPlaceholders.playerOne;
                switchTurn(1);
                processPlay(playerPlaceholders.playerOne);
            }else {
                $(this).addClass(shapeClass.playerTwo);
                board[location] = playerPlaceholders.playerTwo;
                switchTurn(2);
                processPlay(playerPlaceholders.playerTwo);
            }
        }
    }
});

const processPlay = (placeholder) => {
    // Check Column 1, Column 2 & Column 3 Vertical
    if(board.a1 == placeholder && board.b1 == placeholder && board.c1 == placeholder) declareWin(placeholder);
    else if(board.a2 == placeholder && board.b2 == placeholder && board.c2 == placeholder) declareWin(placeholder);
    else if(board.a3 == placeholder && board.b3 == placeholder && board.c3 == placeholder) declareWin(placeholder);

    // Check Row 1, Row 2 & Row 3 Vertical
    else if (board.a1 == placeholder && board.a2 == placeholder && board.a3 == placeholder) declareWin(placeholder);
    else if (board.b1 == placeholder && board.b2 == placeholder && board.b3 == placeholder) declareWin(placeholder);
    else if (board.c1 == placeholder && board.c2 == placeholder && board.c3 == placeholder) declareWin(placeholder);

    // Check Diagonals
    else if (board.a1 == placeholder && board.b2 == placeholder && board.c3 == placeholder) declareWin(placeholder);
    else if (board.a3 == placeholder && board.b2 == placeholder && board.c1 == placeholder) declareWin(placeholder);
    
    // Check if Draw
    else{
        let spaces = $('.board-area');
        let played = 0;
        for(space of spaces){
            let filled = $(space).attr('data-played-spot');
            if(filled == '1') played ++ ;
        }
        if(played == 9) gameDrawn();
    }
}

const gameDrawn = () => {
    $('#last_game').text('Nobody Won');
    newGame();
}

const declareWin = (player) => {
    if (player == playerPlaceholders.playerOne){
        scores.playerOne ++;
        $('#p1_score').text(scores.playerOne);
        $('#last_game').text(`${players.playerOne} Won`);
    } else{
        scores.playerTwo ++;
        $('#p2_score').text(scores.playerTwo);
        $('#last_game').text(`${players.playerTwo} Won`);
    }
    newGame();
}

let scores = {
    playerOne: 0,
    playerTwo: 0
}

const newGame = () => {
    $('.board-area').toggleClass("bg-dark text-warning bg-warning text-dark");
    $('#start').removeClass('disabled').text('Play Another Game');
    started = 1;
    playing = 0;
}

const resetBoard = () => { 
    $('.board-area').removeClass(`${shapeClass.playerOne} ${shapeClass.playerTwo}`);
    $('.board-area').attr('data-played-spot', '0');
    for (let key in board) {
        if (Object.hasOwnProperty.call(board, key)) {
            board[key] = '';
        }
    }
}

// Start Game
$('#start').click(function(){
    if (playing == 0) {
        if (started == 1) {
            $('.board-area').toggleClass("bg-dark text-warning bg-warning text-dark");
            resetBoard();
        }
        $(this).toggleClass('disabled').text('Game Ongoing...');
        playing = 1;
    }
})