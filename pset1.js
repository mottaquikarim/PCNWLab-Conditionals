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

const generateTrafficLight = (num=generateRandomNumberFromRange(1,3)) => {
    if (num === 1)
        return 'red';
    else if (num === 2)
        return 'green';
    else if (num === 3)
        return 'blue';
}
console.log("The light right now is " + generateTrafficLight());
console.log("");//New line for organization
/*
    @func generateRandomPhoneNumber
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
    @example generateRandomPhoneNumber(); // "1-718-786-2825"
*/
const generateRandomPhoneNumber = () => {
    num1 = generateRandomNumberFromRange(100,999);
    num2 = generateRandomNumberFromRange(1000,9999);
    return `1-718-${num1}-${num2}`;
}
console.log("My random phone number is " + generateRandomPhoneNumber());
console.log("");//New line for organization
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
    num1 = generateRandomNumberFromRange(0,255);
    num2 = generateRandomNumberFromRange(0,255);
    num3 = generateRandomNumberFromRange(0,255);
    return `rgb(${num1}, ${num2}, ${num3})`;
}
console.log("My favorite color is " + generateRandomRGB());
console.log("");//New line for organization
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
    num1 = generateRandomNumberFromRange(0,9);
    num2 = generateRandomNumberFromRange(0,15);
    num3 = generateRandomNumberFromRange(0,30);
    return `L ${num1} ${num2}-${num3}`;
}
console.log("My lotto ticket number is " + generateLottoTicket());
console.log("");//New line for organization
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
const generatePhoneNumberWithAreaCode = (num1 = generateRandomNumberFromRange(100,999)) => {
    let num2 = generateRandomNumberFromRange(100,999);
    let num3 = generateRandomNumberFromRange(1000,9999)
    num1 = generateRandomNumberFromRange(100,999);
    return `1-${num1}-${num2}-${num3}`
}
console.log("My random phone number area code 718 is " + generatePhoneNumberWithAreaCode(718))
console.log("");//New line for organization
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
    let num1 = generateRandomNumberFromRange(0,9);
    let num2 = String.fromCharCode(generateRandomNumberFromRange(97,122));
    let num3 = String.fromCharCode(generateRandomNumberFromRange(65,90));
    let num4 = generateRandomNumberFromRange(0,30);
    return `L ${num2} ${num3}-${num4}`
}
console.log("Random Num with Letters: " + generateTicketWithLetters());
console.log("");//New line for organization
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
const rockPaperScissors = (ans1, ans2) => {
    let p1 = ans1.toLowerCase();
    let p2 = ans2.toLowerCase();
    if ((p1 == 'rock' && p2 == 'scissor') || (p1 == 'scissor' && p2 == 'paper') || (p1 == 'paper' && p2 == 'rock')){
        return 2;
    }
    else if((p2 == 'rock' && p1 == 'scissor') || (p2 == 'scissor' && p1 == 'paper') || (p2 == 'paper' && p1 == 'rock')){
        return 1;
    }
    else if (p1==p2){
        return 0;
    }
    else{
        return -1;
    }
} 
console.log("Paper, ScIssor: " + rockPaperScissors("paper","ScIssor"))
console.log("rock, Scissor: " + rockPaperScissors("rock","Scissor"))
console.log("scissor, paper: " + rockPaperScissors("scissor","paper"))
console.log("d, asd: " + rockPaperScissors("d","asd"))
console.log("paper, paper: " + rockPaperScissors("paper","paper"))
console.log("");//New line for organization
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
const RPSwithComputer = (ans1, ans2) => {
    let p1 = ans1.toLowerCase();
    ans2 = generateRandomNumberFromRange(1,3); //1. Rock, 2.Paper, 3.Scissor
    let p2 = ans2;
    if ((p1 == 'rock' && p2 == 3) || (p1 == 'scissor' && p2 == 2) || (p1 == 'paper' && p2 == 1)){
        if(p2 == 1){
            console.log(`Computer picked: Rock`);
        }
        else if(p2 == 2){
            console.log(`Computer picked: Paper`);
        }
        else{
            console.log(`Computer picked: Scissor`);
        }
        return 2;
    }
    else if((p2 == 1 && p1 == 'scissor') || (p2 == 3 && p1 == 'paper') || (p2 == 2 && p1 == 'rock')){
        if(p2 == 1){
            console.log(`Computer picked: Rock`);
        }
        else if(p2 == 2){
            console.log(`Computer picked: Paper`);
        }
        else{
            console.log(`Computer picked: Scissor`);
        }
        return 1;
    }
    else if ((p1 == 'rock' && p2 == 1) || (p1 == 'scissor' && p2 == 3) || (p1 == 'paper' && p2 == 2)){
        if(p2 == 1){
            console.log(`Computer picked: Rock`);
        }
        else if(p2 == 2){
            console.log(`Computer picked: Paper`);
        }
        else{
            console.log(`Computer picked: Scissor`);
        }
        return 0;
    }
    else{
        if(p2 == 1){
            console.log(`Computer picked: Rock`);
        }
        else if(p2 == 2){
            console.log(`Computer picked: Paper`);
        }
        else{
            console.log(`Computer picked: Scissor`);
        }
        return -1;
    }
} 

console.log("I Choose Paper: " + RPSwithComputer('paper'));
console.log("I Choose Rock: " + RPSwithComputer('rock'));
console.log("I Choose Scissor: " + RPSwithComputer('scissor'));
console.log("");//New line for organization
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
    
    if ( grade >= 95 && grade < 101) {
        return "A";
    }
    else if ( grade >= 85 && grade < 95){
        return "B";
    }
    else if ( grade >= 75 && grade < 85){
        return "C";
    }
    else if ( grade > 65 && grade < 75){
        return "D";
    }
    else if ( grade <= 65){
        return "F";
    }
    else{
        return "Error";
    }
}
console.log("My grade is 84: " + calculateGrade(84));
console.log("My grade is apple: " + calculateGrade('apple'));
console.log("My grade is 42: " + calculateGrade(42));
console.log("My grade is 79: " + calculateGrade(79));
console.log("My grade is 203: " + calculateGrade(203));