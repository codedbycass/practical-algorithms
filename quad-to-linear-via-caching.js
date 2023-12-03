//This is a quadratic O(n^2)

const isUnique = (arr) => {
    let result = true;
    for (let i = 0; i < arr.length; i++) {
        console.log(`~~OUTER LOOP~~ i === ${i}`)

            for (let j = 0; j < arr.length; j++) {
                console.log(`~~INNER LOOP~~ j === ${j}`)
                if ( i !== j && arr[i] === arr[j]) {
                    result = false;
                }
            }
        }
        return result;
    }

    console.log(isUnique([1,2,3]) === true);
    console.log(isUnique([1,1,3]) === false);

//Breadcrumb method, or caching. Taking quadratic time method and making it linear. Keeping track of things you've already seen. See something and save it, then do property lookup on obj, which is a constant time operation (most efficient)

isUnique = (arr) => {
    const cache = {} 
    let result = true;
    for (let i = 0; i < arr.length; i++) { // one loop through array
        console.log(`~~SINGLE LOOP~~ i === ${i}`)
        if (cache[arr[i]]) {
            result = false // if we've seen it, it's not unqiue so it's false
        } else {
            cache[arr[i]] = true // if haven't found val before we will save the value to obj and set it to true
        }
    }
    return result
}

console.log(isUnique([1,2,3]) === true )

// Task: transform simple sorting algorithm into a unique sort; should not return any duplicates in array

//i: [1,5,2,1] o: [1,2,5]
//i: [4,2,2,3,2,2,2,] o: [2,3,4]
/*Prompt:
const uniqueSort = function(arr) {
const cache = {} 
return arr.sort((a,b) => a - b)
}
*/

//Solution: this method has a trade off with space complexity, although time complexity has been reduced
const uniqueSort = function(arr) {
    const cache = {} // creating obj
    const result = [] // creating new arr to push all results (consider space complexity)
    for (let i = 0; i < arr.length; i++) {
        if (!cache[arr[i]]) { // if it is undefined (false), we are going to push into the arr; for the first time it's always going to be undefined, since there is nothing in the obj yet
            result.push(arr[i])
            cache[arr[i]] = true
        }
    }
    return result.sort((a, b) => a - b)
}

uniqueSort([4,2,2,3,2,2,2]) // o: [2,3,4]

//Memoization: a different type of caching (whereas caching in its simplest form is saving something into an obj or arr; caches do not get saved if refreshed only if saved in db)
//factorial is n! (5! = 5 * 4 * 3 * 2 * 1); factorial = same calcs over again. We can save the result of the factorial function into an obj.
const factorial = (n) => {
    // calculations go here:
    return factorial
}
factorial(35)
factorial(36) // factorial(36) = factorial(35) * 36

//Basic memoization exercise
//Task 1: write a func times10, that takes arg, n, and multiplies n times 10

const times10 = (n) => (n * 10)

console.log(`~~Task 1~~`)
console.log('times10 returns:', times10(9))

//Task 2: use an obj to cache the results of times10 func
    //create a func that checks if val for n has been calcualted before
    // if the val for n has not been calc, calc it and then save the result in the cache obj

    const cache = {}
    const memoTimes10 = (n) => {
        if (n in cache) { // if n is in cache, simply return cache
            return cache[n] // n (9) is not in cache, it starts off empty so move to the else statement --- i don't know how 9 was retrieved, or what cache[n] means... is n an index or element or key?
        } else { // if n has not been calculated, calculate it, then put the result in cache, and return it
            let result = times10(n) // result = times10 function (9*10)
            cache[n] = result // 9 = 90; using bracket notation to save the value to obj...
            return result // 90, so the cache obj is supposed to look like {9: 90}
        }
    }
    console.log(`~~Task 2~~`)
    console.log('task 2 calculated value:', memoTimes10(9)) // calculated
    console.log('task 2 cached value:', memoTimes10(9)) // cached

//Task 3: Clean up your global scope by moving your cache inside your func (i.e. making task 2 better)
    //tip: use a closure to return a func that you can call later; what to do: create a variable and put the cache inside
const memoizedClosureTimes10 = () => {
    let cache = {} // in func body, initialize cache as an empty obj; that makes cache var private and out of global scope!
    return (n) => { // then we're going to return func n
        if (n in cache) {
            return cache[n]
        }  else {
            let result = n * 10
            cache[n] = result 
            return result
        }
    }
}

const memoClosureTimes10 = memoizedClosureTimes10 // when we are calling memoClosureTimes10 it doesn't call the entire body; it calls the function that is being returned (line 105 onwards, function definition), since this is closure we still have reference to parent scope line 103. memoizedClosureTimes10 is a function invocation (an action, verb).

//Task 4: make memo function more generic, we want to enable memoize var to take in any callback to calculate result
const memoize = (callback) => { // generic var name, and pass in whatever func you want it to run
    let cache = {} // in func body, initialize cache as an empty obj; that makes cache var private and out of global scope!
    return (...args) => { // more generic since we can pass any number of args instead of 1
        if (n in cache) {
            return cache[n]
        }  else {
            let result = callback(...args) //callback(9,10, ...)
            cache[n] = result 
            return result
        }
    }
}

//time and space not improved in memoization, just shows best practices as engineers writing code; this is a hash table data structure... this is good for "expensive operations" idk what that means!

const memoizedTimes10 = memoize(times10)