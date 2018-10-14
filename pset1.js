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
function generateRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}

function generateTrafficLight(color){
    if (color === 1) {
        return 'red'
    } else if  (color === 2) {
        return 'green'
    } else return 'yellow'
    }
console.log(generateTrafficLight(generateRandomNumberFromRange(1,3)))
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
function randomNumber(){
    let secondNum = generateRandomNumberFromRange(0,9);
    let thirdNum = generateRandomNumberFromRange(0,9);
    let fourthNum = generateRandomNumberFromRange(0,9);
    let fifthNum = generateRandomNumberFromRange(0,9);
    let sixthNum = generateRandomNumberFromRange(0,9);
    let seventhNum = generateRandomNumberFromRange(0,9);
    let eigthNum = generateRandomNumberFromRange(0,9);
    let ninthNum = generateRandomNumberFromRange(0,9);
    let tenthNum = generateRandomNumberFromRange(0,9);
    let eleventhNum = generateRandomNumberFromRange(0,9);
    
    return `1-${secondNum}${thirdNum}${fourthNum}-${fifthNum}${sixthNum}${seventhNum}-${eigthNum}${ninthNum}${tenthNum}${eleventhNum}`
}
console.log(randomNumber());

/*
    @func generateRandomRGB
    @returns {string}
    @desc - generates a random rgb value
            HINT: you will need to use the 
                  generateRandomNumberFromRange 
                  function from above
    
    @example generateRandomRGB(); // "rgb(255, 123, 0)"
*/
function generateRandomRGB(){
    let r = generateRandomNumberFromRange(0,255);
    let g = generateRandomNumberFromRange(0,255);
    let b = generateRandomNumberFromRange(0,255);
    return `rgb(${r}, ${g}, ${b})`;
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
function generateLottoTicket(){
    let num1 = generateRandomNumberFromRange(0,9);
    let num2 = generateRandomNumberFromRange(0,15);
    let num3 = generateRandomNumberFromRange(0,30);
    return `L ${num1} ${num2} ${num3}`
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
function generateRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random; }

    
let randomCode = function() {
    let code1 = generateRandomNumberFromRange(0,9);
    let code2 = generateRandomNumberFromRange(0,9);
    let code3 = generateRandomNumberFromRange(0,9);
    return `${code1}${code2}${code3}`
}

function generatePhoneNumberWithAreaCode(areaCode = randomCode()){
    let num1 = 1;
    let num5 = generateRandomNumberFromRange(0,9);
    let num6 = generateRandomNumberFromRange(0,9);
    let num7 = generateRandomNumberFromRange(0,9);
    let num8 = generateRandomNumberFromRange(0,9);
    let num9 = generateRandomNumberFromRange(0,9);
    let num10 = generateRandomNumberFromRange(0,9);
    let num11 = generateRandomNumberFromRange(0,9);
    return `${num1}-${areaCode}-${num5}${num6}${num7}-${num8}${num9}${num10}${num11}`
}

console.log(generatePhoneNumberWithAreaCode())

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
function generateRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}
function generateTicketWithLetters(){
    let numRand = generateRandomNumberFromRange(0,9);
    let lowerL = String.fromCharCode(generateRandomNumberFromRange(65,90)).toLowerCase();
    let randomU = String.fromCharCode(generateRandomNumberFromRange(65,90));
    let numRand1 = generateRandomNumberFromRange(0,9);

    return `${numRand} ${lowerL} ${randomU}-${numRand1}`
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
    */
    
    if ( grade > 90 ) {
        return "A";
    }
   return "F"; // you may choose not to use this
} 
