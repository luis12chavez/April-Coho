// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

var myArr = [4,2,1,3,5]
const minToFront = array => {
    let newArr = []
    for(var x = 0; x < array.length; x++) {
        
        if(array[x] < array[x + 1] ) {

            newArr.push(array[x])
        }
    }
    console.log(array[x])
    console.log(newArr)
}
minToFront(myArr)
