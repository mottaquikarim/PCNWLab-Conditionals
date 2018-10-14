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
const generateTrafficLight = randomNum => {
    randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) return "red";
    if (randomNum === 2) return "green";
    if (randomNum === 3) return "blue";
}

//test
console.log(generateTrafficLight());
console.log(generateTrafficLight());
console.log(generateTrafficLight());

/*
    @func generateRandomPhoneNumber
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
    @example generateRandomPhoneNumber(); // "1-718-786-2825"
*/
const generateRandomPhoneNumber = noInput => {
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    let c = Math.floor(Math.random() * 10);
    let d = Math.floor(Math.random() * 10);
    let e = Math.floor(Math.random() * 10);
    let f = Math.floor(Math.random() * 10);
    let g = Math.floor(Math.random() * 10);
    let h = Math.floor(Math.random() * 10);
    let i = Math.floor(Math.random() * 10);
    let j = Math.floor(Math.random() * 10);
    return `1-${a}${b}${c}-${d}${e}${f}-${g}${h}${i}${j}`;
}

//test
console.log(generateRandomPhoneNumber());
console.log(generateRandomPhoneNumber());
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
const generateRandomRGB = noInput => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

//test
console.log(generateRandomRGB());
console.log(generateRandomRGB());
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
const generateLottoTicket = noInput => {
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 16);
    let c = Math.floor(Math.random() * 31);
    return `L ${a} ${b}-${c}`;
}

//test
console.log(generateLottoTicket());
console.log(generateLottoTicket());
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

const generatePhoneNumberWithAreaCode = areaCode => {
    areaCode = typeof areaCode === 'number' ? areaCode : 718;
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    let c = Math.floor(Math.random() * 10);
    let d = Math.floor(Math.random() * 10);
    let e = Math.floor(Math.random() * 10);
    let f = Math.floor(Math.random() * 10);
    let g = Math.floor(Math.random() * 10);
    return `1-${areaCode}-${a}${b}${c}-${d}${e}${f}${g}`;
}

//test
console.log(generatePhoneNumberWithAreaCode(), "1-718-xxx-xxxx");
console.log(generatePhoneNumberWithAreaCode("haha"), "1-718-xxx-xxxx"); 
console.log(generatePhoneNumberWithAreaCode(646), "1-646-xxx-xxxx");
console.log(generatePhoneNumberWithAreaCode(212), "1-212-xxx-xxxx");

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

const generateTicketWithLetters = nada => {
    const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowABC = ABC.toLowerCase();

    let num1 = Math.floor(Math.random() * 26);
    let num2 = Math.floor(Math.random() * 26);

    let lowerLetter = lowABC[num1];
    let upperLetter = ABC[num2];

    let num3 = Math.floor(Math.random() * 31);
    return `L ${lowerLetter} ${upperLetter}-${num3}`;
}

//test
console.log(generateTicketWithLetters(), "L [a-z] [A-Z]-[0-30]");
console.log(generateTicketWithLetters(), "L [a-z] [A-Z]-[0-30]");
console.log(generateTicketWithLetters(), "L [a-z] [A-Z]-[0-30]");

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
