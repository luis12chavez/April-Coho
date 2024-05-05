/*********************************************************************************************************************************/
() => {
    // anonymous function 
}


/*********************************************************************************************************************************/
let arr = [
    1,
    'Hello',
    {
        key: 'unlocked',
        name: 'Luis'
    },
    false,
    [1, 2, 3]
]
// console.log(arr[2].name)
// console.log(arr[4][1])


/*********************************************************************************************************************************/
// - What do arrays and string have in common
// Both have indices
let name = 'Luis'
let newArr = [1, 2, 3]
// console.log(name[1])
// console.log(newArr[2])


/*********************************************************************************************************************************/
// Map and Filter 
let arr2 = [1, 2, 3, 4, 5]
let newArr2 = arr2.map(number => { // Explicit version
    return number + ' Hello'
})
// let newArr2 = arr2.map(number => number + ' Hello') // Implicit version
// console.log(newArr2)

let filteredNumbers = arr2.filter(number => number !== 3)
// console.log(filteredNumbers)


/*********************************************************************************************************************************/
// Recreating Map
let add10 = (value) => {
    return value + 10
}

const copyMap = (arr, func) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i]))
    }
    return newArr
}
// console.log(copyMap(arr2,6))
let arr3 = copyMap(arr2, add10)
// console.log(arr3)


/*********************************************************************************************************************************/
// Destructuring
let me = {
    fname: 'Luis',
    age: 25,
    weight: 175
}

let copyOfMe = {...me} // spread operator
// console.log(copyOfMe)
const {fname, age, weight} = me // destructuring copyOfMe
// console.log(age)


/*********************************************************************************************************************************/
// Spread Operator
const updatedMe = {...me, hobbies: ['gym','cars','gaming']} // Created a shallow copy of 'me' object
// console.log(updatedMe)
// console.log(me)

const hardCopyMe = me // hardCopyMe is now referencing me memory address
hardCopyMe["height"] = "'5' 7''" // this will affect my 'me' object as well
// console.log(me)
// console.log(hardCopyMe)

