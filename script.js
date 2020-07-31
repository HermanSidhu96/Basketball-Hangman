//let current player be player 1 
// let currentplayer = "Baller"; //can be Baller or Hooper
//switch turn either if current player guesses word correctly or incorrect, allowing the other player to steal the point
// if (currentplayer == "Baller") {
//     currentplayer = "Hooper"
//   } else {
//     current_player = "Baller"
//   }
//words relate to div class "words"
let words = ['torontoraptors', 'funguy', 'kobebryant', 'michaeljordan', 'lebronjames', 'drjamesnaismith', 'bostonceltics', 'lakers', 'jrsmith', 'demarderozan', 'shaq', 'charlesbarkley', 'satnamsingh', 'bryantreeves', 'chrisbosh', 'duke', 'demarcuscousins', 'magicjohnson', 'philjackson', 'nicknurse', 'markcuban', 'giannisantetokounmpo', 'andrewwiggins', 'fredvanvleet', 'pascalsiakam', 'miamiheat','chicagobulls','benwallace','nba','nbaontnt','shaqtinafool','adamsilver','davidstern','stephcurry','kevindurant','kawhileonard','boardmangetspaid','threpointer','buzzerbeater','slamdunk','derrickrose']
// will choose random word out of words
let word = ""
let wrongGuessCounter = 0;
let winCounter = 0;

function randomWord () { 
    let randomNum = Math.floor(Math.random() * words.length)
    word = words[randomNum];
};
randomWord();

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
    // if btn is clicked display the same corresponding letter on a dash, if letter is in the word, otherwise wrong guess
    if (event.target.id == "a") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("a")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("a")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'a');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("a");
    }
    if (event.target.id == "b") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("b")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("b")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'b');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("b");
    }
    if (event.target.id == "c") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("c")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("c")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'c');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("c");
    }
    if (event.target.id == "d") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("d")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("d")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'd');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("d");
    }
    if (event.target.id == "e") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("e")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("e")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'e');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("e");
    }
    if (event.target.id == "f") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("f")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("f")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'f');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("f");
    }
    if (event.target.id == "g") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("g")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("g")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'g');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("g");
    }
    if (event.target.id == "h") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("h")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("h")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'h');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("h");
    }
    if (event.target.id == "i") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("i")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("i")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'i');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("i");
    }
    if (event.target.id == "j") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("j")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("j")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'j');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("j");
    }
    if (event.target.id == "k") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("k")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("k")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'k');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("k");
    }
    if (event.target.id == "l") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("l")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("l")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'l');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("l");
    }
    if (event.target.id == "m") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("m")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("m")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'm');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("m");
    }
    if (event.target.id == "n") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("n")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("n")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'n');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("n");
    }
    if (event.target.id == "o") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("o")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("o")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'o');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("o");
    }
    if (event.target.id == "p") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("p")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("p")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'p');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("p");
    }
    if (event.target.id == "q") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("q")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("q")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'q');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("q");
    }
    if (event.target.id == "r") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("r")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("r")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'r');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("r");
    }
    if (event.target.id == "s") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("s")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("s")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 's');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("s");
    }
    if (event.target.id == "t") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("t")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("t")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 't');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("t");
    }
    if (event.target.id == "u") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("u")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("u")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'u');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("u");
    }
    if (event.target.id == "v") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("v")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("v")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'v');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("v");
    }
    if (event.target.id == "w") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("w")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("w")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'w');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("w");
    }
    if (event.target.id == "x") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("x")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("x")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'x');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            
        }
        deleteButton("x");
    }
    if (event.target.id == "y") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("y")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("y")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'y');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();

            deleteButton("y");
        }
        deleteButton("y");
    }
    if (event.target.id == "z") {
        // display a on dash if a meets the condition that the letter a is in the word 
        if (word.includes("z")) {
            //if true display a on the dash in whichever part of the string contains an a 
            //find spot on HTML dashes that should contain an a 
            //display a on that spot
            let spot = word.indexOf("z")
            checkWin(); 
            populateLetterInHTMLDashes(spot, 'z');
        } else {
            //display wrong turn at the top right corner of screen, display 1 body part of hangman
            //and eliminate possibility of a being clicked
            wrongGuess();


        }
        deleteButton("z");
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
        setTimeout(alertGameOver,1000); 
    }

};

function alertGameOver () {
    alert('GAME OVER')
    window.location.reload();
};

function deleteButton(letter) {
    //once button is clicked eliminate possibility of that button being clicked only triggered if guess is wrong 
    let btnDelete = document.getElementById(letter);
    btnDelete.style.visibility = "hidden"
};

function checkWin() {
    //if player guesses all letter in the word, alert you win
    winCounter = winCounter + 1
    if (winCounter == word.length)  {
        alert('YOU WIN');
        window.location.reload();
    }
};

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
