/*********************************************************************************************************************************/
// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:
// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

const removeBlanks = str => {
    let counter = 0
    let newStr = ''
    for (let index = 0; index < str.length; index++) {
        if (str[index] != ' ') {
            newStr += str[index]
        }
    }
    return newStr
}

let str = 'Hel l o T h ere . . . '
// console.log(removeBlanks(str))
// console.log(removeBlanks("I can not BELIEVE it's not BUTTER"))


/*********************************************************************************************************************************/
// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

// Examples:
// getDigits("abc8c0d1ngd0j0!8") => 801008
// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680
const isNumber = str => {
    let newStr = ' '
    for (let index = 0; index < str.length; index++) {
        if (!isNaN(str[index])) {
            // Checking for blank spaces
            if (str[index] != ' ') {
                newStr += str[index]
                // console.log(newStr)
            }
        }
    }
    return newStr
}

let str2 = '123  @ abc # 4D .'
// console.log(isNumber(str2))
// console.log(isNumber('Os1a3y5w7h9a2t4?6!8?0'))
// console.log(Number('1'))
// console.log(isNaN('d'))


/*********************************************************************************************************************************/
// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 
// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

const convertToAcronym = str => {
    let arr = str.split(" ")
    let acronym = ''

    for (let index = 0; index < arr.length; index++) {

        if (arr[index] != '') {
            // for every word in arr, every first index of the string is added to acronym
            acronym += arr[index][0].toUpperCase()
        }

        // console.log(arr[index][index])
        // console.log(arr)

    }
    console.log(acronym)
    return acronym
}

// convertToAcronym("Teenage mutant Ninja turtles - B A t M a N  ")

/*********************************************************************************************************************************/
// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 

// Examples:
// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

const displayNonSpaces = str => {
    let counter = 0
    for (let index = 0; index < str.length; index++) {
        if(str[index] != ' ') {
            counter += 1
        }
    }
    // console.log(str)
    return counter
}
// console.log(displayNonSpaces('Honey pie, you are driving me crazy'))
// console.log(displayNonSpaces('Hello world !'))


/*********************************************************************************************************************************/
// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

// Examples:
// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']


const removeShorterStrings = (arr, num) => {
    let newArr = []
    for(let index = 0; index < arr.length; index++){
        
        if(arr[index].length >= num) {
            newArr.push(arr[index])
        }
    }
    return(newArr)
}
// console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
// console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))