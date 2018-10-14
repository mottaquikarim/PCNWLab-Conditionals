/************************************
                README
*************************************/
/*
    * DO NOT USE LOOPS IF POSSIBLE
    * THESE *SHOULD* BE SOLVABLE BY BRUTE FORCE IF/ELSE/SWITCH STATMENTS
    * IF POSSIBLE, WRITE HELPER FUNCTIONS, THEY ARE YOUR FRIENDS
    * SOME ARE __HARD__ - YOU ASKED :)
*/


/*
    @function compareInts
    @param firstNum {number} 
    @param secondNum {number}
    @returns {boolean}
    @description compare firstNum with secondNum
                 if firstNume is greater than secondNum,
                    return true
                 TODO:
                    - validate the both firstNum and secondNum are indeed numbers
                        if not, attempt to coerce
                        if not coercable, return false
                    - validate that both firstNum and secondNum are both whole numbers
                        if not, turn them to whole numbers
                    - as a challenge - attempt to implement the validations above
                        in seperate functions that are invoked
    @example compareInts( 1,2 ); // false
*/


compareInts = (firstNum,secondNum) => {
    if(typeof firstNum ==='string' || typeof secondNum==='string') return false
    checkWholeNum(firstNum)
    checkWholeNum(secondNum)
    if(firstNum > secondNum) return true
    return false
    
}

checkWholeNum = (param) => { if(param % 1 != 0) return Math.floor(param) }
     
   


console.log(compareInts("string",4.33))

console.log("---------------------------")
/*
    @function signOfProduct
    @param term1 {number}
    @param term2 {number}
    @param term3 {number}
    @returns {number}
    @description WITHOUT actually multiplying
                 attempt to determine the sign of the product
                 if negative, return -1
                 else return 1
                 TODO:
                    - if term1...term3 are not numbers, throw error
    @example signOfProduct(-5, 6, -4); // 1
*/

signOfProduct = (term1,term2,term3) => {
    let count = 0
    if(term1 < 0) count+= 1 
    if(term2 < 0) count+= 1 
    if(term3 < 0) count+= 1 
    
    if(count % 2 == 0) return "postive"
    return "negative"
}
console.log(signOfProduct(-5, 6, -4))

console.log("---------------------------")
/*
    @function signOfProduct2
    @param term1 {number}
    @param term2 {number}
    @param term3 {number}
    @param shouldRetProd {boolean, false}
    @returns {number}
    @description same implementation as above but with
                 a default `shouldRetProd` param that is set to false
                 
                 IF it shouldRetProd is true, return NOT the sign but
                 instead the product itself (ok to perform product expression
                 in this instance)
    @example signOfProduct(-5, 6, -4, true); // 120
*/
signOfProduct2 = (term1,term2,term3,shouldRetProd=false) => {
    if(shouldRetProd ===true) return term1 * term2 * term3
    else{
        let count = 0
        if(term1 < 0) count+= 1 
        if(term2 < 0) count+= 1 
        if(term3 < 0) count+= 1 
    
        if(count % 2 == 0) return "postive"
        return "negative"
    }
    
}
console.log(signOfProduct2(-5, 6, -4,true))

console.log("---------------------------")
/*
    @function anyUpperCase
    @param term {string}
    @returns {boolean}
    @description determine if the input string 
                 has any uppercase values in it
                 CHALLENGE:
                    - do not use any sort of loop to accomplish this
                    - can be done with only conditional statements and also
                        some string methods (hint, look up string methods)
    @example anyUpperCase('teSt'); // true
*/

console.log("---------------------------")
 const anyUpperCase = (term) => {
    if(term === term.toLowerCase()) return "no uppercase values"
    return "has uppercase values"

    term === term.toUpperCase && term === term.toLowerCase 
    haPpy != HAPPY && haPpy != happy
    HAPPY != HAPPY && HAPPY != happy
    true === true
}


console.log(anyUpperCase("Hello"))
/*
    @function isEmptyString
    @param term {string}
    @returns {boolean}
    @description determine if the input string is empty
                 we define emptiness to be any of the following:
                    - ''
                    - ' '
                    - '    ', you get the point
                    CHALLENGE: you don't need to use any sort of loops for this
*/

console.log("---------------------------")
function isEmptyString(term){
    term = term.trim()
    if(term === "") return "empty"
    return "Not empty"
}

console.log(isEmptyString("           "))
/*
    @function parseInt
    @param term {string}
    @returns {number}
    @description implement the parseInt method that is popularly implemented by
                 most longuages - but on your own!
                 
                 DO NOT USE PARSEINT...
                 
                 EASY MODE:
                    - assume the strings included are only SINGLE DIGIT, ie:
                            '5', '9', '17'
                    - in this mode, also assume only positive integers that are
                        also whole numbers
                
                HARD MODE:
                    - make no such assumptions about the nature of the string
                    - expect any kind of string, including:
                        '5' -> 5
                        '5628' -> 5628
                        '5.629' -> 5
                        '-67' -> -67
                        '5f' -> 5
                        'f473' -> NaN
                        '5e4' -> 5000
*/
console.log("---------------------------")
console.log("parse int problem")
function parseInt(param){
    x = 0
    exp = 0
    for(let i=param.length-1;i>=0;i--){
        
        let num = param[i] * 1
        x += num * (10 ** exp)
        exp += 1
    }


    return x
}

console.log(parseInt("5628"))
    


/*
    @function validatePassword
    @param pw1 {string}
    @param pw2 {string}
    @return {boolean}
    @description given two password "input" attempts,
                 determine that:
                    - both pw1 and pw2 are equivalent
                    - both pw1 and pw2 is at least 8 characters long
                    - both pw1 and pw2 has at least 3 numbers
                    - both pw1 and pw2 has at least one special character (!@#$%^&*)
                    - both pw1 and pw2 has at least one uppercase character
*/
function validatePassword(pw1,pw2){
    //check to see if pw1 and pw2 is not lowercase. 
    //We need atleast 1 uppercase
    
    if(pw1!= pw1.toLowerCase && pw2!=pw2.toLowerCase){
        //check to see equality
        if(pw1 === pw2){
            //check if length requirment is valid
            if(pw1.length > 7 && pw2.length > 7){
                let count = 0 //count of number characters atleast 3
                let specialChar = 0 //count of special chars
                for(let i =0;i<pw1.length;i++){
                    if(pw1[i] * 1 != NaN) count++
                    switch (pw1[i]) {
                        case '!':
                        case '@':
                        case '#':
                        case '$':
                        case '%':
                        case '^':
                        case '&':
                        case '*':
                            specialChar++
                    }
                    
                }
                //check to see if atleast 3 numbers in string 
                //and min 1 special char
                if(count >= 3 && specialChar === 1){
                    return true //conditions all met thus return true
                }
            }
        }
    }
    
    return false  //exit for loop and return false. not all conditions met.
}

console.log(validatePassword("Helloworld123!","Helloworld123!"))
/*
    @function validateEmailAddress
    @param term {string}
    @return {boolean}
    @description given an input string, determine if the string is a valid email
                 in order for an email to be "valid", it must satisfy the following
                 conditions:
                    - has NO spaces
                          NO dashes (-)
                          NO pound signs (#)
                          NO asterisks (*)
                          NO percent symbols (%)
                          NO dollar signs ($)
                          NO exclamation points (!)
                          NO exponent signs (^)
                          NO ampersands (&)
                          NO parenthesis ()
                    - cannot start with a number
                    - must have an @ sign that is not the first three characters
                        of the string
                    - must have a user name that is at least three chars long
                        we define "user name" to be something like:
                            foo.bar@gmail.com
                        ^ in the case above, username would be foo.bar, it must
                        be longer than 3 characters
                    - must end in either:
                        - .com
                        - .net
                        - .co
                        (...for now)
*/

/*
    @function truthTableEvaluator
    @param P {boolean}
    @param evaluator {string}
    @param Q {boolean}
    @returns {boolean}
    @description
        let's implement a simple logic based truthtable evalulator
        P and Q are true/false
        - evaluator can be either:
            '^' (logical AND, conjunction)
            'v' (logical OR, disjunction)
            '->' (logical conditional, implication)
            '<->' (biconditional)
            more info: https://medium.com/i-math/intro-to-truth-tables-boolean-algebra-73b331dd9b94
        - implement the tables from medium based on the evaluator
            and assert that the correct result is returned
        - if incorrect inputs, throw error
            
*/







