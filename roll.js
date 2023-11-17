function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollTwoDice() {
    return rollDice() + rollDice();
}

function generateReport(rollsCount) {
    let results = {};

    for (let i = 0; i < rollsCount; i++) {
        let rollResult = rollTwoDice();
        results[rollResult] = (results[rollResult] || 0) + 1;
    }

    return results;
}

function playCraps() {
    let point = null; // point is null, indicating a new round
    let balance = 100; // Starting balance for the player
    let betAmount = 10; // Bet amount for each roll

    while (true) { // This loop represents the shooter's turn
        let rollResult = rollTwoDice();

        if (point === null) { // Come-out roll
            if (rollResult === 7 || rollResult === 11) {
                console.log(`Natural! Player wins $${betAmount} with: `, rollResult);
                balance += betAmount;
                console.log('Shooter rolls again for a new round.');
                // No 'break' here because the shooter continues
            } else if (rollResult === 2 || rollResult === 3 || rollResult === 12) {
                console.log(`Craps! Player loses $${betAmount} with: `, rollResult);
                balance -= betAmount;
                if (balance <= 0) {
                    console.log('Player is out of money!');
                    break;
                }
                console.log('But the shooter gets another come-out roll.');
                // No 'break' here because the shooter continues
            } else {
                point = rollResult; // A point is now established
                console.log(`Point is established at: ${point}. Continue rolling.`);
                // Continue to the point rolls without a break
            }
        } else { // Point is established, subsequent rolls
            if (rollResult === 7) {
                console.log(`Seven out! Player loses $${betAmount} with: `, rollResult);
                balance -= betAmount;
                if (balance <= 0) {
                    console.log('Player is out of money!');
                    break;
                }
                console.log('Next shooter is up.');
                point = null; // Reset the point for a new come-out roll
                break; // The shooter's turn is over after a 7 is rolled
            } else if (rollResult === point) {
                console.log(`Point hit! Player wins $${betAmount} with: `, rollResult);
                balance += betAmount;
                console.log('Shooter rolls again for a new round.');
                point = null; // Reset the point for a new come-out roll
            } else {
                console.log('Rolling continues, roll is: ', rollResult);
                // Keep rolling until point or 7 is hit
            }
        }

        console.log(`Current balance: $${balance}`);
        // Logic to check if player wants to change bet or end game
        // Could also include logic for "Odds Bet", "Come Bet", etc.
    }
}

playCraps();