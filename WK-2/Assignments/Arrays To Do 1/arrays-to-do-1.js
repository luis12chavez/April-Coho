/*********************************************************************************************************************************/
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

// Examples:
// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]

const pushToFront = (arr, num) => {
    arr[arr.length] = num;

    for (index = 0; index < arr.length; index++) {
        // console.log(arr)
        let temp = arr[index]
        // console.log(temp)
        arr[index] = arr[arr.length - 1]
        arr[arr.length - 1] = temp
    }
    return arr
}
// console.log(pushToFront([5,7,2,3], 8))


/*********************************************************************************************************************************/
// Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

// Examples:
// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function

const popFrontValue = arr => {
    let poppedValue = undefined
    // console.log(arr.length + ' :Length')
    for (index = 0; index < arr.length; index++) {
        if (index == 0) {
            poppedValue = arr[index]
            // console.log(poppedValue)
        }
        if (index != (arr.length)) {
            // console.log('index ' + index)
            arr[index] = arr[index + 1]

            if (arr[index] == undefined) {
                arr.pop()
            }
        }
    }
    console.log(arr)
    return poppedValue
}

// console.log(popFrontValue([3,5,10,15]))


/*********************************************************************************************************************************/
// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

// Examples:
// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]

const insertAt = (arr, pos, val) => {
    arr[arr.length] = val

    for (index = 0; index < arr.length; index++) {
        let temp = arr[index]

        if (index === pos) {
            // arr[index] = temp
            console.log(arr[index])
            arr[index] = arr[arr.length - 1]
            arr[arr.length - 1] = temp
        }
    }
    return arr
}
// console.log(insertAt([100,200,5], 2, 311 ))
console.log(insertAt([9, 33, 7], 1, 42))

