let rounds = parseInt(prompt("How many rounds do you want to play?"), 10);
let ties = 0;
let wins = 0;
let losses = 0;

for (let i = 0; i < rounds; i++) {
    let input = prompt("Rock, paper, or scissors (r, p, or s)?");
    let num = Math.floor(Math.random() * 3);
    let comp;

    if (num === 0) {
        comp = "r";
    } else if (num === 1) {
        comp = "p";
    } else {
        comp = "s";
    }

    if (input === comp) {
        ties++;
        alert("You tied with the computer.");
    } else if (input === "r" && comp === "s") {
        wins++;
        alert("You won against the computer!");
    } else if (input === "r" && comp === "p") {
        losses++;
        alert("Sorry, the computer beat you.");
    } else if (input === "s" && comp === "r") {
        losses++;
        alert("Sorry, the computer beat you.");
    } else if (input === "s" && comp === "p") {
        wins++;
        alert("You won against the computer!");
    } else if (input === "p" && comp === "r") {
        wins++;
        alert("You won against the computer!");
    } else if (input === "p" && comp === "s") {
        losses++;
        alert("Sorry, the computer beat you.");
    }
}

alert("You won " + wins + " times, lost " + losses + " times, and tied " + ties + " times.");