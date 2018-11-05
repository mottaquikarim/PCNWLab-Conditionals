function generateRandomNumberFromRange( s, e ) {
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

function genRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}

let random = genRandomNumberFromRange(1,3);
const generateTrafficLight = () => {
        if (random === 1) {
            return "red";
        }
        else if (random === 2) {
            return "green";
        }
          return "blue";
    }  
    console.log(generateTrafficLight());

/*
    @func generateRandomPhoneNumber
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
    @example generateRandomPhoneNumber(); // "1-718-786-2825"
*/
function generateRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}
    let digit1 = generateRandomNumberFromRange(0,9);
    let digit2 = generateRandomNumberFromRange(0,9);
    let digit3 = generateRandomNumberFromRange(0,9);
    let digit4 = generateRandomNumberFromRange(0,9);
    let digit5 = generateRandomNumberFromRange(0,9);
    let digit6 = generateRandomNumberFromRange(0,9);
    let digit7 = generateRandomNumberFromRange(0,9);
    let digit8 = generateRandomNumberFromRange(0,9);
    let digit9 = generateRandomNumberFromRange(0,9);
    let digit10 = generateRandomNumberFromRange(0,9);

const generateRandomPhoneNumber = () => {

let generateRandomPhoneNumber = `1-${digit1}${digit2}${digit3}-${digit4}${digit5}${digit6}-${digit7}${digit8}${digit9}${digit10}`;
return generateRandomPhoneNumber;
}
console.log(generateRandomPhoneNumber());

 
/*
    @func generateRandomRGB
    @returns {string}
    @desc - generates a random rgb value
            HINT: you will need to use the 
                  generateRandomNumberFromRange 
                  function from above
    
    @example generateRandomRGB(); // "rgb(255, 123, 0)"
*/
function generateRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}
    let r = generateRandomNumberFromRange(0, 225);
    let b = generateRandomNumberFromRange(0, 225);
    let g = generateRandomNumberFromRange(0, 225);
 const generateRandomRGB = () => {
    let generateRandomRGB = `(${r}, ${b}, ${g})`;
    return generateRandomRGB;
 }
    console.log(generateRandomRGB());
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
function generateRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}
let group1 = generateRandomNumberFromRange(0, 9);
let group2 = generateRandomNumberFromRange(0, 15);
let group3 = generateRandomNumberFromRange(0, 30);

const generateLottoTicket = () => {
return `L ${group1} ${group2}-${group3}`;
}
console.log(generateLottoTicket());
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
function generateRandNumbemRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}
    let dig1 = generateRandNumbemRange(0,9);
    let dig2 = generateRandNumbemRange(0,9);
    let dig3 = generateRandNumbemRange(0,9);
    let dig4 = generateRandNumbemRange(0,9);
    let dig5 = generateRandNumbemRange(0,9);
    let dig6 = generateRandNumbemRange(0,9);
    let dig7 = generateRandNumbemRange(0,9);
    let dig8 = generateRandNumbemRange(0,9);
    let dig9 = generateRandNumbemRange(0,9);
    let dig10 = generateRandNumbemRange(0,9);


const generatePhoneNumberWithAreaCode = (areacode) => {
    return areacode = areacode ? "1-" + areacode +`-${dig4}${dig5}${dig6}-${dig7}${dig8}${dig9}${dig10}`: `1-${dig1}${dig2}${dig3}-${dig4}${dig5}${dig6}-${dig7}${dig8}${dig9}${dig10}`;
  }
console.log(generatePhoneNumberWithAreaCode());


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
function generateRandNumbemRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}
const generateTicketWithLetters = () => {
    let set1 =  generateRandNumbemRange(0,9);
    let set3 = String.fromCharCode(generateRandNumbemRange(65,90));
    let set2 = String.fromCharCode(generateRandNumbemRange(97,122));
    let set4 = generateRandNumbemRange(0,30);
return `L${set1} ${set2} ${set3}-${set4}`;
}
    console.log(generateTicketWithLetters());
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
const rockPaperScissors = (play1, play2) => {
    if (play1 === play2) {
        return 0;
    }
    else if (typeof play1 === 'undefined' || typeof play2 === 'undefined') {
        return (-1);
    }
    else if ((play1 === "rock" && play2 === "scissors") || (play1 === "paper" &&  play2 === "rock") || (play1 === "scissors" && play2 === "paper")){
        return 1;
    }
    else return 2;

}
console.log(rockPaperScissors("rock", "paper"));
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
function generateRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}
let choice = generateRandomNumberFromRange(1,3);
console.log(choice);
const computer = () => {
    if (choice === 1) {
        return "rock";
    }
    else if (choice === 2) {
        return "paper";
    }
    return "scissors";
}
computer();
const RPSwithComputer = (player1) => {
        let player2 = computer();
    if (player1 === player2) {
        return 0;
    }
    else if (typeof player1 === 'undefined' || typeof player2 === 'undefined') {
        return (-1);
    }
    else if ((player1 === "rock" && player2 === "scissors") || (player1 === "paper" &&  player2 === "rock") || (player1 === "scissors" && player2 === "paper")){
        return 1;
    }
    else return 2;
}
console.log(RPSwithComputer("rock"));
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
const calculateGrade = (number) => {
    if (number >= 90 && number <= 100) {
        return "A";
    }
    else if (number >= 80 && number <=89) {
        return "B";
    }
    else if (number >= 70 && number <=79) {
        return "C";
    }
    else if (number >= 60 && number <=69) {
        return "D";
    }
    else if (number >= 54 && number <=59) {
        return "F";
    }
    else if (typeof number !== 'number'){
        return 'please enter a number grade';
    }
    else return "Error";
}
console.log(calculateGrade());
/*
function calculateGrade( grade ) {
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
    
    
    if ( grade > 90 ) {
        return "A";
    }
   return "F"; // you may choose not to use this
*/
const calculateGrade1 = (grade) => {
    if (grade > 95 && grade <= 100) {
         grade = "A";
        return grade;
    }
    else if (grade > 85 && grade <= 95) {
        grade = "B";
        return grade;    }
    else if (grade > 75 && grade <=85) {
        grade = "C";
        return grade;    }
    else if (grade > 65 && grade <=75) {
        grade = "D";
        return grade;    }
    else if (grade >= 0 && grade <=65) {
        grade = "F";
        return grade;    }
    else if (typeof grade !== 'number'){
        return 'please enter a number grade';
    }
    else return "Error";
}
console.log(calculateGrade1());