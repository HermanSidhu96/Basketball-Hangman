//let current player be player 1 
// let currentplayer = "Baller"; //can be Baller or Hooper
//switch turn either if current player guesses word correctly or incorrect, allowing the other player to steal the point
// if (currentplayer == "Baller") {
//     currentplayer = "Hooper"
//   } else {
//     current_player = "Baller"
//   }
//words relate to div class "words"
// let words = ['Toronto Raptors', 'Fun Guy', 'Kobe Bryant', 'Michael Jordan', 'LeBron James', 'Dr. James Naismith', 'YMCA', 'Boston Celtics','Satnam Singh', 'Bryant Reeves', 'Chris Bosh', 'Duke', 'Mark Cuban', 'Giannis Antetokounmpo', 'Andrew Wiggins', 'Fred VanVleet', 'Pascal Siakam']
// will choose random word out of words
let word = "Kawhi"
// hints/quetions
// let hints = ['2019 NBA Champions', 'Kawhis nick-name', 'Wore number 33 for Lower Marion Highschool', '3rd pick 1984 NBA draft', '03/04 Rookie of the year', 'Inventor of Basketball', 'Where the first professional basketball game was played', 'This team has the most championships in NBA history','First Indian born NBA player', 'Wore number 50 for the Vancouver Grizzlies','4th overall pick in the 2003 NBA draft','Which College/University JJ Reddick attended','Owner of the Dallas Mavericks','MVP of the 2018-2019 NBA season','Maple Jordan','Drake calls this NBA point gaurd his twin', '2018-2019 Most Improved Player']
// let myHints = document.querySelector("Hints")
let maxWrong = 6

dashGenerator(word);

let btnA = document.getElementById("a")
btnA.addEventListener('click', executeGuess);
let btnB = document.getElementById("b")
btnB.addEventListener('click', executeGuess);
let btnC = document.getElementById("c")
btnC.addEventListener('click', executeGuess);
let btnD = document.getElementById("d")
btnD.addEventListener('click', executeGuess);
let btnE = document.getElementById("e")
btnE.addEventListener('click', executeGuess);
let btnF = document.getElementById("f")
btnF.addEventListener('click', executeGuess);
let btnG = document.getElementById("g")
btnG.addEventListener('click', executeGuess);
let btnH = document.getElementById("h")
btnH.addEventListener('click', executeGuess);
let btnI = document.getElementById("i")
btnI.addEventListener('click', executeGuess);
let btnJ = document.getElementById("j")
btnJ.addEventListener('click', executeGuess);
let btnK = document.getElementById("k")
btnK.addEventListener('click', executeGuess);
let btnL = document.getElementById("l")
btnL.addEventListener('click', executeGuess);
let btnM = document.getElementById("m")
btnM.addEventListener('click', executeGuess);
let btnN = document.getElementById("n")
btnN.addEventListener('click', executeGuess);
let btnO = document.getElementById("o")
btnO.addEventListener('click', executeGuess);
let btnP = document.getElementById("p")
btnP.addEventListener('click', executeGuess);
let btnQ = document.getElementById("q")
btnQ.addEventListener('click', executeGuess);
let btnR = document.getElementById("r")
btnR.addEventListener('click', executeGuess);
let btnS = document.getElementById("s")
btnS.addEventListener('click', executeGuess);
let btnT = document.getElementById("t")
btnT.addEventListener('click', executeGuess);
let btnU = document.getElementById("u")
btnU.addEventListener('click', executeGuess);
let btnV = document.getElementById("v")
btnV.addEventListener('click', executeGuess);
let btnW = document.getElementById("w")
btnW.addEventListener('click', executeGuess);
let btnX = document.getElementById("x")
btnX.addEventListener('click', executeGuess);
let btnY = document.getElementById("y")
btnY.addEventListener('click', executeGuess);
let btnZ = document.getElementById("z")
btnZ.addEventListener('click', executeGuess);

function executeGuess(event) {
    alert("working");
    // if btn is clicked display the same corresponding letter on a dash, if letter is in the word, otherwise wrong guess
    if (event.target.id == "a") {
        alert("user clicked a");
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("a")) {
            alert("words contains a")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("a")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'a');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            displayWrongTurn();
            displayBodyPart();
            deleteButton();
        }
    }
    if (event.target.id == "b") {
        //......
    }
}

function populateLetterInHTMLDashes(spot, letter) {
    //when given a spot number and letter, populate on HTML dashes in whichever spot the letter exists 
    let correctDash = document.getElementById (spot)
    correctDash.innerHTML = letter
};
function displayWrongTurn() { };
function displayBodyPart() { };
function deleteButton() { };





// function displayDashesAtStartGame(word) {
//     let dashes = document.createElement("span");
//     dashes.setAttribute("id", "dashes")
//     let body1 = document.getElementById("hangmanBody")
//     body1.appendChild(dashes)
//     if (word.length == 6)   {
//         //display 6 dash
//         dashes.innerHTML = "_ _ _ _ _ _"
//     }   else if (word.length == 4)  {
//         dashes.innerHTML = "_ _ _ _"
//     }   else if (word.length == 5) {
//         dashes.innerHTML = "_ _ _ _ _"
//     }
// };
//     displayDashesAtStartGame("Lebron");


//based on word.length creat x number of dashes as its own indidual span id
function dashGenerator(word) {
    let x = 0;
    while (x < word.length) {
        let dash = document.createElement("span")
        dash.setAttribute("id",x)
        let body = document.getElementById("hangmanBody")
        body.appendChild(dash)
        dash.innerHTML = "_"
        let space = document.createElement("span")
        body.appendChild(space)
        space.innerHTML = " "
        x = x + 1;
    }
};


    //   displayDashes()
    // 2. stick that length in a variable = 4.

    // 3. knowing length 4, create 4 "dash" elements
    // 4. display those dash elements in the <body>
    // document.getElementById('answers').innerHTML = answers.length

// select buttons 
// let buttons = document.querySelectorAll("button");
// buttons.addEventListener('click', executeTurn)

// function executeTurn () {

// }
// let # of turns = 6 per player
// player1= "" player2= "" TRY 1 PLAYER FIRST 

// randomize word function
// function randomWord () {
//    answer = words[Math.floor(Math.random() * words.length)];
// }

// document.getElementById('maxWrong').innerHTML = maxWrong;
// randomWord();
//click functions/buttons to select letters