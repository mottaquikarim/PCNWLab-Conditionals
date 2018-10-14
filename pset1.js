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

const redLightGreenLight = () => {
    random = generateRandomNumberFromRange(1,3)
    if (random === 1) {
        return "green"
    } else if (random === 2) {
        return "yellow"
    } else {
        return "red"
    }
}

console.log(redLightGreenLight())

/*
    @func generateRandomPhoneNumber
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
    @example generateRandomPhoneNumber(); // "1-718-786-2825"
*/

const phoneNum = () => {
    let number1 =generateRandomNumberFromRange(0,9)
    let number2 =generateRandomNumberFromRange(0,9)
    let number3 =generateRandomNumberFromRange(0,9)
    let number4 =generateRandomNumberFromRange(0,9)
    let number5 =generateRandomNumberFromRange(0,9)
    let number6 =generateRandomNumberFromRange(0,9)
    let number7 =generateRandomNumberFromRange(0,9)
    let number8 =generateRandomNumberFromRange(0,9)
    let number9 =generateRandomNumberFromRange(0,9)
    let number10 =generateRandomNumberFromRange(0,9)
    phone2 = `${1}-${number1}${number2}${number3}-${number4}${number5}${number6}-${number7}${number8}${number9}${number10}`
    return phone2;
}

console.log(phoneNum())

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
    red =  generateRandomNumberFromRange(0,255)
    green = generateRandomNumberFromRange(0,255)
    blue =  generateRandomNumberFromRange(0,255)
    return `rgb(${red}, ${green}, ${blue})`
    }
    console.log(generateRandomRGB())

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
    firstNum = generateRandomNumberFromRange(0,9)
    secondNum = generateRandomNumberFromRange(0,15)
    thirdNum = generateRandomNumberFromRange(0,30)
    return `L ${firstNum} ${secondNum} ${thirdNum}`
}

console.log(generateLottoTicket())

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

const phoneNum3 = (areaCode) => {
    
    let number4 =generateRandomNumberFromRange(0,9)
    let number5 =generateRandomNumberFromRange(0,9)
    let number6 =generateRandomNumberFromRange(0,9)
    let number7 =generateRandomNumberFromRange(0,9)
    let number8 =generateRandomNumberFromRange(0,9)
    let number9 =generateRandomNumberFromRange(0,9)
    let number10 =generateRandomNumberFromRange(0,9)
    let first3 = `${generateRandomNumberFromRange(0,9)}${generateRandomNumberFromRange(0,9)}${generateRandomNumberFromRange(0,9)}`
    if (areaCode) {
        return `1-${areaCode}-${number4}${number5}${number6}-${number7}${number8}${number9}${number10}`;
    }
    return `1-${first3}-${number4}${number5}${number6}-${number7}${number8}${number9}${number10}`;
    
}

console.log(phoneNum3())
console.log(phoneNum3(212))

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

// A:65, Z:90
const generateTicketWithLetters = () => `${String.fromCharCode(generateRandomNumberFromRange(65, 90))} ${(String.fromCharCode(generateRandomNumberFromRange(65, 90)).toLowerCase())} ${String.fromCharCode(generateRandomNumberFromRange(65, 90))}-${generateRandomNumberFromRange(0, 30)}`

console.log(generateTicketWithLetters())

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

const rps = (player1, player2) => {
    if (player1 === "rock" && player2 === "scissors"){
        return 1
    } else if (player1 === "paper" && player2 === "rock") {
        return 1
    } else if (player1 === "scissors" && player2 === "paper") {
        return 1
    } else if (player1 === "rock" && player2 === "paper") {
        return 2
    } else if (player1 === "paper" && player2 === "scissors") {
        return 2
    } else if (player1 === "scissors" && player2 === "rock") {
        return 2
    } else if (player1 === player2){
        return 0
    } else {
        return -1
    }
}

console.log(rps("rock", "paper"))
console.log(rps("paper", "paper"))



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

const RPSwithComputer = (player) => {
   let computer = generateRandomNumberFromRange(1, 3)
   if (computer === 1) {
       computer = "rock"
   } else if (computer === 2) {
       computer = "paper"
   } else if (computer === 3) {
       computer = "scissors"
   }
   if (computer === "rock" && player === "scissors"){
    return `${1} computer played rock`
} else if (computer === "paper" && player === "rock") {
    return `${1} computer played paper`
} else if (computer === "scissors" && player === "paper") {
    return `${1} computer played scissors`
} else if (computer === "rock" && player === "paper") {
    return `${2} computer played rock`
} else if (computer === "paper" && player === "scissors") {
    return `${2} computer played paper`
} else if (computer === "scissors" && player === "rock") {
    return `${2} computer played scissors`
} else if (computer === player){
    return `${0} computer played ${player}`
} else {
    return -1
}
}

console.log(RPSwithComputer("rock"))


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

function calculateGrade(grade) {
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
    
    if ( grade <= 100 && grade > 95 ) {
        return "A";
    } else if (grade <= 95 && grade > 85) {
        return "B"
    } else if (grade <= 85 && grade > 75) {
        return "C"
    } else if (grade <= 75 && grade > 65) {
        return "D"
    } else if (grade <= 65 && grade > 0) {
        return "Ain't no F's just try again"; // you may choose not to use this
    } else {
        throw new Error ("Not an acceptable value")
    }
} 

console.log(calculateGrade(67));
console.log(calculateGrade(55));