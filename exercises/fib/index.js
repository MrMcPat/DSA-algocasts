// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    let array = [0, 1]

    if (n === 0) {
        return 0
    } else {
        for (let i = 2; i <= n; i++) {
            array.push(array[i - 1] + array[i - 2])
        }  
        return array.pop()
    }
}

//Memoization + Recursion
// function memoize(fn) {
//     const cache = {}
//     return function(...args) {
//         if (cache[args]) {
//             return cache[args]
//         }

//         const result = fn.apply(this, args)
//         cache[args] = result

//         return result
//     }
// }

// function slowFib(n) {
//     if (n < 2) {
//         return n
//     }

//     return fib(n - 1) + fib (n - 2)
// }

// const fib = memoize(slowFib)

module.exports = fib;
