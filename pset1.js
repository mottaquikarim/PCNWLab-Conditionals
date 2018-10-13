/*
function generateRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}
console.log(generateRandomNumberFromRange(2)); */

/*
    @func generateTrafficLight
    @returns {string}
    @desc - generates a random number from 1 to 3
            if 1, return 'red'
            if 2, return 'green',
            if 3, return 'blue'
            
    @example generateTrafficLight(); // 'red' or 'blue' or 'green'
*/
//function random012(){
  //  let value = Math.floor(Math.random()*3) + 1;
    //return value;

//}
const random012 = value => Math.floor(Math.random()*3) + 1;

function generateTrafficLight(  ){
    let color = '';
    let randomValue = random012();
    if(1 === randomValue){
        color = 'red';
    }
    if(2 === randomValue){
        color = 'green';
    }
    if(3 === randomValue){
        color = 'blue';
    }
   
    return color;
}
console.log(generateTrafficLight());
//console.log(random012());




/*
    @func generateRandomPhoneNumber
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
    @example generateRandomPhoneNumber(); // "1-718-786-2825"
*/
const generateRandomPhoneNumber = value => Math.floor(Math.random()* 10)  + "-" + Math.floor(Math.random()* 1000) + "-" + Math.floor(Math.random()* 1000)
+ "-" + Math.floor(Math.random()* 1000);

console.log(generateRandomPhoneNumber());



/*let phoneNumber = [12345678];
let newNum = 0;
for (let i = 0; i < phoneNumber.length; i++){
    if(phoneNumber[i]=== 0){
        
    }else{
        newNum += phoneNumber[i]
    }
    
    //return newNum;
}
console.log(newNum);
*/
/*
    @func generateRandomRGB
    @returns {string}
    @desc - generates a random rgb value
            HINT: you will need to use the 
                  generateRandomNumberFromRange 
                  function from above
    
    @example generateRandomRGB(); // "rgb(255, 123, 0)"
*/

  function generatesRandomRGB(){
    let r =  Math.floor(Math.random() * 256);
    let g =  Math.floor(Math.random() * 256);
    let b =  Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
   }
console.log(generatesRandomRGB());


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
    let rNum1 =  Math.floor(Math.random() * 9) + 1;
    let rNum2 =  Math.floor(Math.random() * 15) + 1;
    let rNum3 =  Math.floor(Math.random() * 30) + 1;
    return "L [" + rNum1 + " " + rNum2 + "-" + rNum3 + "]";
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

function generatesPhoneNumberWithAreaCode(){
    
    

}

const generateRandomPhoneNumber = value => Math.floor(Math.random()* 10)  + "-" + Math.floor(Math.random()* 1000) + "-" + Math.floor(Math.random()* 1000)
+ "-" + Math.floor(Math.random()* 1000);

console.log(generateRandomPhoneNumber());
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
let userChoice = 'scissor';
let computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
    return "The result is a tie!";
}
if(choice1 === "rock") {
    if(choice2 === "scissors") {
        return "rock wins";
    } else {
        return "paper wins";
    }
}
if(choice1 === "paper") {
    if(choice2 === "rock") {
        return "paper wins";
    } else {
        if(choice2 === "scissors") {
            return "scissors wins";
    }
}
if(choice1 === "scissors") {
    if(choice2 === "rock") {
        return "rock wins";
    } else {
        if(choice2 === "paper") {
            return "scissors wins";
        }
    }
}
}
};
console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
compare(userChoice, computerChoice);

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
   function calculateGrade( grade ) {
    if ( grade >96 && grade <=100  ) {
        return "A";
    }else if (grade >=95 && grade >=86){
        return "B";
    } else if(grade >=85 && grade >=75){
        return "C";
    }else if (grade >=75 && grade >=65){
        return "D"; 
    } else {
        return "F";
    }   
} 
console.log(calculateGrade(87));