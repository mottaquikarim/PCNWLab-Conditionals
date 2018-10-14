function generateRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}
console.log(generateRandomNumberFromRange(1, 3));

/*
    @func generateTrafficLight
    @returns {string}
    @desc - generates a random number from 1 to 3
            if 1, return 'red'
            if 2, return 'green',
            if 3, return 'blue'
            
    @example generateTrafficLight(); // 'red' or 'blue' or 'green'
*/

const generateTrafficLight = (randonNum) => {
    //let randonNum = generateRandomNumberFromRange(1,3)
     if (randonNum === 1){
         return 'red'
     }
     else if (randonNum === 2){
         return 'green'
     }
         return 'blue'
    }
  
console.log(generateTrafficLight(generateRandomNumberFromRange(1,3)));

/*
    @func generateRandomPhoneNumber
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
    @example generateRandomPhoneNumber(); // "1-718-786-2825"
*/
const generateRandomPhoneNumber = () => `1-${generateRandomNumberFromRange(100,999)}-${generateRandomNumberFromRange(100,999)}-${generateRandomNumberFromRange(1000,9999)}`

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

const generateRandomRGB =() => `rgb(${generateRandomNumberFromRange(0,255)}, ${generateRandomNumberFromRange(0,255)},${generateRandomNumberFromRange(0,255)})`


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
const generateLottoTicket = () => `L [${generateRandomNumberFromRange(0,9)}][${generateRandomNumberFromRange(0,15)}][${generateRandomNumberFromRange(0,30)}]`
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
const generatePhoneNumberWithAreaCode = (areaCode= generateRandomNumberFromRange(100,999)) => {

    return `1-${areaCode}-${generateRandomNumberFromRange(100,999)}-${generateRandomNumberFromRange(1000,9999)}`

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
const generateTicketWithLetters = () =>{

    return `L [${String.fromCharCode(generateRandomNumberFromRange(97,122))}] [${String.fromCharCode(generateRandomNumberFromRange(65, 90))}] [${generateRandomNumberFromRange(0,30)}]`
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


 function rockPaperScissors1 (player1, player2){
     if (player1 === 'rock'){
         if (player2 ==='scissor') return 1
         else if (player2 === 'paper') return 2
         else return 0
     }
     if (player1 === 'scissor') {
         if (player2 === 'paper') return 1
         else if (player2 === 'rock') return 2
         else return 0
    }   
     if (player1 === 'paper'){
         if (player2 ==='rock') return 1
         else if (player2 ==='scissor')return 2
         else return 0
    }
    else return -1
}
console.log(rockPaperScissors1('rock', 'paper'));
console.log(rockPaperScissors1('rock', 'rock'));
console.log(rockPaperScissors1('paper','scissor'));
console.log(rockPaperScissors1('r', 'p'));


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
function RPSwithComputer (player1, player2) {
    console.log(player2)

    if (player2 === 1) {    //assign this to rock
        if (player1 === 'paper') return 1
        else if (player1 === 'scissor') return 2
        else return 0
    }
    if (player2 === 2){ //assign this to paper
        if (player1 === 'rock') return 0
        else if (player1 === 'scissor') return 1
        else return 2
    }
    if (player2 === 3) { //assign this to scissor
        if (player1 === 'rock') return 1
        else if (player1 === 'paper') return 2
        else return 0
    }

    else return -1
}
       
console.log(RPSwithComputer('paper',generateRandomNumberFromRange(1,3)));



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
    if ( 100 >= grade && grade >= 95) return "A"
    if ( 94 >= grade && grade >= 85)  return "B"
    if ( 84 >= grade && grade >= 75)  return "C"
    if ( 74 >= grade && grade >= 65)  return "D"     
    if ( 64 >= grade && grade >=0)    return "F"
        
    return "ERROR"

    }

    console.log(calculateGrade( 95 )); // A
    console.log(calculateGrade( 80 )); // C
    console.log(calculateGrade( 70 )); // D
    console.log(calculateGrade(30)); //F
    console.log(calculateGrade(-10)); //ERROR
  

  
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
