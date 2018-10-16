
function generateRandomNumberFromRange( s, e, ) {
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

// const generateTrafficLight = () => {

 // **** Note use const to ensure your function does not crash if you use 1 = ****
//   let random = generateRandomNumberFromRange( 1, 3 )

//   if (random === 1) {

//     return 'red' 

//   } else if (random === 2) {

//     return 'blue'

//   } else if (random === 3) {

//   return 'green'

//   }

// }
//////////////////////////////////////////////////////

// const generateTrafficLight = () => {

 // **** Note use const to ensure your function does not crash if you use 1 = ****
//   let random = generateRandomNumberFromRange( 1, 3 )

//   if (random === 1) {

//     return 'red' 

//   } else if (random === 2) {

//     return 'blue'

//   } else if (random === 3) {

//   return 'green'

//   }

// }

// console.log(generateTrafficLight(2));

/*
    @func generateRandomPhoneNumber
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
    @example generateRandomPhoneNumber(); // "1-718-786-2825"
*/
// function generateRandomPhoneNumber() {
//     let number = generateRandomNumberFromRange(1 , 9)
//     return `${1} - ${number}${number}${number} - ${number}${number}${number} - ${number}${number}${number}${number}`
// }
// console.log(generateRandomPhoneNumber());

// const generateRandomPhoneNumber = () => {
//     const p1 = generateRandomNumberFromRange(100, 999);
//     const p2 = generateRandomNumberFromRange(100, 999);
//     const p3 = generateRandomNumberFromRange(1000, 9999);
// return `1-${p1}-${p2}-${p3}`
// }

// console.log(generateRandomPhoneNumber())
// -----------------------------------------------------------------------------------------------------------------

/*
    @func generateRandomRGB
    @returns {string}
    @desc - generates a random rgb value
            HINT: you will need to use the 
                  generateRandomNumberFromRange 
                  function from above
    
    @example generateRandomRGB(); // "rgb(255, 123, 0)"
*/

// const generateRandomRGB = () => {
//    let r = generateRandomNumberFromRange(1, 255);
//    const g = generateRandomNumberFromRange(1, 123);
//    let b = generateRandomNumberFromRange(1, 9);
//     return `rgb  ${r},  ${g} , ${b}`
// }

// console.log(generateRandomRGB());

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

// function generateLottoTicket() {
//     let A = generateRandomNumberFromRange( 0, 9 );
//     let B = generateRandomNumberFromRange( 0, 15 );
//     let C = generateRandomNumberFromRange( 0, 30 );

//     return `${A} ${B}-${C}`
// }

// console.log(generateLottoTicket())

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

// let dig1 = generateRandomNumberFromRange( 1, 9 );
// let dig2 = generateRandomNumberFromRange( 1, 9 );
// let dig3 = generateRandomNumberFromRange( 1, 9 );
// let dig4 = generateRandomNumberFromRange( 1, 9 );
// let dig5 = generateRandomNumberFromRange( 1, 9 );
// let dig6 = generateRandomNumberFromRange( 1, 9 );
// let dig7 = generateRandomNumberFromRange( 1, 9 );
// let dig8 = generateRandomNumberFromRange( 1, 9 );
// let dig9 = generateRandomNumberFromRange( 1, 9 );
// let dig10 = generateRandomNumberFromRange( 1, 9 );


// function generatePhoneNumberWithAreaCode(areaCode = `${dig1}${dig2}${dig3} -`) {
//     if (areaCode === areaCode) {
//     return `${areaCode} ${dig4}${dig5}${dig6} - ${dig7}${dig8}${dig9}${dig10}`
//      } else { 
//         return  `${dig4}${dig5}${dig6} - ${dig7}${dig8}${dig9}${dig10}`
//     }
// }

// console.log(generatePhoneNumberWithAreaCode());


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

// const generateTicketWithLetters = () => {
// let A = generateRandomNumberFromRange(0, 9);
// let B = String.fromCharCode(generateRandomNumberFromRange( 97, 122));
// let C = String.fromCharCode(generateRandomNumberFromRange( 65, 90));
// let D = generateRandomNumberFromRange(0, 30);
// return `${A} ${B} ${C}-${D}`
// }

// console.log(generateTicketWithLetters());

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



// const rockPaperScissors = function(player1, player2) {
//     // player1 wins
//     if (player1 === 'rock' && player2 === 'scissors') {
//     return  1 + '; ' + player1 + ' ' + 'wins';
//     } else if (player1 === 'paper' && player2 === 'rock') { 
//         return 1 + '; ' + player1 + ' ' + 'wins';
//             } else if  (player1 === 'scissors' && player2 === 'paper') {
//                 return 1 + '; ' + player1 + ' ' + 'wins';
//                 // player 2 wins
//     } else if (player1 === 'scissors' && player2 === 'rock') {
//          return  2 + '; ' + player2 + ' ' + 'wins';
//         } else if (player1 === 'rock' && player2 === 'paper') { 
//             return 2 + '; ' + player2 + ' ' + 'wins';
//             } else if  (player1 === 'paper' && player2 === 'scissors') {
//                 return 2 + '; ' + player2 + ' ' + 'wins';
//                 // ties
//     } else if (player1 === 'scissors' && player2 === 'scissors') {
//         return  'tie';
//         } else if (player1 === 'rock' && player2 === 'rock') { 
//             return 'tie';
//             } else if  (player1 === 'paper' && player2 === 'paper') {
//                  return 'tie';
//                  // incorrect output
//     } else if (player1 === 's' && player2 === 'r') {
//         return  (- 1);
//          } else if (player1 === 'r' && player2 === 'p') { 
//             return (- 1);
//              } else if  (player1 === 'p' && player2 === 's') {
//                  return (- 1);
//              } else 
//              return ( - 1);
// } 


// console.log(rockPaperScissors());


// ------------------second example rps ---------------------------


// const rockPaperScissors = function(player1, player2) {
//         // player1 wins
//         if (player1 === 'rock' && player2 === 'scissors' 
//         || player1 === 'paper' && player2 === 'rock'  
//         || player1 === 'scissors' && player2 === 'paper') {
//                     return 1 + '; ' + player1 + ' ' + 'wins';
//             // player 2 wins
//         } else if (player1 === 'scissors' && player2 === 'rock' 
//         || player1 === 'rock' && player2 === 'paper'
//         || player1 === 'paper' && player2 === 'scissors') {
//                     return 2 + '; ' + player2 + ' ' + 'wins';
//                     // ties
//         } else if (player1 === 'scissors' && player2 === 'scissors'
//         || player1 === 'rock' && player2 === 'rock'     
//         || player1 === 'paper' && player2 === 'paper') {
//         return 0 + '; ' + 'tie' 
//                      // incorrect output
//         } else if (player1 === 's' && player2 === 'r'
//         || player1 === 'r' && player2 === 'p' 
//         || player1 === 'p' && player2 === 's') {
//                      return (- 1);
//                  } else 
//                  return ( - 1);
//     } 

//   console.log(rockPaperScissors( "rock", "paper" )); // 2
//   console.log(rockPaperScissors( "rock", "scissors")); // 1
//   console.log(rockPaperScissors( "rock", "rock" )); // 0
//   console.log(rockPaperScissors( "r", "p" )); // -1
//   console.log(rockPaperScissors( "r" )); // -1
//   console.log(rockPaperScissors()); // -1


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
// //--------------------computer-----------------


// const RPSwithComputer = () => {
//     let randnum = generateRandomNumberFromRange(1, 3);
//     if (randnum === 1) {
//          return 'rock'
//     } else if (randnum === 2){
//         return 'paper'
//     } else if (randnum === 3){
//         return  'scissor'
//     }    
// }

// console.log(RPSwithComputer())

// // ----------------players result---------------------------------

// const rockPaperScissors = function(player1) {
//     // player1 wins
//     const player2 = RPSwithComputer()
//     if (player1 === 'rock' && player2 === 'scissors' 
//     || player1 === 'paper' && player2 === 'rock'  
//     || player1 === 'scissors' && player2 === 'paper') {
//                 return 1 + '; ' + player2 + ' ' + 'wins';
//         // player 2 wins
//     } else if (player1 === 'scissors' && player2 === 'rock' 
//     || player1 === 'rock' && player2 === 'paper'
//     || player1 === 'paper' && player2 === 'scissors') {
//                 return 2 + '; ' + player2 + ' ' + 'wins';
//                 // ties
//     } else if (player1 === 'scissors' && player2 === 'scissors'
//     || player1 === 'rock' && player2 === 'rock'     
//     || player1 === 'paper' && player2 === 'paper') {
//     return 0 + '; ' + player2 + ' ' + 'tie' 
//                  // incorrect output
//     } else if (player1 === 's' && player2 === 'r'
//     || player1 === 'r' && player2 === 'p' 
//     || player1 === 'p' && player2 === 's') {
//                  return (- 1);
//             // } else 
//            //  return ( - 1);
//     }
// }

//   console.log(rockPaperScissors( "rock")); 
//   console.log(rockPaperScissors( "rock")); 
//   console.log(rockPaperScissors( "scissors"));
//   console.log(rockPaperScissors( 'paper')); 
//   console.log(rockPaperScissors( "paper" ));
//   console.log(rockPaperScissors()); 
//--------------------------------- why am i getting (-1) as a return -------------------------//

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
