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

const generateTrafficLight = function() {
    let trafficNum = generateRandomNumberFromRange(1, 3)
    if (trafficNum === 1) {
        return 'red';
    } else if (trafficNum === 2) {
        return 'green';
    } else {
        return 'blue';
    }
}
console.log(generateTrafficLight());

/*
    @func generateRandomPhoneNumber
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
    @example generateRandomPhoneNumber(); // "1-718-786-2825"
*/

const generateRandomPhoneNumber = function() {
    let number = [];
    let rand;
    for (i = 1; i <= 10; i++) {
        rand = generateRandomNumberFromRange(0,9);
        number.push(rand);
}
    number.splice(3, 0, "-");
    number.splice(7, 0, "-");
    return `1-${number.join("")}`;
}
console.log(generateRandomPhoneNumber());


const generateRandomPhoneNumber_2 = function() {
    let number = [];
    let rand;
    for (i = 1; i <= 10; i++) {
        if (i != 4 && i != 7){
            rand = generateRandomNumberFromRange(0,9);
            number.push(rand);
        } else {
            rand = generateRandomNumberFromRange(0,9);
            number.push("-", rand);
        }
    }
    return `1-${number.join("")}`
    //return number
    //return `1-${number[0]}${number[2]}${number[3]}-${n4}${n5}${n6}-${n7}${n8}${n9}${n10}`
}
console.log(generateRandomPhoneNumber_2());


const generateRandomPhoneNumber_3 = function() {
    let prefix = generateRandomNumberFromRange(0,999);
    let firstHalf = generateRandomNumberFromRange(0,999);
    let secondHalf = generateRandomNumberFromRange(0,9999);

    function threeNums(number) {
        if (number < 100 && number > 9) {
            return "0" + number;
        } else if (number < 10) {
            return "00" + number;
        } else {
            return number;
        }
    }

    function fourNums(number) {
        if (number < 1000 && number > 99) {
            return "0" + number;
        } else if (number < 100 && number > 9) {
            return "00" + number;
        } else if (number < 10) {
            return "000" + number;
        } else {
            return number;
        }
    }

    prefix = threeNums(prefix);
    firstHalf = threeNums(firstHalf);
    secondHalf = fourNums(secondHalf);
    
    return `1-${prefix}-${firstHalf}-${secondHalf}`;
}
console.log(generateRandomPhoneNumber_3());

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
    let list = [];
    let rand;
    for (i = 1; i < 4; i++) {
        rand = generateRandomNumberFromRange(0,255);
        list.push(rand);
        //console.log(list)
    }
    return `rgb(${list[0]}, ${list[1]}, ${list[2]})`
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
    let firstNum = generateRandomNumberFromRange(0,9);
    let secondNum = generateRandomNumberFromRange(0,15);
    let thirdNum = generateRandomNumberFromRange(0,30);

    return `L ${firstNum} ${secondNum}-${thirdNum}`;
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

const generatePhoneNumberWithAreaCode = (areaCode = 718) => {
    let number = [];
    let rand;
    for (i = 1; i <= 7; i++) {
        if (i != 4){
            rand = generateRandomNumberFromRange(0,9);
            number.push(rand);
        } else {
            rand = generateRandomNumberFromRange(0,9);
            number.push("-", rand);
        }
    }
    return `1-${areaCode}-${number.join("")}`
}
console.log(generatePhoneNumberWithAreaCode());
console.log(generatePhoneNumberWithAreaCode(646));

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
    let randNum9 = generateRandomNumberFromRange(0,9);
    let randLower = String.fromCharCode(generateRandomNumberFromRange(97,122));
    let randUpper = String.fromCharCode(generateRandomNumberFromRange(65,90));
    let randNum30 = generateRandomNumberFromRange(0,30);

    return `L ${randLower} ${randUpper}-${randNum30}`
}
console.log(generateTicketWithLetters());
console.log(String.fromCharCode(60));

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

const rockPaperScissors = function(player1, player2) {
    console.log('### NEW GAME ###')
    console.log('player1 is...', player1);
    console.log('player2 is...', player2);
    let options = ['rock', 'paper', 'scissors'];
    if (options.includes(player1) && options.includes(player2)) {
        console.log('oh hai')
        if (player1 === player2) {
            return 0 + " ...It's a tie.";
        } else if (player1 === 'rock'){
            if (player2 === 'scissors'){
                return 1;
            } else if (player2 === 'paper') {
                return 2;
            }
        } else if (player1 === 'paper') {
            if (player2 === 'rock') {
                return 1;
            } else if (player2 === 'scissors') {
                return 2;
            }
        } else if (player1 === 'scissors') {
            if (player2 === 'paper') {
                return 1;
            } else if (player2 === 'rock') {
                return 2;
            }
        }
    } else {
        return -1;
    }
    
}

const computerRPS = () => {
    let rand = generateRandomNumberFromRange(1,3);
    if (rand === 1) {
        return 'rock';
    } else if (rand === 2) {
        return 'paper';
    } else if (rand === 3) {
        return 'scissors';
    }
}

console.log(rockPaperScissors('rock', 'rock'));
console.log(rockPaperScissors('paper', 'rock'));
console.log(rockPaperScissors('scissors', 'rock'));
console.log('##########################');
console.log(rockPaperScissors('blah', 'paper'));
console.log(rockPaperScissors('paper', 'blah'));
console.log(rockPaperScissors('scissors', computerRPS()));
console.log(computerRPS());

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

// ########## SEE ABOVE ##########

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
   let gradeStr = 'Your grade is ... '
   if (grade <= 100 && grade >= 95) {
        return gradeStr + 'A';
    } else if (grade <= 95 && grade >= 85) {
       return gradeStr + 'B';
    } else if (grade <= 85 && grade >= 75) {
       return gradeStr + 'C';
    } else if (grade <= 75 && grade >= 65) {
        return gradeStr + 'D';
    } else if (grade <= 65 && grade >= 0) {
       return gradeStr + 'F';
    }
}

console.log(calculateGrade(80));
console.log(calculateGrade(generateRandomNumberFromRange(0,100)));