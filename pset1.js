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
            if 3, return 'yellow'
            
    @example generateTrafficLight(); // 'red' or 'blue' or 'green'
*/
function generateTrafficLight(s, e){
    const random = s + Math.floor( Math.random() * (e-s+1));
    if (random === 1)
    return "red";
    if (random === 2)
    return 'green'
    if (random === 3)
    return 'yellow'
} 
console.log (generateTrafficLight(1 , 3));

//Better Version by Taq

const generateTrafficLight1 = () => {
    const light = generateRandomNumberFromRange(1,3);

    if (light === 1 ){
        return "red"
    }
    
    if (light === 2){
        return "green"
    }
    return "blue"
}

console.log(generateTrafficLight1());
/*
    @func generateRandomPhoneNumber
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
    @example generateRandomPhoneNumber(); // "1-718-786-2825"
*/
function generateRandomPhoneNumber() {
    const Num = Math.floor(Math.random() * 10)
    const Num1 = Math.floor(Math.random() * 10)
    const Num2 = Math.floor(Math.random() * 10)
    const Num3 = Math.floor(Math.random() * 10)
    const Num4 = Math.floor(Math.random() * 10)
    const Num5 = Math.floor(Math.random() * 10)
    const Num6 = Math.floor(Math.random() * 10)
    const Num7 = Math.floor(Math.random() * 10)
    const Num8 = Math.floor(Math.random() * 10)
    const Num9 = Math.floor(Math.random() * 10)
    return `1-${Num}${Num1}${Num2}-${Num3}${Num4}${Num5}-${Num6}${Num7}${Num8}${Num9}`
} 
console.log(generateRandomPhoneNumber());


//---------------------------------------------
//By. Arron T.
const generateRandomPhoneNumber1 = () => {
    //let phoneNum = `1-${generateRandomNumberFromRange(000, 999)}-${generateRandomNumberFromRange(000, 999)}-${generateRandomNumberFromRange(1000, 9999)}`;
    let phoneNum = "1-"
    let digits1 = generateRandomNumberFromRange(000, 999)
    let digits2 = generateRandomNumberFromRange(000, 999)
    let digits3 = generateRandomNumberFromRange(0000, 9999)

    if (digits1 < 10) {
        digits1 = "00" + digits1;
    } else if (digits1 < 100) {
        digits1 = "0" + digits1;
    };

    if (digits2 < 10) {
        digits2 = "00" + digits2;
    } else if (digits2 < 100) {
        digits2 = "0" + digits1;
    };

    if (digits3 < 10) {
        digits3 = "000" + digits3;
    } else if (digits3 < 100) {
        digits3 = "00" + digits3;
    } else if (digits3 < 1000) {
        digits3 = "0" + digits3;
    };

    return `${phoneNum}${digits1}-${digits2}-${digits3}`;
    //return phoneNum
};

console.log("Random Phone #:", generateRandomPhoneNumber1());
    
    



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
    let red = generateRandomNumberFromRange(0, 255) 
    let blue = generateRandomNumberFromRange(0, 255)
    let green = generateRandomNumberFromRange(0,255)

    if (red < 10){
        red = "00" + red;
    } else if (red < 100) {
        red = "0" + red;
    };

    if (blue < 10){
        blue = "00" + blue;
    } else if (blue < 100) {
        blue = "0" + blue;
    };

    if (green < 10){
        green = "00" + green;
    } else if (green < 100){
        green = "0" + green;
    }; 

    return `rgb(${red},${blue},${green})`

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

const generateLottoTicket = () => {
    let randomNum1 = generateRandomNumberFromRange(0, 9)
    let randomNum2 = generateRandomNumberFromRange(0, 15)
    let randomNum3 = generateRandomNumberFromRange(0, 30)
    return `L ${randomNum1} ${randomNum2}-${randomNum3}`
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


const generatePhoneNumberWithAreaCode = (areaCode) => {
    let randomPhoneNum1 = generateRandomNumberFromRange(0, 999)
    let randomPhoneNum2 = generateRandomNumberFromRange(0, 999)
    let randomPhoneNum3 = generateRandomNumberFromRange (0, 9999)

    if(areaCode === undefined){
        areaCode = randomPhoneNum1
    }

    if (randomPhoneNum1 < 10){
        randomPhoneNum1 = "00" + randomPhoneNum1
     } else if (randomPhoneNum1 < 100){
         randomPhoneNum1 = "0" + randomPhoneNum1 
     };
     
    if (randomPhoneNum2 < 10) {
        randomPhoneNum2 = "00" + randomPhoneNum2
    } else if (randomPhoneNum2 < 100) {
        randomPhoneNum2 = "0" + randomPhoneNum2
    };
    if (randomPhoneNum3 < 10) {
        randomPhoneNum3 = "00" + randomPhoneNum3
    } else if (randomPhoneNum3 < 100) {
        randomPhoneNum3 = "0" + randomPhoneNum3
    };


    return `1-${areaCode}-${randomPhoneNum2}-${randomPhoneNum3}`


}
console.log(generatePhoneNumberWithAreaCode(718));
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

    return ``
}

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

//function calculateGrade( grade ) {
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
    
//     if ( grade > 90 ) {
//         return "A";
//     }
//    return "F"; // you may choose not to use this
// } 

