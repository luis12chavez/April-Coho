// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
let myNumber = 42
let myName = "Luis"
let temp = myNumber

myNumber = myName
myName = temp
// console.log("Name: " + myName + " Number: " + myNumber)


// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.
for (x = -52; x <= 1066; x++) {
    // console.log(x)
}


// Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
const beCheerful = () => {
    for (x = 98; x > 0; x--) {
        console.log('good morning! ' + x)
    }
}
// beCheerful()


// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
for (x = 0; x >= -300; x--) {
    if (x % 3 == 0) {

        // checking if x for validation
        if (x === -3 || x === -6) {
        }
        else {
            // console.log(x)
        }
    }
}


// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.
let x2 = 2000
while (x2 <= 5280) {
    // console.log(x2)
    x2++
}


// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 
const bDayGuess = (month, day) => {
    if (month == 9 && day == 21) {
        console.log('How did you know?')
    }
    else {
        console.log('Just another day')
    }
}
// bDayGuess(9,21)


// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.
const leapYear = userYear => {
    if (userYear % 4 == 0) {

        if (userYear % 100 == 0) {
            console.log('Not a leap year.')
        }
        else if (userYear % 400 == 0) {
            console.log('Leap year: ' + userYear)
        }
        // else if (userYear % 4 != 0) {
        //     console.log('Not a leap year.')
        // }
        else {
            console.log('Leap year: ' + userYear)
        }
    }
    else {
        console.log('Not a leap year.')
    }
}
// leapYear(2040)


// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
let counter = 0
for (var x = 512; x <= 4096; x++) {
    if (x % 5 == 0) {
        // console.log(x)
        counter++
    }
}
// console.log('Logs: ' + counter)


// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.
const multiplesOfSix = () => {
    let x = 0
    while (x <= 60000) {

        if (x % 6 == 0) {
            console.log(x)
            x++
        }
        x++
    }
}
// multiplesOfSix()



// "Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo"."
const CountingDojoWay = () => {
    for (x = 1; x <= 100; x++) {

        if (x % 5 == 0 && x % 10 == 0) {
            console.log('Dojo ' + x)
        }
        else if (x % 5 == 0) {
            console.log('Coding ' + x)
        }
    }
}
// CountingDojoWay()


// What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.
const WhatDoYouKnow = (incoming) => {
    console.log(incoming)
}
// WhatDoYouKnow(54)



// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
const suckersHuge = () => {
    let sum = 0
    for (x = -300000; x <= 300000; x++) {
        if (x % 2 != 0) {
            sum += x
        }
    }
    console.log(sum)
}
// suckersHuge()


// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.
const countDownByFour = () => {
    let x = 2016
    while (x > 0) {
        if (x % 4 == 0) {
            console.log(x)
            x--
        }
        x--
    }
}
// countDownByFour()



// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).
const flexibleCountdown = (lowNum, highNum, mult) => {
    let arr = []
    for (x = highNum; x >= lowNum; x--) {

        if (x % mult == 0) {
            arr.push(x)
            // console.log(x)
        }
    }

    if (arr == '') {
        console.log('None')
    }
    else {
        console.log(arr)
    }
}
// flexibleCountdown(2, 9, 3)



// The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).
const finalCountdown = (p1, p2, p3, p4) => {
    let x = p2
    let arr = []
    while (x <= p3) {
        if (x % p1 == 0) {

            if (x != p4) {
                // console.log(x)
                arr.push(x)
                x++
            }
        }
        x++
    }
    console.log(arr)
}
// finalCountdown(3, 5, 17, 9)