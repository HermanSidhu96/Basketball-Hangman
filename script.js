//let current player be player 1 
// let currentplayer = "Baller"; //can be Baller or Hooper
//switch turn either if current player guesses word correctly or incorrect, allowing the other player to steal the point
// if (currentplayer == "Baller") {
//     currentplayer = "Hooper"
//   } else {
//     current_player = "Baller"
//   }
//words relate to div class "words"
let words = ['Toronto Raptors', 'Fun Guy', 'Kobe Bryant', 'Michael Jordan', 'LeBron James', 'Dr. James Naismith', 'YMCA', 'Boston Celtics','Satnam Singh', 'Bryant Reeves', 'Chris Bosh', 'Duke', 'Mark Cuban', 'Giannis Antetokounmpo', 'Andrew Wiggins', 'Fred VanVleet', 'Pascal Siakam']
let answer = ""
// hints/quetions
// let hints = ['2019 NBA Champions', 'Kawhis nick-name', 'Wore number 33 for Lower Marion Highschool', '3rd pick 1984 NBA draft', '03/04 Rookie of the year', 'Inventor of Basketball', 'Where the first professional basketball game was played', 'This team has the most championships in NBA history','First Indian born NBA player', 'Wore number 50 for the Vancouver Grizzlies','4th overall pick in the 2003 NBA draft','Which College/University JJ Reddick attended','Owner of the Dallas Mavericks','MVP of the 2018-2019 NBA season','Maple Jordan','Drake calls this NBA point gaurd his twin', '2018-2019 Most Improved Player']
// let myHints = document.querySelector("Hints")
let maxWrong = 6
// select buttons 
let buttons = document.querySelectorAll("button");
buttons.addEventListener('Clcik', executeTurn)

function executeTurn () {
    
}
// let # of turns = 6 per player
// player1= "" player2= "" TRY 1 PLAYER FIRST 

// randomize word function
function randomWord () {
   answer = words[Math.floor(Math.random() * words.length)];
}

document.getElementById('maxWrong').innerHTML = maxWrong;
randomWord();
//click functions/buttons to select letters