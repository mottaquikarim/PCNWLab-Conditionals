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
const typeOfWhat = (param) => {
    switch (typeof param) {
        case 'string':
        return 'string'

        case 

    }

    

};
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

//problem 1


const coerceNum = function coerceNum(num) {
    num = parseInt(num, 10);
    num = Number(num);
    return num;
};


const ckWholeNum = num => num % 1 === 0 ? num : num -= num % 1;



    // if(num % 1 === 0){
    //     return num
    // } else {
    //     return num -= (num % 1)
    // }





 const compareInts = (num1, num2) => {
    num1 = coerceNum(num1);
    num2 = coerceNum(num2);
    num1 = ckWholeNum(num1);
    num2 = ckWholeNum(num2);

    if (!isNaN(num1) && !isNaN(num2)){
        if (num1 > num2){
            return true;
        } 
        return false;
    } 
    return `Inputs must be numbers
    Value 1: ${num1} 
    Value 2: ${num2}`
 }

 console.log(compareInts(6,10)) //false

//  console.log(compareInts(5, 'number'));
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

//problem 2

const signOfProduct = (term1, term2, term3) => {
    term1 = coerceNum(term1);
    term2 = coerceNum(term2);
    term3 = coerceNum(term3);
    
    if ( !isNaN(term1) && !isNaN(term2) && !isNaN(term3) ) {
        let prod = Math.sign(term1) + Math.sign(term2) + Math.sign(term3); 
            if (prod === 3 || prod === -1){
                return 1;
            }
            return -1;
    } 
    throw Error `Terms must be numbers`;
}

console.log(signOfProduct(5, 6, 4)); // 1
// console.log(signOfProduct(-5, 6, 4)); // -1
// console.log(signOfProduct(-5, 6, -4)); // 1
// console.log(signOfProduct(-5, -6, -4)); // -1
// console.log(signOfProduct(5, 6, 'string')); // error



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

//problem 3

const signOfProduct2 = ( term1, term2, term3, shouldRetProd = false ) => {
    if (shouldRetProd){
    term1 = coerceNum(term1);
    term2 = coerceNum(term2);
    term3 = coerceNum(term3);
        if ( !isNaN(term1) && !isNaN(term2) && !isNaN(term3) ){
            return term1 * term2 * term3;
         }
    throw Error `Terms must be numbers`;
    }

return signOfProduct(term1, term2, term3);
}

console.log(signOfProduct2(5, 6, 4, true)); // 120
// console.log(signOfProduct2(-5, 6, 4, true)); // -120
// console.log(signOfProduct2(-5, 6, -4)); // 1
// console.log(signOfProduct2(-5, -6, -4, true)); // -120

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

//problem 4

const anyUpperCase = (string) => {
    if (string.match(/[A-Z]/g)){
        return true;
    }
    return false;
}
console.log(anyUpperCase('robert')) // false
console.log(anyUpperCase('roBert')) // true


/*
const letterIsCapital = (str) => {
    if (str === 'A' || str === 'B'||str === 'C'||str === 'D'||str === 'E'||str === 'F'||str === 'G'||str === 'H'||str === 'I'||str === 'J'||str === 'K'||str === 'L'||str === 'M'||str === 'N'||str === 'O'||str === 'P'||str === 'Q'||str === 'R'||str === 'S'||str === 'T'||str === 'U'||str === 'V'||str === 'W'||str === 'X'||str === 'Y'||str === 'Z'){
       return true; 
    }
    return false;
}
*/
/*

const sliceMeDaddy = (string, length, index) => {
    console.log(string.charAt(index));
    console.log(`sliceMeDaddy Called String: ${string} Length: ${length} index ${index}`)

        if (letterIsCapital(string.charAt(index))){
            anyUpperCase(string, -3, index);
        }else {
        anyUpperCase(string, length-1, index+1)
        }
}

const anyUpperCase = (string, strLngth = -2, index = 0) => {
    console.log(`UpperCase Called String: ${string} Length: ${strLngth} index ${index}`)
    // let counter = strLngth;
    // let index = ind;
    if (strLngth === -2) {
        sliceMeDaddy(string, string.length-1, index)
    } 
    else if (strLngth === -3) {
        return true
    }
    else if (strLngth === -1){
        return false
    }
    else if (strLngth > -1){
    sliceMeDaddy(string, strLngth, index);
    }
    return false;
    
}
*/
/*
const sliceMeDaddy = (string, length) => {
    console.log(`sliceMeDaddy Called String: ${string} Length: ${length}`)
    console.log(string.charAt(length));

        if (letterIsCapital(string.charAt(length))){
            anyUpperCase(string, -3, length);
        }else {
        anyUpperCase(string, length-1)
        }
}

const anyUpperCase = (string, length = -2) => {
    console.log(`UpperCase Called String: ${string} Length: ${length}`)
    // let counter = strLngth;
    // let index = ind;
    if (length === -2) {
        sliceMeDaddy(string, string.length-1)
    } 
    else if (length === -3) {
        return true
    }
    else if (length === -1){
        return false
    }
    else if (length > -1){
    sliceMeDaddy(string, length);
    }
    return false;

}
*/





//  console.log(anyUpperCase('teSt')); // true
//  console.log(anyUpperCase('rObert'));




 /*
 function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
        console.log(x);
      return x * pow(x, n - 1);
    }
  }
  
  console.log( pow(2, 3));
*/

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
//problem 5
const isEmptyString = (string) => {
    string = string.replace(/ /g, '');
    if (string !== ''){
        return false;
    }
    return true;
}

console.log(`Is string ${"'robert'"} empty? ${isEmptyString('robert')}`);
console.log(`Is string ${"'    '"} empty? ${isEmptyString('    ')}`);

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
//problem 6
const parseInt$ = (string) => {
    // return string = Number(string);
    let num = 0;
    let exp = 0;
    for (i = string.length-1; i >= 0; i--){
        console.log(`**${num}**`)
        num += stringToNum(string.charAt(i)) * (10 ** exp)
        exp ++;
        console.log(`**${num}**`)
    } 
    return num
}

const stringToNum = (char) => {
    switch (char) {
        case '0':
        return 0

        case '1':
        return 1

        case '2':
        return 2

        case '3':
        return 3

        case '4':
        return 4

        case '5':
        return 5

        case '6':
        return 6

        case '7':
        return 7

        case '8':
        return 8

        case '9':
        return 9

        default:
        return -0;
    }
}





console.log('************')
console.log(parseInt$('102'));
console.log('************')





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



// event = new InputEvent(typeArg, inputEventInit);
// let aString = inputEvent.data
console.log(`~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~`)
const checkNum = (val) => {
    let numCount = 0;
    for (let i = 0; i < val.length; i++){
        if (val[i].match(/[0-9]/)){
            numCount += 1;
        }
    }
    if( numCount >= 3){
        return true
    }
    return false;
}

const checkSpcChar = (val) => {
    let count = 0;
    for (let i = 0; i < val.length; i++){
        if (val[i].match(/\!|\`|\~|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\=|\_|\+|\\|\[|\]|\{|\}|\/|\?|\,|\.|\<|\>/)){
            count += 1;
        }
    }
    if( count >= 1){
        return true
    }
    return false;
}

const validatePassword = (pw1, pw2) => {
    if(pw1 === pw2){

        if (pw1.length >= 8){

            if (checkNum(pw1)){

                if (checkSpcChar(pw1)){

                    if(pw1 !== pw1.toLowerCase()){

                        return 'Your passwords match!';
                    }
                    return 'Password require at least one uppercase';
                }
                return 'Password requires at least one special character';
            }
            return 'Password needs at least 3 numbers!';
        }   
        return 'Password too short!';
    }
    return  'Passwords do not match';
}

console.log('Expected Errors:');
console.log(`If passwords do not match: ${validatePassword('nnn','')}`);
console.log(`
If password are not long enough: ${validatePassword('nnn', 'nnn')}`);
console.log(`
If password contains less than 3 numbers: ${validatePassword('nnn12nnn', 'nnn12nnn')}`);
console.log(`
If password does not contain any special character: ${validatePassword('nnn123nnn', 'nnn123nnn')}`);
console.log(`
If password does not contain an uppercase: ${validatePassword('!nnn123nnn', '!nnn123nnn')}`);
console.log(`
If password satisfies all conditions: ${validatePassword('!nNn123nnn', '!nNn123nnn')}`);


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







