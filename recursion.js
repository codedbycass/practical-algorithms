/* Recursion recipe:
1. Identify base case, when do you want loop to stop
2. Identify recursive case, what is the work you want it to do (to get closer to base case)
3. Return where appropriate (you may lose data)
4. Write a procedure that brings you closer to your base case!
*/

//Recursive loop (a visualization)
// n =3
var tracker = 0;
const loopNTimes = (n) => {
    console.log('n ===', n) // When n = 3, since 3 is not less <= 1 loop again visualization below
    if (n <= 1) {
        return 'complete'
    }
    return loopNTimes(n-1)
}
// n = 2
// const loopNTimes = (n) => {
//     console.log('n ===', n) // When n = 2, since 3 is not less <= 1 loop again visualization below
//     if (n <= 1) {
//         return 'complete'
//     }
//     return loopNTimes(n-1)
// }
// n = 1
// const loopNTimes = (n) => {
//     console.log('n ===', n) // When n = 1; CONDITION HAS BEEN MET so complete will be returned
//     if (n <= 1) {
//         return 'complete'
//     }
//     return loopNTimes(n-1)
// }
//We will exit this function and op it off the stack! 
loopNTimes(3)


//Factorial loop
function computeFactorial(num){
    if (num === 1) {
        console.log('hitting base case')
        return 1
    } else {
        console.log(`returning ${num} * computerFactorial(${num-1})`)
        return num * computeFactorial(num-1)
    }
}

computeFactorial(5)
/*
returning 5 * computeFactorial(4)
returning 4 * computeFactorial(3)
returning 3 * computeFactorial(2)
returning 2 * computeFactorial(1)
hitting basecase => 120
*/

//Accumulator technique
function joinElements(array, joinString){
    //['s','cr','t cod',' :):)']
    //'e'
    function recurse(index, resultSoFar) {
        resultSoFar += array[index]
        if (index === array.length - 1){
            return resultSoFar
        } else {
            return recurse(index + 1, resultSoFar + joinString) // 1, 'se'
        }
    }
    return recurse(0, '') // when you call this it gets pushed onto the call stack
}

function recurse(index, resultSoFar) {
     //1, 'se'
    resultSoFar += array[index] // 'secr'
    if (index === array.length - 1){ // if index is at end (base case, we will return, but we are not there yet so go to else)
        return resultSoFar
    } else {
        return recurse(index + 1, resultSoFar + joinString)  //2, 'secre'
    }
}

function recurse(index, resultSoFar) {
     //2, 'secre'
    resultSoFar += array[index] // 'secr'
    if (index === array.length - 1){ // if index is at end (base case, we will return, but we are not there yet so go to else)
        return resultSoFar
    } else {
        return recurse(index + 1, resultSoFar + joinString)  //'secret'
    }
}

//.. and so on until you get to the base case

//The iterative approach
function joinElements(array, joinString){
    let resultSoFar = ''
    for (let i = 0; i <= array.length - 1; i++) {
        resultSoFar += array[i] + joinString
    }
    return resultSoFar
}
joinElements(['s','cr','t cod', ':):)'], 'e')