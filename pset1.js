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
    let num = generateRandomNumberFromRange(1,3)
    if(num == 1) return 'red'
    else if(num == 2) return 'green'
    else if(num == 3) return 'blue'
}

console.log(generateTrafficLight())

/*
    @func generateRandomPhoneNumber
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
    @example generateRandomPhoneNumber(); // "1-718-786-2825"
*/
function generateRandomPhoneNumber(){
    num =  generateRandomNumberFromRange(100,999)
    num2 = generateRandomNumberFromRange(1000,9999)
    return `1-${num}-${num}-${num2}`
}

console.log(generateRandomPhoneNumber())



/*
    @func generateRandomRGB
    @returns {string}
    @desc - generates a random rgb value
            HINT: you will need to use the 
                  generateRandomNumberFromRange 
                  function from above
    
    @example generateRandomRGB(); // "rgb(255, 123, 0)"
*/
function generateRandomRGB(){
    num =  generateRandomNumberFromRange(0,255)
    num2 =  generateRandomNumberFromRange(0,255)
    num3 =  generateRandomNumberFromRange(0,255)
    return `rgb(${num}-${num2}-${num3})`
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
function generateLottoTicket(){
    num1 =  generateRandomNumberFromRange(0,10)
    num2 =  generateRandomNumberFromRange(0,16)
    num3 =  generateRandomNumberFromRange(0,31)
    return `L ${num1} ${num2} ${num3}`
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
function generatePhoneNumberWithAreaCode(code=718){
    num =  generateRandomNumberFromRange(100,1000)
    num2 = generateRandomNumberFromRange(1000,10000)
    return `1-${code}-${num}-${num2}`
}

console.log(generatePhoneNumberWithAreaCode(347))

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
function generateTicketWithLetters(){
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ"
    var chars2 = "abcdefghiklmnopqrstuvwxyz";
    num1 =  generateRandomNumberFromRange(0,30)
    num2 =  generateRandomNumberFromRange(1,26)  
    num2 =  chars2[num2]
    num3 =  generateRandomNumberFromRange(1,26)  
    num3 =  chars[num3]
    return `L ${num2} ${num3}-${num1}`
}

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
function rockPaperScissors(arg1,arg2){
    if(arg1 === "rock"){
        if(arg2 ==="scissors") return 'player 1 wins'
        else if(arg2=="paper") return 'player 2 wins'
        else return 'tie'
    }
    else if(arg1 === "paper"){
        if(arg2 ==="scissors") return 'player 2 wins'
        else if(arg2=="rock") return 'player 1 wins'
        else return 'tie'
    }
    else if(arg1 == "scissors"){
        if(arg2 == "paper") return 'player 1 wins'
        else if(arg2 == "rock") return 'player 2 wins'
        else return 'tie'
    }

    return -1
    

}
console.log(rockPaperScissors("rock","scissors"));

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
RPSwithComputer = param =>{
    const num = generateRandomNumberFromRange(0,2)
    //0 means paper
    //1 means rock
    //2 means scissors
    if(param === "rock"){
        if(num===0) return "computer wins"
        else if(num===1) return 'tie'
        else return "player wins"
    }
    else if(param === "paper"){
        if(num === 0) return 'tie'
        else if(num==1) return "player wins"
        else return 'computer wins'
    }
    else if(param === "scissors"){
        if(num == 0) return "computer wins wins"
        else if(num === 1) return "player wins"
        else return 'tie' 
    }

    return -1

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
    
    if( grade > 95 & grade <= 100 ) return "A";
    else if(grade > 85 & grade <= 95) return "B"
    else if(grade > 75 & grade <= 85) return "C"
    else if(grade > 65 & grade <= 75) return "D"
    else if(grade > 0 & grade <= 65) return "B"
    else{
        throw "INVALID GRADE INPUT"
    }
} 

try {
    console.log(calculateGrade(-1))
} catch (error) {
    console.log(error)
}

