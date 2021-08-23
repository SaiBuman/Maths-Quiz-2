player1_name = localStorage.getItem("Player_1");
player2_name = localStorage.getItem("Player_2");

player1_score = 0;
player2_score = 0;

number_1 = document.getElementById("word1").value;
number_2 = document.getElementById("word2").value;
number = parseInt(number_1) * parseInt(number_2)

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML ="Question Turn : " +player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " +player2_name;

function send() {
    question_word = "<h4 id='word_display'>Q. " + document.getElementById("word1").value + " X " +document.getElementById("word2").value + "</h4>";
    input_box = "<br>Answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

function check() {
 get_answer = document.getElementById("input_check_box").value;
answer = number;
console.log("Answer is" + answer);

if (answer == word) {
    if (answer_turn == "player1") {
        player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else {
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
}
if (question_turn == "player1") {
    question_turn = "player2";
    document.getElementById("player_question").innerHTML ="Question Turn : "+player2_name ;
}
else{
    question_turn = "player1";
    document.getElementById("player_question").innerHTML ="Question Turn : "+player1_name ;
}

if (answer_turn == "player1") {
    answer_turn = "player2";
    document.getElementById("player_answer").innerHTML ="Answer Turn : "+player2_name ;
}
else{
    answer_turn = "player1";
    document.getElementById("player_answer").innerHTML ="Answer Turn : "+player1_name ;
}
document.getElementById("output").innerHTML="";
}
