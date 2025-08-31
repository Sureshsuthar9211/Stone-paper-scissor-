let userScore = 0;
let compScore = 0;

let GameCount = 0;


let choice = document.querySelectorAll(".choice");

let user_score = document.querySelector("#user-Score");
let comp_score = document.querySelector("#comp-Score");

let msg = document.querySelector(".msg");

let Gamecount = document.querySelector("#GameCount");

// Generate computer choice.
const gencompChoice = () => {
    let option = ["Stone", "Paper", "Scisser"];
    let index = Math.floor(Math.random() * 3);

    return option[index];

};

//user choice
choice.forEach((_choice) => {
    _choice.addEventListener("click", () => {
        const userChoice = _choice.getAttribute("id");

        playGame(userChoice); //pass userchoice's value
    });
});


//Game logic
const playGame = (userChoice) => {
    console.log("user choose ", userChoice); //user's value

    let compChoice = gencompChoice();
    console.log("computer choose ", compChoice); //comp's value

    GameCount++;
    Gamecount.innerText = "Game count = " + GameCount;

    if (userChoice == compChoice) {
        //Draw game.
        console.log("Game was drow! Play again.");
        msg.innerText = "Game was drow! Play again."
    } else {
        let userWin = true;
        if (userChoice === "Stone") {
            userWin = compChoice === "Scisser" ? true : false;

        } else if (userChoice === "Paper") {
            userWin = compChoice === "Stone" ? true : false;

        } else if (userChoice === "Scisser") {
            userWin = compChoice === "Stone" ? false : true;

        };
        showWinner(userWin);
    };
};

// who win?
let showWinner = (userWin) => {

    if (userWin) {
        userScore++;
        user_score.innerText = userScore;
        msg.innerText = "you win."
        console.log("User win game.", userScore);
    } else {
        compScore++;
        comp_score.innerText = compScore;
        msg.innerText = "you lose."
        console.log("You lose game.", compScore);
    }
};