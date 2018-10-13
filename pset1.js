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

function generateTrafficLight(){
    const lightNum = generateRandomNumberFromRange(1,3)
    let lightColor = ""

    if (lightNum === 1){
        lightColor = "red"
    }
    else if (lightNum === 2){
        lightColor = "yellow"
    }
    else {
        lightColor = "green"
    }

    return lightColor
}

// console.log(generateTrafficLight()) // generates red, yellow or green

/*
    @func generateRandomPhoneNumber
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
    @example generateRandomPhoneNumber(); // "1-718-786-2825"
*/

function generateRandomPhoneNumber(){
    const areaCodeArray = [332, 347, 646, 718, 917, 929] //NYC area codes

    let areaCode = areaCodeArray[generateRandomNumberFromRange(0,5)]
    let middleNum = generateRandomNumberFromRange(0,999)
    let endNum = generateRandomNumberFromRange(0,9999)

    if (middleNum <= 9){
        middleNum = `00${middleNum}` 
    }
    else if (middleNum > 9 && middleNum <= 99){
        middleNum = `0${middleNum}`
    }

    if (endNum <= 9){
        endNum = `000${endNum}`
    }
    else if (endNum > 9 && endNum <= 99){
        endNum = `00${endNum}`
    }
    else if (endNum > 99 && endNum <= 999){
        endNum = `0${endNum}`
    }

    let phoneNum = `1-${areaCode}-${middleNum}-${endNum}`

    return phoneNum

}

// console.log(generateRandomPhoneNumber())


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
    let firstNum = generateRandomNumberFromRange(0,255)
    let secondNum = generateRandomNumberFromRange(0,255)
    let thirdNum = generateRandomNumberFromRange(0,255)

    let randomRGB = `rgb(${firstNum}, ${secondNum}, ${thirdNum})`

    return randomRGB
}

// console.log(generateRandomRGB())

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
    let firstNum = generateRandomNumberFromRange(0,9)
    let secondNum = generateRandomNumberFromRange(0,15)
    let thirdNum = generateRandomNumberFromRange(0,30)

    let lottoTicket = `L ${firstNum} ${secondNum}-${thirdNum}`

    return lottoTicket
}

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

function generateRandomPhoneNumberWithAreaCode(areaCode = 718){
    let middleNum = generateRandomNumberFromRange(0,999)
    let endNum = generateRandomNumberFromRange(0,9999)
    let phoneNum = `1-${areaCode}-${middleNum}-${endNum}`

    if (middleNum <= 9){
        middleNum = `00${middleNum}` 
    }
    else if (middleNum > 9 && middleNum <= 99){
        middleNum = `0${middleNum}`
    }

    if (endNum <= 9){
        endNum = `000${endNum}`
    }
    else if (endNum > 9 && endNum <= 99){
        endNum = `00${endNum}`
    }
    else if (endNum > 99 && endNum <= 999){
        endNum = `0${endNum}`
    }

    return phoneNum

}
/*
console.log(generateRandomPhoneNumberWithAreaCode()) // 718 Number
console.log(generateRandomPhoneNumberWithAreaCode(917)) // 917 number 
console.log(generateRandomPhoneNumberWithAreaCode(347)) // 347 number
*/

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
    let upperCase = String.fromCharCode(generateRandomNumberFromRange(65,90))
    let lowerCase = String.fromCharCode(generateRandomNumberFromRange(97,122))
    let number = generateRandomNumberFromRange(0,30)
    
    if (number <= 9){
        number = `0${number}`
    }

    let lottoTicket = `L ${lowerCase} ${upperCase}-${number}`

    return lottoTicket
}

// console.log(generateTicketWithLetters())

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

function rockPaperScissors(player1, player2){
    let p1Input = player1.toLowerCase()
    let p2Input = player2.toLowerCase()

    if ((p1Input !== "rock" && p1Input !== "paper" && p1Input !== "scissors")  //all possible valid options for player 1
    || (p2Input !== "rock" && p2Input !== "paper" && p2Input !== "scissors")) //all possible valid options for player 2
    {
        return "Invalid input, try again."
    }
    else {
        if ((p1Input === "rock" && p2Input === "rock") // All possible cases of a tie
        || (p1Input === "paper" && p2Input === "paper")
        || (p1Input === "scissors" && p2Input === "scissors"))
        {
            return "It's a tie"
        }
        else if ((p1Input === "rock" && p2Input === "scissors")  //All possible cases of player 1 winning
        || (p1Input === "paper" && p2Input === "rock") 
        || (p1Input === "scissors" && p2Input === "paper"))
        {
            return "Player 1 Wins!"
        }
        else {
            return "Player 2 Wins!" //Covered all ties and all player1 wins, the only
                                    //remaining possibilities would be of player 2 winning
        }

    }
}

/*
console.log(rockPaperScissors("ROCK", "PAPER")) // 2 
console.log(rockPaperScissors("PAPER", "PAPER")) // 0
console.log(rockPaperScissors("Scissors", "PAPER")) // 1
console.log(rockPaperScissors("Gun", "PAPER")) // Invalid Input
console.log(rockPaperScissors("PAPER", "gun")) // Invalid Input
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

function RPSwithComputer(player){
    let pInput = player.toLowerCase() //converts it to lower case so I don't have so I don't
    //                                  have to care about the casing when comparing

    if ((pInput !== "rock" && pInput !== "paper" && pInput !== "scissors")){
        return "Invalid input, try again."
    }
    else {
        let comChoices = ["rock", "paper", "scissors"]
        let cInput = comChoices[generateRandomNumberFromRange(0,2)]

        if ((pInput === "rock" && cInput === "rock")  //rock v rock tie
        || (pInput === "paper" && cInput === "paper")  // paper v paper tie
        || (pInput === "scissors" && cInput === "scissors")) //scissors v scissors tie
        {
            return "It's a tie"
        }
        
        else if ((pInput === "rock" && cInput === "scissors") //
        || (pInput === "paper" && cInput === "rock") //
        || (pInput === "scissors" && cInput === "paper")) // All three possibilities for player to win
        {
            return "Player 1 Wins!"
        }
        
        else {
            return "The Computer Wins!" // Covered all other possibilities already so only thing that
                                        // can happen if none of above cases are true is the computer wins
        }

    }
}

/*
console.log(RPSwithComputer("Gun")) //Invalid Input
console.log(RPSwithComputer("Rock"))
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

/*

function calculateGrade( grade ) {
    // Write your codes below here
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
    
    if ( grade > 90 ) {
        return "A";
    }
   return "F"; // you may choose not to use this
}

*/
function calculateGrade( grade ) {

    let gradeLetter = "Error"

    if (grade >= 0 && grade < 65){
        gradeLetter = "F"
        return gradeLetter
    }
    else if ( grade >= 65 && grade < 75 ) {
        gradeLetter = "D"
        return gradeLetter;
    }
    else if ( grade >= 75 && grade < 85 ) {
        gradeLetter = "C"
        return gradeLetter;
    }
    else if ( grade >= 85 && grade < 95 ) {
        gradeLetter = "B"
        return gradeLetter;
    }
    else if ( grade >= 95 && grade <= 100){
        gradeLetter = "A"
        return gradeLetter;
    }

   return gradeLetter

}

/*

console.log(calculateGrade(100)) //A
console.log(calculateGrade(95)) //A
console.log(calculateGrade(85)) //B
console.log(calculateGrade(75)) //C
console.log(calculateGrade(65)) //D
console.log(calculateGrade(0)) //F
console.log(calculateGrade(1000)) //Error
console.log(calculateGrade(-100)) //Error
console.log(calculateGrade("lul")) //Error

*/