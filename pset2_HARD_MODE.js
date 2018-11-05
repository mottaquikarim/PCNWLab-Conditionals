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
const compareInts = (firstNum, secondNum) => {
if (typeof firstNum !== 'number' || typeof secondNum !== 'number' ) {
    firstNum = 1;
    secondNum = 0;
}
if (firstNum !== Math.floor(firstNum) || secondNum !== Math.floor(secondNum)){
    firstNum = Math.floor(firstNum);
    secondNum = Math.floor(secondNum);
}
if (firstNum > secondNum) {
    return true;
}
return false;
}

console.log(compareInts(1,2));
console.log(compareInts("hola","hola"));
console.log(compareInts(1.55,0.75));
console.log(compareInts(1.55,3.75));



/*const isNumAnInt = (value) => {
if (Number.isInteger(value)) {
    return `${value} is a Whole Number`;
    }
    else return `${value} is not a Whole Number`;
}
console.log(isNumAnIt());

const getWholeNum = (num) => {
    return Math.floor(num);
}
console.log(getWholeNum());

const compareInts = (firstNum, secondNum) => {
    if (Number.isInteger(firstNum / secondNum) {
        if (firstNum > secondNum) {
            return true;
    }
}
    else return false;
    getWholeNum(num);
}*/
/*const compareInts = (val1, val2) => {
    let valu1 = getWholeNum();
    let valu2 = getWholeNum2();
    if (val1 > val2) {
    return true;
    }
    else return false;
}

const getWholeNum = (value1) => {
    if (itItANumber1() ===`${value1} is not a Whole Number`) {
        return Math.floor(value1); 
    }
    else return value1;

const getWholeNum2 = (value2) => {
    if (itItANumber2() ===`${value2} is not a Whole Number`) {
        return Math.floor(value2); 
}  else return value2;

getWholeNum();
getWholeNum2();

get
     const isNumAnInt1 = (value1) => {
        if (Number.isInteger(value1)) {
        return `${value1} is a Whole Number`;
        }
        else return `${value1} is not a Whole Number`;
    }
    isNumAnInt1();

    const isNumAnInt2 = (value2) => {
        if (Number.isInteger(value2)) {
        return `${value2} is a Whole Number`;
        }
        else return `${value2} is not a Whole Number`;
    }
        isItANumber2();

console.log(compareInts(1.111, 2.222));*/

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
const signOfProduct = (term1, term2, term3) => {
    let total = 0
    if (typeof term1 !== 'number' ||typeof term2 !== 'number' || typeof term3 !== 'number'  ){
        throw new Error('terms must be numbers')
    }
    if (term1 < 0) {
        total += 1;
    }
    if(term2 < 0) {
        total += 1;
    }
    if(term3 < 0) {
        total += 1;
    }
    if (total === 3) {
        return -1;
    }
    else if (total === 2) {
        return 1
    }
    else if (total === 1){
        return -1;
    }
    return 1; 
}

console.log(signOfProduct(-5, 6, -4));
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
const signOfProduct2 = (term1, term2, term3, shouldRetProd = false) => {
    let total = 0
    if (typeof term1 !== 'number' ||typeof term2 !== 'number' || typeof term3 !== 'number'  ){
        throw new Error('terms must be numbers')
    }
    if (term1 < 0) {
        total += 1;
    }
    if(term2 < 0) {
        total += 1;
    }
    if(term3 < 0) {
        total += 1;
    }
    if (total === 3 && shouldRetProd === false) {
        return -1;
    }
    else if (total === 3 && shouldRetProd === true){
        return term1 * term2 * term3;
    }
    if (total === 2 && shouldRetProd === false) {
        return 1
    }
    else if (total === 2 && shouldRetProd === true){
        return term1 * term2 * term3;
    }
     if (total === 1 && shouldRetProd === false){
        return -1;
    }
    else if (total === 1 && shouldRetProd === true){
        return term1 * term2 * term3;
    }
    if (total === 0 && shouldRetProd === false) {
        return 1;
    }
    else if (total === 0 && shouldRetProd === true){
        return term1 * term2 * term3;
    } 
}

console.log(signOfProduct2(-5, 6, -4, true));
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
const anyUpperCase = (term) => {
    const upper = /[A-Z]/g;
    const value = term.search(upper);

    if (value > 0) {
        return true;
    }
    return false;
}
console.log(anyUpperCase('teSt'));
console.log(anyUpperCase('test'));


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
const isEmptyString = (term) => {
  
}

console.log(isEmptyString(''));
console.log(isEmptyString(' '));
console.log(isEmptyString('  '));


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
