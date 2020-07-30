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
let word = "abc"
// hints/quetions
// let hints = ['2019 NBA Champions', 'Kawhis nick-name', 'Wore number 33 for Lower Marion Highschool', '3rd pick 1984 NBA draft', '03/04 Rookie of the year', 'Inventor of Basketball', 'Where the first professional basketball game was played', 'This team has the most championships in NBA history','First Indian born NBA player', 'Wore number 50 for the Vancouver Grizzlies','4th overall pick in the 2003 NBA draft','Which College/University JJ Reddick attended','Owner of the Dallas Mavericks','MVP of the 2018-2019 NBA season','Maple Jordan','Drake calls this NBA point gaurd his twin', '2018-2019 Most Improved Player']
// let myHints = document.querySelector("Hints")
let wrongGuessCounter = 0;


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
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "b") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("b")) {
            alert("words contains b")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("b")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'b');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "c") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("c")) {
            alert("words contains c")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("c")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'c');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "d") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("d")) {
            alert("words contains d")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("d")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'd');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "e") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("e")) {
            alert("words contains e")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("e")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'e');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "f") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("f")) {
            alert("words contains f")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("f")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'f');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "g") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("g")) {
            alert("words contains g")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("g")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'g');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "h") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("h")) {
            alert("words contains h")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("h")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'h');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "i") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("i")) {
            alert("words contains i")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("i")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'i');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "j") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("j")) {
            alert("words contains j")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("j")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'j');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "k") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("k")) {
            alert("words contains k")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("k")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'k');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "l") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("l")) {
            alert("words contains l")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("l")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'l');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "m") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("m")) {
            alert("words contains m")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("m")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'm');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "n") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("n")) {
            alert("words contains n")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("n")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'n');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "o") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("o")) {
            alert("words contains o")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("o")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'o');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "p") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("p")) {
            alert("words contains p")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("p")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'p');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "q") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("q")) {
            alert("words contains q")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("q")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'q');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "r") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("r")) {
            alert("words contains r")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("r")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'r');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "s") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("s")) {
            alert("words contains s")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("s")
            alert(spot);
            populateLetterInHTMLDashes(spot, 's');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "t") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("t")) {
            alert("words contains t")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("t")
            alert(spot);
            populateLetterInHTMLDashes(spot, 't');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "u") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("u")) {
            alert("words contains u")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("u")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'u');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "v") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("v")) {
            alert("words contains v")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("v")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'v');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "w") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("w")) {
            alert("words contains w")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("w")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'w');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "x") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("x")) {
            alert("words contains x")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("x")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'x');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "y") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("y")) {
            alert("words contains y")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("y")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'y');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
    if (event.target.id == "z") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("z")) {
            alert("words contains z")
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("z")
            alert(spot);
            populateLetterInHTMLDashes(spot, 'z');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton();
        }
    }
};

function populateLetterInHTMLDashes(spot, letter) {
    //when given a spot number and letter, populate on HTML dashes in whichever spot the letter exists 
    let correctDash = document.getElementById(spot)
    correctDash.innerHTML = letter
};

function wrongGuess() {
    //if word does not contain letter, max wrong = 6
    wrongGuessCounter = wrongGuessCounter + 1;
    //replace pic 
    if (wrongGuessCounter == 1) {
        document.getElementById("hangmanImg").src = "pic 1.png"
    } else if (wrongGuessCounter == 2) {
        document.getElementById("hangmanImg").src = "pic 2.png"
    } else if (wrongGuessCounter == 3) {
        document.getElementById("hangmanImg").src = "pic 3.png"
    } else if (wrongGuessCounter == 4) {
        document.getElementById("hangmanImg").src = "pic 4.png"
    } else if (wrongGuessCounter == 5) {
        document.getElementById("hangmanImg").src = "pic 5.png"
    } else if (wrongGuessCounter == 6) {
        document.getElementById("hangmanImg").src = "pic 6.png"
        alert('GAME OVER');
        window.location.reload ();
    }

};

function deleteButton() {
    //once button is clicked eliminate possibility of that button being clicked 
};

function win() {
    //if player guesses all letter in the word, alert you win
};
function lose() {
    //if wrong guesses = max wrong, alert you lost
};
function reset() {
    //if either win or loss condition met, reset game
};


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
        dash.setAttribute("id", x)
        dash.setAttribute("class", "dash")
        let dashPlacement = document.getElementById("dashPlacement")
        dashPlacement.appendChild(dash)
        dash.innerHTML = "_"
        let space = document.createElement("span")
        dashPlacement.appendChild(space)
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