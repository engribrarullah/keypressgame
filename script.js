var score = 5;
function disabled(){
document.getElementById("player").disabled = true;
}
function game() {
    document.getElementById("player").disabled = false;
    var setkey1=document.getElementById("set1").value;
    var setkey2=document.getElementById("set2").value;
    var player1Name = document.getElementById("player1Name").value;
    var player2Name =document.getElementById("player2Name").value;
    var player = document.getElementById("player").value;
    document.getElementById("p1value").innerHTML=player1Name+": "+ setkey1;
    document.getElementById("p2value").innerHTML=player2Name +": "+ setkey2;
    document.getElementById("player1Name").disabled = true;
    document.getElementById("player2Name").disabled = true;
    document.getElementById("set1").disabled = true;
    document.getElementById("set2").disabled = true;
    if (player==setkey1) {
        score++;
    } else if (player ==setkey2) {
        score--;
    }

    document.getElementById("score").innerHTML = "Score: " + score;

    if (score == 10) {
        document.getElementById("winner").innerHTML = player1Name + " Wins!";
        endGame();
    } else if (score == 0) {
        document.getElementById("winner").innerHTML = player2Name + " Wins!";
        endGame();
    }
    document.getElementById("player").value = "";
}

function handleKeyPress(event) {
    if (event.key == "Enter") {
        game();
    }
}
function endGame() {
    document.getElementById("player").disabled = true;
}