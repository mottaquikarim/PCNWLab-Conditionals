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

const generateTrafficLight = function(){
    let lightColor= generateRandomNumberFromRange(1,3)
    //console.log(lightColor)
if (lightColor===1){
    return'red' 
} 
else if (lightColor=== 2){
    return'green';
} else 
        return'blue';
    }
    
console.log(generateTrafficLight());


/*
    @func generateRandomPhoneNumber
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
    @example generateRandomPhoneNumber(); // "1-718-786-2825"
*/
const generateRandomPhoneNumber = function(){
    let randomNum = Math.floor(Math.random()*899+100);
    let randomNum2= Math.floor(Math.random()*8999+1000);
    return `1-718-${randomNum}-${randomNum2}`;
}
console.log(generateRandomPhoneNumber());


/*const generateRandomPhoneNumber = function(){
    let randomNum = generateRandomNumberFromRange( 0, 999 );
    let randomNum2= generateRandomNumberFromRange( 0, 9999 );
    
    if (randomNum < 10 || randomNum2 < 10){
        return `1-718-00${randomNum}-000${randomNum2}`
    }else if (randomNum < 100 || randomNum2 < 100){
        return `1-718-0${randomNum}-00${randomNum2}`
    }else {
        return `1-718-${randomNum}-${randomNum2}`;
    }

  }
console.log(generateRandomPhoneNumber());
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

/*const generateRandomRGB = function(){
    let r = Math.floor(Math.random()*226);
    let g = Math.floor(Math.random()*226);
    let b = Math.floor(Math.random()*226);
    return `rgb(${r},${g},${b})`;
}
console.log(generateRandomRGB());
*/

const generateRandomRGB = function(){
    let r = generateRandomNumberFromRange( 0, 225 );
    let g = generateRandomNumberFromRange( 0, 225 );
    let b = generateRandomNumberFromRange( 0, 225 );
    return `rgb(${r},${g},${b})`;
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
const generateLottoTicket = function (){
    let randNum1 = Math.floor(Math.random()*10);
    let randNum2 = Math.floor(Math.random()*16);
    let randNum3 = Math.floor(Math.random()*31)
    return `L ${randNum1} ${randNum2}-${randNum3}`;
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
const generatePhoneNumberWithAreaCode = function(num){
    let areaCode = Math.floor(Math.random()*899+100);
    let randPhoneNum1= Math.floor(Math.random()*899+100);
    let randPhoneNum2=Math.floor(Math.random()*8999+1000);
    if (typeof num === 'undefined'|| num < 100){
        return `1-${areaCode}-${randPhoneNum1}-${randPhoneNum2}`;
        
    } else { (num); 
    return `1-${num}-${randPhoneNum1}-${randPhoneNum2}`;
    } 
}
console.log(generatePhoneNumberWithAreaCode(914));
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

const generateTicketWithLetters = function(){
    let randNumb1 = Math.floor(Math.random()*10);
    let randUppLett = String.fromCharCode(Math.floor(Math.random() * (91 - 65)) + 65);
    let randLowLett = String.fromCharCode(Math.floor(Math.random() * (123 - 97)) + 97);
    let randNumb2 = Math.floor(Math.random()*31);
    return `L ${randNumb1} ${randLowLett} ${randUppLett}-${randNumb2}`;
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

const rockPaperScissors = function (player1,player2){
    //player1=toLowerCase();
    //player2=toLowerCase();
    const r= 'rock'
    const p= 'paper'
    const s= 'scissors'
    let invalidInputP1 =(player1 !== r||player1 !==p||player1 !== s)
    let invalidInputP2 =(player2 !== r||player2 !==p||player2!==s)
    if (player1=== r && player2 === p){;
    return 2

    }else if (player1===r && player2 === s){
        return 1
    }else if (player1=== p && player2=== s){
        return 2
    }else if (player1=== p && player2=== r){
        return 2
    }else if (player1===s && player2===r){
        return 1
    }else if (player1===s && player2===p){
        return 1
    }else if (player1===player2){
        return 0
    }else if (invalidInputP1 || invalidInputP2)
        return -1
    

}
console.log(rockPaperScissors('paper','paper'));
console.log(rockPaperScissors('scissors','rock'));
console.log(rockPaperScissors('i'));
console.log(rockPaperScissors('rock','scissors'));


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
console.log('---------------');

const compChoice = function(){
    const compOpt=generateRandomNumberFromRange(1,3);
    if (compOpt === 1){
    return "rock"

    }if(compOpt===2){
        return "paper"
    }else
    return "scissors"
}

const RPSwithComputer = function (playerA,playerB=compChoice()){
    const r='rock'
    const p='paper'
    const s='scissors'
   const invalidInputPA =(playerA !== r||playerA !==p||playerA !== s)
    //let invalidInputP2 =(player2 !== r||player2 !==p||player2!==s)
    if (playerA=== r && playerB=== p){
    return 2

    }else if (playerA===r && playerB === s){
        return 1
    }else if (playerA===p && playerB=== s){
        return 2
    }else if (playerA===p && playerB=== r){
        return 1
    }else if (playerA===s && playerB=== p){
        return 1
    }else if (playerA===s && playerB=== r){
            return 2
    }else if (playerA===playerB){
        return 0
    }else (invalidInputPA)
        return -1
    
     

}
console.log(RPSwithComputer('rock'));
console.log(RPSwithComputer('paper'));
console.log(RPSwithComputer('i'));
console.log(RPSwithComputer('paper'));   


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
