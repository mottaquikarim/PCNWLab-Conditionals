function generateRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}

/*  Problem 1:
    @func generateTrafficLight
    @returns {string}
    @desc - generates a random number from 1 to 3
            if 1, return 'red'
            if 2, return 'green',
            if 3, return 'blue'
            
    @example generateTrafficLight(); // 'red' or 'blue' or 'green'
*/

// SOLUTION:
// const generateTrafficLight = (a,b) => {
//     const random = a + Math.floor( Math.random() * (b-a+1) );
//     if (random === 1){
//         return 'red'
//     }else if (random === 2){
//         return 'green'
//     } else if (random === 3){
//         return "blue"}
// }

// console.log(generateTrafficLight2(1,3))

//SHORTER WAY:
// const generateTrafficLight2 = () => {
//     let color = generateRandomNumberFromRange(1,3);

//     if (color === 1){
//         return 'red'
//     }else if (color === 2){
//         return 'green'
//     } else if (color === 3){
//         return "blue"}
    
// }

// console.log(generateTrafficLight2())



/*  Problem 2:
    @func generateRandomPhoneNumber
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
    @example generateRandomPhoneNumber(); // "1-718-786-2825"
*/

//SOLUTION:
//LONG WAY:
// const generateRandomPhoneNumber = () => {

//     const  randomePhoneNumber1 = Math.floor(Math.random() * (999 - 100) + 100 )
//     const  randomePhoneNumber2 = Math.floor(Math.random() * (999 - 100) + 100 )
//     const  randomePhoneNumber3 = Math.floor(Math.random() * (9999 - 1000) + 1000 )

//     return `1 - ${randomePhoneNumber1} - ${randomePhoneNumber2} - ${randomePhoneNumber3}`;   
// }

// console.log(generateRandomPhoneNumber())

//SHORTER WAY:
// const generateRandomPhoneNumber2 = () => {
//     return `1-${generateRandomNumberFromRange(100,999)}-${generateRandomNumberFromRange(100,999)}-${generateRandomNumberFromRange(1000,9999)}`;
// }

// console.log(generateRandomPhoneNumber2());


/*  Problem 3:
    @func generateRandomRGB
    @returns {string}
    @desc - generates a random rgb value
            HINT: you will need to use the 
                  generateRandomNumberFromRange 
                  function from above
    
    @example generateRandomRGB(); // "rgb(255, 123, 0)"
*/

// SOLUTION:
// const generateRandomRGB = () => {

//     return `rgb(${generateRandomNumberFromRange(0,255)},${generateRandomNumberFromRange(0,255)},${generateRandomNumberFromRange(0,255)})`
// }
// console.log(generateRandomRGB())

/*  Problem 4:
    @func generateLottoTicket
    @returns {string}
    @desc - generates a random lotto ticket with:
            A random number 0-9
            A random number 0-15
            A random number 0-30
            
            Present it as such: L [0-9] [0-15]-[0-30]
    
    @example generateLottoTicket(); // L 9 11-28
*/

//SOLUTION:
//LONG WAY:
// const generateLottoTicket = () => {

//     return `L${generateRandomNumberFromRange(0,9)} ${generateRandomNumberFromRange(0,15)}-${generateRandomNumberFromRange(0,30)}`;
// }

// console.log(generateLottoTicket());

// //SHORT WAY:
// const generateLottoTicket2 = () =>  `L${generateRandomNumberFromRange(0,9)} ${generateRandomNumberFromRange(0,15)}-${generateRandomNumberFromRange(0,30)}`;
// console.log(generateLottoTicket());


/*  Problem 5:
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

//SOLUTION:
// const generatePhoneNumberWithAreaCode = (areaCode = generateRandomNumberFromRange(0,999)) => {
    
//     return `${areaCode}-${generateRandomNumberFromRange(100,999)}-${generateRandomNumberFromRange(100,999)}-${generateRandomNumberFromRange(1000,9999)}`;
// }

// console.log(generatePhoneNumberWithAreaCode(100))


/*  Problem 6:
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

//SOLUTION:
const generateTicketWithLetters = () => {
    let randomNumber = generateRandomNumberFromRange();
    let randomLetterUpperCase = String.fromCharCode(generateRandomNumberFromRange(65,90));
    let randomLetterLowerCase = String.fromCharCode(generateRandomNumberFromRange(65,90)).toLowerCase()
    
    return `L [${randomLetterLowerCase}] [${randomLetterUpperCase}]-[${randomLetterUpperCase}]`
}

console.log(generateTicketWithLetters());

console.log(String.fromCharCode(65,66,90).toLowerCase());

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

//SOLUTION:
const rockPaperScissors = (player1, player2) => {
        console.log ('Rock! Paper! Scissors! SHOO!')

        if (player1 === 'rock'){
            return 'player1 won'
        } else if (player1 === 'paper'){
            return ''
        } else if (player1 === 'scissors')

    return (number)
}

console.log(rockPaperScissors());

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
