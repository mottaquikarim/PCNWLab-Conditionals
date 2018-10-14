const generateRandomNumberFromRange = function generateRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}

/*
    @func generateTrafficLight
    @returns {string}
    @desc - generates a random number from 1 to 3
            if 1, return 'red'
            if 2, return 'green',
            if 3, return 'blue'
            
    @example generateTrafficLight(); // 'red' or 'blue' or 'green'
*/

const generateTrafficLight = () => {

    if(generateRandomNumberFromRange(1, 3) === 1) return 'red';
    else if(generateRandomNumberFromRange(1,3) === 2) return 'green';
    return 'blue';

}

console.log(generateTrafficLight());
console.log('*********************************')
/*
    @func generateRandomPhoneNumber
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
    @example generateRandomPhoneNumber(); // "1-718-786-2825"
*/

const generateRandomPhoneNumber = () => {

    return `1-${generateRandomNumberFromRange(100, 999)}-${generateRandomNumberFromRange(100, 999)}-${generateRandomNumberFromRange(1000, 9000)}`;

}

console.log(generateRandomPhoneNumber());
console.log('*********************************')
/*
    @func generateRandomRGB
    @returns {string}
    @desc - generates a random rgb value
            HINT: you will need to use the 
                  generateRandomNumberFromRange 
                  function from above
    
    @example generateRandomRGB(); // "rgb(255, 123, 0)"
*/
const generateRandomRGB = () => {

    return `${generateRandomNumberFromRange(0, 255)}, ${generateRandomNumberFromRange(0, 255)}, ${generateRandomNumberFromRange(0, 255)}`;

}

console.log(generateRandomRGB());
console.log('*********************************')
/*
    @func generateLottoTicket
    @returns {string}
    @desc - generates a random lotto ticket with:
            A random number 0-9
            A random number 0-15
            A random number 0-30
            
            Present it as such: L [0-9] [0-15]-[0-30]
    
    @example generateLottoTicket(); // L 9 11-28
*/

const generateLottoTicket = () => {

    const randomNum9 = generateRandomNumberFromRange(0,9);
    const randomNum15 = generateRandomNumberFromRange(0,15);
    const randomNum30 = generateRandomNumberFromRange(0,30);

    return `L 0-9 is: ${randomNum9}, 0-15 is ${randomNum15} & 0-30 is ${randomNum30}`;


}

console.log(generateLottoTicket());
console.log('*********************************')

/*
    @func generatePhoneNumberWithAreaCode
    @param {number} areaCode
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
            IF `areaCode` is provided, it will use that area code
            and NOT generate one
            
    @example generatePhoneNumberWithAreaCode(); // "1-718-786-2825"
    @example generatePhoneNumberWithAreaCode( 646 ); // "1-646-786-2825"
*/

const generatePhoneNumberWithAreaCode = (areaCode = generateRandomNumberFromRange(100, 999)) => {

    return `1-${areaCode}-${generateRandomNumberFromRange(100,999)}-${generateRandomNumberFromRange(1000,9999)}`

}

console.log(generatePhoneNumberWithAreaCode(718));
console.log('*********************************')

/*
    @func generateTicketWithLetters
    @returns {string}
    @desc - geneartes a random lotto ticket with:
            A random number 0-9
            A random LOWERCASED LETTER a-z
            A random UPPERCASED LETTER A-Z
            A random number 0-30
            
            Present it as such: L [a-z] [A-Z]-[0-30]
            HINT: look up `String.fromCharCode()` on the Google
            
        @example generateLottoTicket(); // L g M-28
*/

const generateTicketWithLetters = () => {

    const randomLowerCasedLetter = String.fromCharCode(generateRandomNumberFromRange(65, 90)).toLowerCase();
    const randomUpperCasedLetter = String.fromCharCode(generateRandomNumberFromRange(65, 90));
    
    return `L [${randomLowerCasedLetter}] [${randomUpperCasedLetter}]-[${generateRandomNumberFromRange(0, 30)}]`;

}

console.log(generateTicketWithLetters());
console.log('*********************************')
/*
    @func rockPaperScissors
    @param {string} player1
    @param {string} player2
    @returns {number}
    @desc - given a player1 and player2
            returns 1 if player1 has won
            returns 2 if player2 has won
            returns 0 if tie
            returns -1 if invalid input
            expects both player1 and player2 inputs to be either
            "rock", "paper", or "scissors"
    
    @example rockPaperScissors( "rock", "paper" ); // 2
    @example rockPaperScissors( "rock", "scissors"); // 1
    @example rockPaperScissors( "rock", "rock" ); // 0
    @example rockPaperScissors( "r", "p" ); // -1
    @example rockPaperScissors( "r" ); // -1
    @example rockPaperScissors(); // -1
*/

const rockPaperScissors = (player1, player2) => {
    const lowerCasedPlayer1 = player1.toLowerCase();
    const lowerCasedPlayer2 = player2.toLowerCase();
    
    if(lowerCasedPlayer1 === 'rock' && lowerCasedPlayer2 === 'paper') return 2;
    else if(lowerCasedPlayer1 === 'paper' && lowerCasedPlayer2 === 'scissors') return 2;
    else if(lowerCasedPlayer1 === 'scissors' && lowerCasedPlayer2 === 'rock') return 2;
    else if(lowerCasedPlayer2 === 'rock' && lowerCasedPlayer1 === 'paper') return 1;
    else if(lowerCasedPlayer2 === 'paper' && lowerCasedPlayer1 === 'scissors') return 1;
    else if(lowerCasedPlayer2 === 'scissors' && lowerCasedPlayer1 === 'rock') return 1;
    else if(lowerCasedPlayer1 === lowerCasedPlayer2) return 0;  
    else return -1;
}

console.log(rockPaperScissors('rock', 'scissors'), 'This should be 1');
console.log(rockPaperScissors('paper', 'scissors'), 'This should be 2');
console.log(rockPaperScissors('rock', 'paper'), 'This should be 2');
console.log(rockPaperScissors('scissors', 'paper'), 'This should be 1');
console.log(rockPaperScissors('randomName', 'nonRelated'), 'This should be -1');
console.log(rockPaperScissors('paper', 'paper'), 'This should be 0');
console.log('*********************************');


/*
    @func RPSwithComputer
    @param {string} player
    @returns {number}
    @desc - given a player,
            randomly selects a "choice" for the computer
            RUNS rockPaperScissors from before with computer's choice
            as `player2`
            expect same results as above

    @example rockPaperScissors( "rock" ); // 2, if computer won
    @example rockPaperScissors( "rock" ); // 1, if player won
    @example rockPaperScissors( "rock" ); // 0, if tied
    @example rockPaperScissors(); // -1
*/

const computerChoices = function computerChoices(num){
    if(num === 1) return 'rock';
     else if(num === 2) return 'paper';
     else return 'scissors';
}

// console.log(computerChoices(generateRandomNumberFromRange(1,3)))
// console.log(rockPaperScissors('rock', computerChoices(generateRandomNumberFromRange(1,3))));

const RPSwithComputer = (player) => {

    return rockPaperScissors(player, computerChoices(generateRandomNumberFromRange(1,3)));
    
}

console.log(RPSwithComputer('rock'), 'Remember 1 = player 1 won; 2 = computer won; 0 = tie');
console.log(RPSwithComputer('paper'), 'Remember 1 = player 1 won; 2 = computer won; 0 = tie');
console.log(RPSwithComputer('scissors'), 'Remember 1 = player 1 won; 2 = computer won; 0 = tie');
console.log(RPSwithComputer('rock'), 'Remember 1 = player 1 won; 2 = computer won; 0 = tie');
console.log(RPSwithComputer('rock'), 'Remember 1 = player 1 won; 2 = computer won; 0 = tie');
console.log(RPSwithComputer('scissors'), 'Remember 1 = player 1 won; 2 = computer won; 0 = tie');

/*
    @func calculateGrade
    @param {number} grade
    @returns {string}
    @desc - given a numerical grade,
            determine the letter grade

    @example calculateGrade( 90 ); // A
    @example calculateGrade( 80 ); // B
    @example calculateGrade( 70 ); // C
    @example calculateGrade( 60 ); // D
    @example calculateGrade( 54 ); // F
    @example calculateGrade( -10 ); // Error
    @example calculateGrade( 10000 ); // Error
    @example calculateGrade( "lol skool sucks" ); // Error
    
*/

function calculateGrade(grade){
    // Write your codes below here
    /*
        assume that grade is the value the user input
        IF grade is between [100, 95]
            UPDATE grade = A (question: what kind of variable should A be?)
        if grade is between [95, 85]
            UPDATE grade = B
        if grade is between [85, 75]
            UPDATE grade = C
        if grade is between [75, 65]
            UPDATE grade = D
        if grade is between [65, 0]
            UPDATE grade = F
    */
    
    if (grade > 90) {
        return "A";
    }
   return "F"; // you may choose not to use this
} 
