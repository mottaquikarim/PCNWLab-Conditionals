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
const generateTrafficLight = () => { 
    let light = generateRandomNumberFromRange(1,3);
    if (light === 1)
    {
        return 'red';
    } else if (light === 2) {
        return 'green';
    }
    else if (light === 3) {
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
const generateRandomPhoneNumber = () => {
    let phonenumber = `${generateRandomNumberFromRange(1,1)}-${generateRandomNumberFromRange(000,999)}-${generateRandomNumberFromRange(000,999)}-${generateRandomNumberFromRange(0000,9999)}`;
    return phonenumber;
}
console.log(generateRandomPhoneNumber());

/*
    @func generateRandomRGB
    @returns
     {string}
    @desc - generates a random rgb value
            HINT: you will need to use the 
                  generateRandomNumberFromRange function from above
     @example generateRandomRGB(); // "rgb(255, 123, 0)"
*/
const generateRandomRGB = () => {
    return `rgb(${generateRandomNumberFromRange(0,255)},${generateRandomNumberFromRange(0,255)},${generateRandomNumberFromRange(0,255)})`;

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
    return `L [${generateRandomNumberFromRange(0,9)}] [${generateRandomNumberFromRange(0,15)}]-[${generateRandomNumberFromRange(0,30)}]`
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
const generatePhoneNumberWithAreaCode = (areacode) => {
if (typeof areacode === 'undefined') {
    let phonenumber = `${generateRandomNumberFromRange(100 ,999)}-${generateRandomNumberFromRange(000,999)}-${generateRandomNumberFromRange(000,999)}-${generateRandomNumberFromRange(0000,9999)}`;
     return phonenumber;
}
else {
    let phonenumber = `${areacode}-${generateRandomNumberFromRange(100,999)}-${generateRandomNumberFromRange(100,900)}-${generateRandomNumberFromRange(1000,9999)}`;
    return phonenumber;

}
}
console.log(generatePhoneNumberWithAreaCode(646));
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
const generateTicketWithLetter = () => { 
    let randomLetter =  String.fromCharCode(generateRandomNumberFromRange(65,90));
    let randomLetterLowerCase = `${(String.fromCharCode(generateRandomNumberFromRange(65,90))).toLowerCase()}`;
    ticket = `L [${randomLetterLowerCase}] [${randomLetter}]-[${generateRandomNumberFromRange(0,30)}]`;
    return ticket; 
}
console.log(generateTicketWithLetter());


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
const AssignRockPaperOrScissorA = (a) => {
let rock = 1;
let paper =2;
let scissors =3;
 a === 'rock' ? a =rock: a === 'paper' ? a = paper: a === 'scissors' ? a = scissors: 'invalid input'; // assign player1 choice
 return a;
}

const rockPaperScissors = (a,b) => { 

    let rock = 1;
    let paper =2;
    let scissors =3;
     a = AssignRockPaperOrScissorA(a);
     b = AssignRockPaperOrScissorA(b);

    if (a === rock && b === scissors || a === paper && b == rock || a == scissors && b == paper) {
// console.log('Player1 Wins'); // a = player 1
return 1;
    }
    else if ( a == rock && b == paper || a == paper && b == scissors || a == scissors && b == rock){
        //console.log('Player2 Wins'); 
        return 2; // player2 wins b player 2;
    }

  else  if (a === b)// tie case
   {
       //console.log("It's a tie")
       return 0;
   }
else if (a === 'invalid input' || b === 'invalid input') {
    console.log("Error, invalid input, please insert a number from 1,2,3");
}
}
let gameresult = rockPaperScissors('rock','scissors');
const decision = (gameresult) => {
    if (gameresult === 1) {
        console.log('Player 1 Wins');
        return 1;
    }
    if (gameresult === 2) {
        console.log('Player2 wins');
        return 2
    }
    if (gameresult === 0) {
        console.log('Its a tie');
        return 0;
    }
}
decision(gameresult);


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
      let computerGame = rockPaperScissors(player,generateRandomNumberFromRange(1,3));
      if (computerGame == 2) {
          return 'Computer Won'
      }
      if (computerGame == 1) { 
          return 'You Won';
      }
      if (computerGame == 0) { 
          return 'Tie';
      }
}
console.log(RPSwithComputer('rock'));

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
  if (typeof grade != 'number')
  {
      console.log("Invalid Input, please try again");
      return 0;
      
  }
    if ( grade >= 90  ) {
        return "A";
    }
    else if (grade >= 80 && grade < 90) {
        return "B";
    }
    else if (grade >= 70 && grade < 80) {
    return 'C' 
}
else if (grade >= 60 && grade < 70) {
    return 'D'
}
else if (grade < 60) {
return 'F';
} 
}
console.log(calculateGrade(100));
console.log(calculateGrade('B'));
console.log(calculateGrade(85));