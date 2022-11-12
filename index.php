<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TIC TAC TOE</title>
    <link rel="stylesheet" href="../vendor/bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="../vendor/boxicons/css/boxicons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="./style.css">
    <script src="../vendor/jquery.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js"
        integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
</head>
<body>

    <div id="page" class="fixed-top h-100 w-100 row m-0">
        <div id="stats" class="d-none d-md-block col-4 p-5 rounded shadow bg-black">
            <div class="bg-dark p-2 text-center text-light rounded mb-5 shadow">
                <h3 class="text-center">Play</h3>
                <p class="lead"><span id="turn">Player One</span>'s Turn</p>
            </div>

            <div class="bg-dark p-2 text-center text-light mb-5 rounded shadow">
                <h3 class="text-center">Scores</h3>
                <table class="table table-dark">
                    <tr>
                        <th id="p1_name" class="text-start"">Player One</th>
                        <td id="p1_score">0</td>
                    </tr>
                    <tr>
                        <th id="p2_name" class="text-start"">Player Two</th>
                        <td id="p2_score">0</td>
                    </tr>
                </table>
            </div>

            <div class="bg-dark p-2 text-center text-light rounded shadow">
                <h3 class="text-center">Last Game</h3>
                <p class="lead" id="last_game">No Game Played</p>
            </div>

            <p class="lead text-center text-muted mt-5">Developed by Anthony</p>

        </div>


        <div class="col row m-0 justify-content-center align-items-between text-center p-5 bg-black">
            <h1 class="d-block d-md-none text-light"><span id="turn2"></span></h1>
            <div class="row m-0 rounded p-2" id="board">
                <div class="bg-dark text-warning rounded col-4 bx board-area" data-played-spot="0" data-board-location="a1"></div>
                <div class="bg-dark text-warning rounded col-4 space-fix bx board-area" data-played-spot="0" data-board-location="a2"></div>
                <div class="bg-dark text-warning rounded col-4 bx board-area" data-played-spot="0" data-board-location="a3"></div>
        
                <div class="bg-dark text-warning rounded col-4 bx board-area" data-played-spot="0" data-board-location="b1"></div>
                <div class="bg-dark text-warning rounded col-4 space-fix bx board-area" data-played-spot="0" data-board-location="b2"></div>
                <div class="bg-dark text-warning rounded col-4 bx board-area" data-played-spot="0" data-board-location="b3"></div>
        
                <div class="bg-dark text-warning rounded col-4 bx board-area" data-played-spot="0" data-board-location="c1"></div>
                <div class="bg-dark text-warning rounded col-4 space-fix bx board-area" data-played-spot="0" data-board-location="c2"></div>
                <div class="bg-dark text-warning rounded col-4 bx board-area" data-played-spot="0" data-board-location="c3"></div>
            </div>
            <div>
                <button class="d-block px-5 py-3 mx-auto btn btn-dark" id="start">Start Game</button>
            </div>
        </div>
    </div>

    <script src="./script.js"></script>
</body>
</html>